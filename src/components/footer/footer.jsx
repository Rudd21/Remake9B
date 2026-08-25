import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import React from 'react'
import "./footer.scss"
import { InView } from 'react-intersection-observer';
import ScrollNav from "../scroll-nav/scroll-nav";
import { useOutletContext } from "react-router";

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
    citata: "За вас, за нас і за Донбас"
  },{
    name: "- Яцков Тарас -",
    citata: "А мені альтушки з Дії дороще батьківщини"
  }]
const info_links = [
  {
    mainInfo: "Які все ж слони🐘",
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

const Footer = () => {
  const {pallete, theme, setTheme} = useOutletContext() || {};
  const [changeCitata, setChangeCitata] = useState(0);

  const content_link = 'https://raw.githubusercontent.com/Rudd21/Remake9B/refs/heads/main/public/'

  const intervalCitata = () => {
    setChangeCitata(prevState => (prevState + 1) % citatas.length);
  };
  
  useEffect(() => {
    const intervalId = setInterval(intervalCitata, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  const serii = citatas[changeCitata];

  // Information switcher
  const [numberInfo, setNumberInfo] = useState(0);
  const handleClick = (number, event) => {
    setNumberInfo(number);
    event.preventDefault()
  };

  return (
      <section id="footer_section">
        <motion.div
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: false, amount: 0.5 }}
          // transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <footer className="footer_social">
            <div className="sides_footer">
              <div className="text_side rainbow-border" >
                <div className="citata">
                  <p style={{color: pallete.color}}>{citatas[changeCitata].citata}</p>
                </div>
                <div className="owner_citata">
                  <p>{citatas[changeCitata].name}</p>   
                </div>
              </div>
              <div className="links_side rainbow-border">
                <div className="describe_links">
                  <p style={{color: pallete.color}}>Follow developer</p>
                </div>
                <div className="links_list ">
                  <a className='desc_link' style={{background: pallete.buttonBackground}} href="https://t.me/furry_yushchenko"><img className='logo_link' src={`${content_link}telegram.png`} alt="telegram_link" /></a>
                  <a className='desc_link' style={{background: pallete.buttonBackground}} href="https://instagram.com/taqpas"><img className='logo_link' src="instagram.png" alt={`${content_link}instagram_link`} /></a>
                  <a className='desc_link' style={{background: pallete.buttonBackground}} href="https://www.linkedin.com/in/taras-yatskov-657303425/"><img className='logo_link' src={`${content_link}linkedin.png`} alt="linkedin_link" /></a>
                </div>
              </div>
            </div>
            <div className="school_info">
              <div className="sides_school">
                <div className="geo_school">
                  <button style={{color: pallete.color}} className="link_school" onClick={() => handleClick(0)} href="#"><p>Ми в новинах</p></button>
                  <button style={{color: pallete.color}} className="link_school" onClick={() => handleClick(1)} href="#"><p>Сайт Школи</p></button>
                  <button style={{color: pallete.color}} className="link_school" onClick={() => handleClick(2)} href="#"><p>▼Ліцей на карті</p></button>
                </div>
                <div className="info_links">
                  <h1 style={{textAlign: "center", color: pallete.color}}>{info_links[numberInfo].mainInfo}</h1>
                  <a style={{color: pallete.color}} className="link_school" href={info_links[numberInfo].linkSecond}>{info_links[numberInfo].desribeLink1}</a>
                  <a  style={{color: pallete.color}} className="link_school" href={info_links[numberInfo].linkFirst}>{info_links[numberInfo].desribeLink2}</a>
                </div>
              </div>
            </div>
            <div style={{background: pallete.lightColor}}>
              <hr />
              <div className="prava" style={{color: pallete.color}}>Ⓒ 2021-2026 Всі права програно в Казино</div>
            </div>
          </footer>
        </motion.div>
      </section>
  )
}

export default Footer