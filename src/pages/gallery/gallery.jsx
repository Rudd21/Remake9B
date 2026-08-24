import React from 'react'
import "./gallery.scss"
import { Link, useOutletContext} from 'react-router-dom';
import AnimatedLink from '../../components/animated/AnimatedLink';
import Footer from '../../components/footer/footer';

const gallery = () => {

  const {pallete, theme, setTheme} = useOutletContext();

  return (
    <div style={{background: pallete.background}}>
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
        <h1 className='banner_oldGuard_h1'>GALLERY</h1>
        <img className='about-svg1' src='gallery_banner.svg'/>
      </div>
      <div className="gallery">
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="newRemakeB.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">10-Б</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="https://rudd21.github.io/MyClass/img/donbas.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">9-Б</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="last_chismas.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Ласт хрисмас, ай гив ю май харт</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="https://rudd21.github.io/MyClass/img/maxdrive.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Максим біжить по лезу</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="last3.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">3-Б Сповідь</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="wedding.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Шиперство Ярослава та Христини</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="1B.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">2-Б творче свято "Я люблю мій Івано-Франківськ"</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="karpaty.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Не дивіться на Юру</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="group_zal.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Хз звідки це і що це</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="4orti.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Перед святом Миколая</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="we_dance.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">А ось тут ми вже самі just dance</h3>
        </div>
        <div className="photoANDtext">
            <div className="photo_gallery">
                <img src="harry_potter.jpg" alt="" />
            </div>
            <h3 style={{color: pallete.color}} className="photo_text">Ну тіпа в Хогвардсі</h3>
        </div>
      </div>
      <Footer />
</div>
  )
}

export default gallery