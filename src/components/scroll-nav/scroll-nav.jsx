import React,{useRef, useEffect, useLayoutEffect, useState} from 'react'
import "./scroll-nav.scss"
import { useScroll, motion, useTransform, useAnimation} from 'framer-motion';
import { Link, useOutletContext} from 'react-router-dom';
import AnimatedLink from '../animated/AnimatedLink';

const safeDocument = typeof document !== 'undefined' ? document : {};

const ScrollNav = ({ navigateTo }) => {

  const {pallete, theme} = useOutletContext() || {};

  return (
    <section className='scrollNav' 
    >
        <div className="text-nav">
            <p style={{color: pallete.color}} className='text-nav-p'>Навігація по сайту</p>
        </div>
        <AnimatedLink to="/about_site"  className='button aboutSite'>
          <div className="text-button">
            <h1>Про сайт</h1>
            <p>Історія починається з 2021 року</p>
          </div>
        </AnimatedLink>
        <AnimatedLink to="/classmates" className='button aboutClassmate'>
            <div className="text-button ">
              <h1>Список осіб</h1>
              <p>Багатько осіб назбиралось</p>
            </div>
        </AnimatedLink>
        <AnimatedLink to="/gallery" className='button aboutGallery'>
          <div className="text-button">
              <h1>Галерея</h1>
              <p>Фото редаговані мною або з фотосесій</p>
            </div>
        </AnimatedLink>
    </section>
  )
}

export default ScrollNav;
