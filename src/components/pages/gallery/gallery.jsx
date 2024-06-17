import React from 'react'
import "./gallery.scss"
import { Link} from 'react-router-dom';

const gallery = () => {
  return (
    <div>
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
    <h1 className='banner_oldGuard_h1'>GALLERY</h1>
    <img className='about-svg1' src='gallery_banner.svg'/>
  </div>
  <div className="gallery">
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="newRemakeB.jpg" alt="" />
        </div>
        <h3 className="photo_text">Remake 9B</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="https://rudd21.github.io/MyClass/img/donbas.jpg" alt="" />
        </div>
        <h3 className="photo_text">Before remake 9B</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="last_chismas.jpg" alt="" />
        </div>
        <h3 className="photo_text">Ласт хрисмас, ай гив ю май харт</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="https://rudd21.github.io/MyClass/img/maxdrive.jpg" alt="" />
        </div>
        <h3 className="photo_text">Максим біжить по лезу</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="last3.jpg" alt="" />
        </div>
        <h3 className="photo_text">3B prays</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="wedding.jpg" alt="" />
        </div>
        <h3 className="photo_text">Yarik and Khystia wedding</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="1B.jpg" alt="" />
        </div>
        <h3 className="photo_text">1B "Mykolay go to ATO soldiers"</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="karpaty.jpg" alt="" />
        </div>
        <h3 className="photo_text">Не дивіться на Юру</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="we_dance.jpg" alt="" />
        </div>
        <h3 className="photo_text">А ось тут ми вже самі just dance</h3>
    </div>
    <div className="photoANDtext">
        <div className="photo_gallery">
            <img src="harry_potter.jpg" alt="" />
        </div>
        <h3 className="photo_text">Ну тіпа в Хогвардсі</h3>
    </div>
  </div>
  <footer className="footer_social">
      <div className="sides_footer">
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

export default gallery