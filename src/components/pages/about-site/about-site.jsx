import React from 'react'
import "./about-site.scss"
import { Link} from 'react-router-dom';


const aboutSite = () => {
  return (
    <div className='basement_about'>
            <nav className='banner-nav'>
            <div className="content-nav">
                {/* <l-grid
                    size="60"
                    speed="1.5"
                    stroke="1.5"
                    style={{ transition: 'background-color 5s linear' }}
                    color={colors[colorIndex]}
                ></l-grid> */}
                <div className="social">
                    <div class="dropdown">
                        <Link to="/" className='header-nav'>Back</Link>
                    </div>
                    <button className='header-nav'>Switch theme</button>
                </div>
            </div>
        </nav>
      <div className="banner_about">
        <h1 className='banner_h1'>ABOUT SITE</h1>
        <img className='about-svg1' src='about_banner.svg'/>
      </div>
      <div className="text_about1">Взагалі ідея створити сайт появилася ще в 2021 році, коли я найшов інстаграм аккаунт свого колеги класу. Мені ця ідея сподобалась і я запропонував в чаті однокласникам теж зробити інстаграм аккаунт з нашим класом, но мені відповіли , що це все хуйня. Після чого задумався створити уже сайт, но через малий досвід в розробці сайтів і взагалі не знання JavaScript заставило мене реалізацію сайту відкласти. Вже в грудні 2021 почав вчити JavaScript, і вже липня 2022 я релізнув сайт, але без JavaScript. Вже в грудні 2022 року я в більшості редизайнув сайт, з функціоналу зробив лише інформацію про однокласників. В люьому 2023 сайт впав, задумувалася переробка, але вона так і не була втілена в реальність.</div>
      <img className='about-svg2' src='img1_about.svg'/>
      <div className="text_about2">І впродовж до серпня сайт лежав, но потім за місяць я його реабілітував і переробив з нуля, обіцяв зробити цей новий сайт до зими 2023, но вийшов він на хостинг лише зараз(30.05.2024).</div>
      <footer className="footer_social">
          <div className="ssides_footer">
              <div className="text_side rainbow-border" >
                <div className="citata">
                  <p>А мені альтушки з госуслуг дороще батьківщини</p>
                </div>
                <div className="owner_citata">
                  <p>- Яцков Тарас -</p>
                  
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
              <button className="link_school" href="#"><p>Ми в новинах</p></button>
              <button className="link_school" href="#"><p>Сайт Школи</p></button>
              <button className="link_school" href="#"><p>▼Ліцей на карті</p></button>
            </div>
            <div className="info_links rainbow-border">
              <h1 style={{textAlign: "center"}}>Які ж всеж слони🐘</h1>
              <a className="link_school" href="https://www.youtube.com/watch?v=FUMoPqISLqw">Ми в телевізорі</a>
              <a className="link_school" href="https://sites.google.com/view/lyceum18-if/головна-сторінка">Сайт слонів⇗</a>
            </div>
          </div>

        </div>
        <div className="footer_footer">
          <div className="rainbow-line"></div>
          <div className="prava">Ⓒ 2021-2024 Всі права програно в Казино</div>
        </div>
      </footer>
    </div>
  )
}

export default aboutSite