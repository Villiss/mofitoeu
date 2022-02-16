import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { Skeleton } from '@mui/material';

i18n
  .use(initReactI18next) // passes i18n do wn to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['sk', 'en', 'cz', 'de', 'hu'],
    fallbackLng: "en",
    detection: {
      order: ['subdomain', 'cookie', 'path', 'htmlTag', 'localStorage' ],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{lng}}translation.json'
    },
  });

const loadingMarkup = (
  <Skeleton variant="rectangular" width={'auto'} height={'100vh'} />
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Suspense>,
  document.getElementById('root')
);