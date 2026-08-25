import "./app.scss"
import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom"

import LoadScreen from "./components/load-screen/load-screen"
import Banner from "./components/banner/banner"
import ScrollNav from "./components/scroll-nav/scroll-nav"
import Footer from "./components/footer/footer"

const App = () => {

  const [theme, setTheme] = useState('white');

  const themes = {
    white:{
      color: 'black',
      buttonBackground: 'none',
      lightColor: '#cfd9df',
      background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
    },
    black:{
      color: 'white',
      buttonBackground: 'white',
      lightColor: '#3c4042',
      background: 'linear-gradient(to top, #3c4042 0%, #2a2e2e 100%)'
    }
  }

  const pallete = themes[theme];

  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (navigateCallback) => {
    setIsTransitioning(true);

    setTimeout(()=>{
      navigateCallback();

      setTimeout(()=>{
        setIsTransitioning(false)
      }, 100)
    }, 500);
  }

  return (
    <div className={`base_site ${theme}`}>
      <h1>APP WORKS</h1>
      {/* {false && <LoadScreen isTransitioning={isTransitioning}/>}
      <main>
        <Outlet context={{pallete, theme, setTheme, navigateTo}} />
      </main> */}
    </div>
  )
};

export default App;