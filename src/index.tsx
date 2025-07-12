import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ElementDefault } from "./screens/ElementDefault";
import { OfferAgreement } from "./screens/OfferAgreement";
import { PrivacyPolicy } from "./screens/PrivacyPolicy";
import { WikiPage } from "./screens/WikiPage";
import { WikiLayout } from "./screens/WikiPage/WikiLayout";
import { WikiInfo } from "./screens/WikiPage/sections/WikiInfo";
import { WikiRules } from "./screens/WikiPage/sections/WikiRules";
import { WikiFeatures } from "./screens/WikiPage/sections/WikiFeatures";
import { WikiCrafts } from "./screens/WikiPage/sections/WikiCrafts";
import { WikiGuides } from "./screens/WikiPage/sections/WikiGuides";
import { WikiMods } from "./screens/WikiPage/sections/WikiMods";
import { MapPage } from "./screens/MapPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementDefault />} />
        <Route path="/offer-agreement" element={<OfferAgreement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/map" element={<MapPage />} />
        
        {/* Wiki routes with nested structure */}
        <Route path="/wiki" element={<WikiLayout />}>
          <Route index element={<WikiPage />} />
          <Route path="info" element={<WikiInfo />} />
          <Route path="rules" element={<WikiRules />} />
          <Route path="features" element={<WikiFeatures />} />
          <Route path="crafts" element={<WikiCrafts />} />
          <Route path="guides" element={<WikiGuides />} />
          <Route path="mods" element={<WikiMods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
