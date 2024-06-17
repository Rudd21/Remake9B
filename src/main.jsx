import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AboutSite from "./components/pages/about-site/about-site.jsx";
import Classmates from "./components/pages/classmates/classmates.jsx";
import OldGuard from "./components/pages/oldGuard/oldGuard.jsx";
import Gallery from "./components/pages/gallery/gallery.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about_site" element={<AboutSite />} />
        <Route path="/classmates" element={<Classmates />} />
        <Route path="/oldGuard" element={<OldGuard />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);