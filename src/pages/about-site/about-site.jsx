import React from 'react'
import "./about-site.scss"
import { Link, useOutletContext} from 'react-router-dom';
import Footer from "../../components/footer/footer"
import AnimatedLink from '../../components/animated/AnimatedLink';

const aboutSite = () => {

  const {pallete, theme, setTheme} = useOutletContext();

  return (
    <div className='basement_about' style={{background: pallete.background}}>
      <nav className='banner-nav'>
        <div className="content-nav">
          <div className="social">
            <div className="dropdown">
              <AnimatedLink to='/' className='header-nav'>Назад</AnimatedLink>
            </div>
            <button onClick={() => setTheme(theme === 'black' ? 'white' : 'black')} className='header-nav'>Змінити тему</button>
          </div>
        </div>
      </nav>
      <div className="banner_about">
        <h1 className='banner_h1' style={{color: pallete.color}}>ABOUT SITE</h1>
        <img className='about-svg1' src='./about_banner.svg'/>
      </div>
      <p className="text_about1" style={{color: pallete.color}}>
        Взагалі ідея створити сайт появилася ще в 2021 році, коли я найшов інстаграм аккаунт свого колеги класу. 
        Мені ця ідея сподобалась і я запропонував в чаті однокласникам теж зробити інстаграм аккаунт з нашим класом, 
        но мені відповіли , що це все хуйня. Після чого задумався створити уже сайт, 
        но через малий досвід в розробці сайтів і взагалі не знання JavaScript заставило мене реалізацію сайту відкласти. 
        Вже в грудні 2021 почав вчити JavaScript, і вже липня 2022 я релізнув сайт, але без JavaScript. 
        Вже в грудні 2022 року я в більшості редизайнув сайт, з функціоналу зробив лише інформацію про однокласників. 
        В лютому 2023 сайт впав, задумувалася переробка, але вона так і не була втілена в реальність.
      </p>
      <img className='about-svg2' src='img1_about.svg'/>
      <p className="text_about2" style={{color: pallete.color}}>
        І впродовж до серпня сайт лежав, но потім за місяць я його реабілітував і переробив з нуля, 
        обіцяв зробити цей новий сайт до зими 2023, но вийшов він на хостинг лише зараз(30.05.2024).
      </p>
      <p className="text_about2" style={{color: pallete.color}}>
        Текст від 17.08.2026: Після серії невдалих співбесід на стажування, я можна сказати 'вигорів', 
        вийшов з коду на 10 днів і вирішив почати повертатися в діяльність, починаючи з простого перебудування цього сайту.
      </p>
      <Footer />
    </div>
  )
}

export default aboutSite