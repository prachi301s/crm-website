import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ThemeProvider from "./theme";

//* https://codetain.com/blog/how-to-translate-react-application-with-react-i18next-part-2
i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "es",
        detection: {
            order: ["localStorage", "cookie", "htmlTag"],
            caches: ["localStorage", "cookie"],
        },
        backend: {
            loadPath: "/assets/locales/{{lng}}/translation.json",
        },
    });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
