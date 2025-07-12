import React, { useState, useEffect, useRef } from 'react';

interface DynMapProps {
  serverUrl?: string;
  width?: string | number;
  height?: string | number;
  world?: string;
  mapType?: string;
  zoom?: number;
  centerX?: number;
  centerZ?: number;
  onPlayerClick?: (playerData: any) => void;
  onMarkerClick?: (markerData: any) => void;
  showPlayers?: boolean;
  showMarkers?: boolean;
}

export const DynMap: React.FC<DynMapProps> = ({
  serverUrl = 'http://146.59.47.21:25572',
  width = '100%',
  height = '100%',
  world = 'world',
  mapType = 'flat',
  zoom = 1,
  centerX = 0,
  centerZ = 0,
  onPlayerClick = null,
  onMarkerClick = null,
  showPlayers = true,
  showMarkers = true
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapData, setMapData] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Build DynMap URL with parameters
  const buildDynMapUrl = () => {
    const params = new URLSearchParams();

    if (world) params.append('worldname', world);
    if (mapType) params.append('mapname', mapType);
    if (zoom) params.append('zoom', zoom.toString());
    if (centerX !== null) params.append('x', centerX.toString());
    if (centerZ !== null) params.append('z', centerZ.toString());

    const queryString = params.toString();
    return queryString ? `${serverUrl}?${queryString}` : serverUrl;
  };

  // Check DynMap API availability
  const checkDynMapStatus = async () => {
    try {
      const response = await fetch(`${serverUrl}/up/configuration`);
      if (response.ok) {
        const config = await response.json();
        setMapData(config);
        setError(null);
      } else {
        setError('DynMap сервер недоступен');
      }
    } catch (err) {
      setError('Ошибка подключения к DynMap серверу');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkDynMapStatus();
  }, [serverUrl]);

  const handleIframeLoad = () => {
    setIsLoading(false);

    // Try to establish communication with iframe for events
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        // Send settings to iframe (if DynMap supports postMessage)
        iframeRef.current.contentWindow.postMessage({
          type: 'dynmap-config',
          showPlayers,
          showMarkers,
          onPlayerClick: !!onPlayerClick,
          onMarkerClick: !!onMarkerClick
        }, '*');
      } catch (e) {
        console.log('Невозможно установить связь с DynMap iframe');
      }
    }
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Ошибка загрузки DynMap');
  };

  // Message listener from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        if (event.origin !== new URL(serverUrl).origin) return;

        const { type, data } = event.data;
        
        switch (type) {
          case 'player-click':
            if (onPlayerClick) onPlayerClick(data);
            break;
          case 'marker-click':
            if (onMarkerClick) onMarkerClick(data);
            break;
          default:
            break;
        }
      } catch (e) {
        // Ignore origin errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [serverUrl, onPlayerClick, onMarkerClick]);

  const retryConnection = () => {
    setIsLoading(true);
    setError(null);
    checkDynMapStatus();
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070914] z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#161724] border-t-[#1ad76f] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#a7add2]">Загрузка карты...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070914] z-10">
          <div className="text-center p-6 max-w-md">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold mb-2 text-[#ff6250]">
              Ошибка подключения
            </h3>
            <p className="mb-4 text-[#a7add2]">{error}</p>
            <button 
              onClick={retryConnection}
              className="px-6 py-2 bg-[#1ad76f] hover:bg-[#18c265] text-white rounded-full font-semibold transition-colors"
            >
              Повторить попытку
            </button>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={buildDynMapUrl()}
        width="100%"
        height="100%"
        frameBorder="0"
        title="DynMap"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        className="border-none bg-[#070914]"
        allow="geolocation; microphone; camera"
      />
      
      {mapData && (
        <div className="absolute top-4 right-4 bg-[#161724]/80 text-white px-3 py-2 rounded-lg text-sm z-10 backdrop-blur-sm">
          Сервер: {mapData.title || 'Мыло'}
        </div>
      )}
    </div>
  );
};
