import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/fonts/pretendard/pretendardvariable.css"

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/autoplay';

import "./assets/styles/index.scss"


import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      basename="/"
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);