import "./app.scss"
import React, { useEffect, useState } from 'react'
import LoadScreen from "./components/load-screen/load-screen"
import Banner from "./components/banner/banner"
import ScrollNav from "./components/scroll-nav/scroll-nav"
import Footer from "./components/footer/footer"

const App = () => {
  const [dataHeight, setDataHeight] = useState(0);
  const [needTranslate, setNeedTranslate] = useState();
  const [translateX, setTranslateX] = useState(0);
  const [conditionChecked, setConditionChecked] = useState(false);
  const [totalScrolls, setTotalScrolls] = useState(0);
  const [saveScrolls, setSaveScrolls] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      setTotalScrolls(totalScrolls + event.deltaY);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [totalScrolls]);

  return (
    <div className="base_site">
      <div className="background"></div>
      <LoadScreen />
      <Banner />
      <ScrollNav
        totalScrolls={totalScrolls}
        needTranslate={needTranslate}
        saveScrolls={saveScrolls}
        setSaveScrolls={setSaveScrolls}
        conditionChecked={conditionChecked}
        setConditionChecked={setConditionChecked}
        translateX={translateX}
        setTranslateX={setTranslateX}
        setHeight={setDataHeight}
      />
      <Footer
        newDataHeight={dataHeight}
        totalScrolls={totalScrolls}
        setTotalScrolls={setTotalScrolls}
        translateX={translateX}
        setTranslateX={setTranslateX}
        dNeedTranslate={setNeedTranslate}
      />
    </div>
  )
};

export default App;