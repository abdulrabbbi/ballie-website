import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n/i18n";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={null}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </Suspense>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
