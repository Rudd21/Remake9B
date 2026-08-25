console.log('MAIN JSX LOADED')

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/home/home.jsx'
import AboutSite from "./pages/about-site/about-site.jsx";
import Classmates from "./pages/classmates/classmates.jsx";
import OldGuard from "./pages/oldGuard/oldGuard.jsx";
import Gallery from "./pages/gallery/gallery.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

console.log('ROOT:', document.getElementById('root'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />
          <Route path="/about_site" element={<AboutSite />} />
          <Route path="/classmates" element={<Classmates />} />
          <Route path="/oldGuard" element={<OldGuard />} />
          <Route path="/gallery" element={<Gallery />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

console.log('AFTER ROOT')