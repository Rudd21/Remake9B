import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import React from 'react'
import "./footer.scss"
import { InView } from 'react-intersection-observer';
import ScrollNav from "../scroll-nav/scroll-nav";

const appeardText ={

  initial:{
      y:500,
      opacity:0,
      transition:{
          duration:1,
          delay:0,
      }
  },
  animate:{
      y:0,
      opacity:1,
      transition:{
          duration:2,
          delay:0,
      }
  }
}

const citatas = [
  {
    name: "- Андрейко Сергій -",
    citata: "Если вам плюют в спину, значит не смогли переплюнуть"
  },{
    name: "- Кіщук Анастасія -",
    citata: "Покі всі вивчали історію, ми вкидували снюс"
  },{
    name: "- Середюк Артем -",
    citata: "Рабами народжуютьсяв Африці"
  },{
    name: "- Рибак Анастасія -",
    citata: "Всі з друг другом дружать, щоб поїбатись"
  },{
    name: "- Мачкур Юрій -",
    citata: "За вас, за нас і zа Донбас"
  },{
    name: "- Яцков Тарас -",
    citata: "А мені альтушки з госуслуг дороще батьківщини"
  }]
const info_links = [
  {
    mainInfo: "Які ж всеж слони🐘",
    desribeLink1: "Ми в новинах⇗",
    desribeLink2: "Ми в телевізорі⇗",
    linkFirst: "https://www.youtube.com/watch?v=FUMoPqISLqw",
    linkSecond: "https://www.firtka.if.ua/blog/view/u-skoli-18-proveli-tvorce-svato-a-lublu-mij-ivanofrankivsk-foto101088"
  },{
    mainInfo: "Посиланння на слонів🐘",
    desribeLink1: "Сайт слонів⇗",
    desribeLink2: "Сайт школи від мене(далеко в майбутньому)",
    linkFirst: "",
    linkSecond: "https://sites.google.com/view/lyceum18-if/головна-сторінка"
  },{
    mainInfo: "Адреса слонів🐘",
    desribeLink1: "Україна, Івано-Франківська область, м.Івано-Франківськ, вул. Тролейбусна, 7",
    desribeLink2: "email: school18.webnode.com.ua",
    linkFirst: "https://www.google.com/maps/place/Івано-Франківський+ліцей+№+18/@48.9449388,24.7004309,17z/data=!4m6!3m5!1s0x4730c1ab5edd637d:0xb8257a580cb95623!8m2!3d48.9456072!4d24.6997316!16s%2Fg%2F1pp2tlh4w?hl=uk-UK&entry=ttu",
    linkSecond: "https://www.google.com/maps/place/Івано-Франківський+ліцей+№+18/@48.9449388,24.7004309,17z/data=!4m6!3m5!1s0x4730c1ab5edd637d:0xb8257a580cb95623!8m2!3d48.9456072!4d24.6997316!16s%2Fg%2F1pp2tlh4w?hl=uk-UK&entry=ttu"
  }
]
// const safeDocument = typeof document !== 'undefined' ? document : {};
const safeDocument = typeof document !== 'undefined' ? document : {};

const footer = ({totalScrolls, dNeedTranslate}) => {
  const [changeCitata, setChangeCitata] = useState(0);
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  // const scrollBlocked = useRef(null);
  const refFooter = useRef(null)
  // const html = safeDocument.documentElement;
  // const { body } = safeDocument;
  
  // const blockScroll = () => {
  //   if (!body || !body.style || scrollBlocked.current) return;

  //   const scrollBarWidth = window.innerWidth - html.clientWidth;
  //   const bodyPaddingRight =
  //     parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

  //   html.style.position = 'relative';
  //   html.style.overflow = 'hidden';
  //   body.style.position = 'relative';
  //   body.style.overflow = 'hidden';
  //   body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

  //   scrollBlocked.current = true;
  // };

  // const allowScroll = () => {
  //   if (!body || !body.style || !scrollBlocked.current) return;

  //   html.style.position = '';
  //   html.style.overflow = '';
  //   body.style.position = '';
  //   body.style.overflow = '';
  //   body.style.paddingRight = '';

  //   scrollBlocked.current = false;
  // };
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const height = elementRef.current.clientHeight;
      setHeightNavPixels(height);
    }
  }, []);
  useLayoutEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.clientWidth;
      setWidthNavPixels(width);
    }
  }, []);

  const intervalCitata = () => {
    setChangeCitata(prevState => (prevState + 1) % citatas.length);
  };
  
  useEffect(() => {
    const intervalId = setInterval(intervalCitata, 5000);
    return () => clearInterval(intervalId);
  }, []); // Порожній масив для запуску ефекту тільки один раз
  
  const serii = citatas[changeCitata];
  const [numberInfo, setNumberInfo] = useState(0);

  const handleClick = (number, event) => {
    setNumberInfo(number);
    event.preventDefault()
  };
  const [footerChecked, setFooterChecked] = useState(false)
  const [needTranslate, setNeedTranslate] = useState(false)
  // console.log(totalScrolls + " totalScrolls footer")
  useEffect(()=>{
    dNeedTranslate(needTranslate)
  }, [needTranslate])

  // useEffect(() => {
  //   const intervalId = setInterval(falseNeedFunc, 4000);
  //   return () => clearInterval(intervalId);
  // }, []); 
  const [agreeUse, setAgreeUse] = useState(0)
  return (
    <InView as="div" className="inViewBlock" onChange={(inView, entry) => {
      if (inView) {
        setFooterChecked(true);
        setNeedTranslate(false);
        setAgreeUse(1);
      } else if(!inView) {
        if (agreeUse == 1) {
          setNeedTranslate(true);
          setTimeout(() => {
            setNeedTranslate(false);
          }, 2000);
        }
      }
    }}>
      <section id="footer_section" style={{ display: totalScrolls < 1500 ? 'none' : 'block' }}>
        <footer className="footer_social">
          <div className="sides_footer">
              <div className="text_side rainbow-border" >
                <div className="citata">
                  <p>{serii.citata}</p>
                </div>
                <div className="owner_citata">
                  <p>{serii.name}</p>
                  
                </div>
              </div>
            <div className="links_side rainbow-border">
            <div className="describe_links">
              <p>Follow developer</p>
            </div>
            <div className="links_list ">
              <a className='desc_link' href="https://t.me/taknazizmu"><img className='logo_link' src="telegram.png" alt="" /></a>
              <a className='desc_link' href="https://instagram.com/taqpas"><img className='logo_link' src="instagram.png" alt="" /></a>
              <a className='desc_link' href="https://www.reddit.com/user/Taqpas/"><img className='logo_link' src="reddit.png" alt="" /></a>
              <a className='desc_link' href="https://rudd21.github.io/Porfolio/"><img className='logo_link' src="portfolio.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="school_info">
          <div className="sides_school">
            <div className="geo_school">
              <button className="link_school" onClick={() => handleClick(0)} href="#"><p>Ми в новинах</p></button>
              <button className="link_school" onClick={() => handleClick(1)} href="#"><p>Сайт Школи</p></button>
              <button className="link_school" onClick={() => handleClick(2)} href="#"><p>▼Ліцей на карті</p></button>
            </div>
            <div className="info_links rainbow-border">
              <h1 style={{textAlign: "center"}}>{info_links[numberInfo].mainInfo}</h1>
              <a className="link_school" href={info_links[numberInfo].linkSecond}>{info_links[numberInfo].desribeLink1}</a>
              <a className="link_school" href={info_links[numberInfo].linkFirst}>{info_links[numberInfo].desribeLink2}</a>
            </div>
          </div>

        </div>
        {/* <div className="footer_footer">
          <div className="rainbow-line"></div>
          <div className="prava">Ⓒ 2021-2024 Всі права програно в Казино</div>
        </div> */}
      </footer>
      </section>
    </InView>
  )
}

export default footer