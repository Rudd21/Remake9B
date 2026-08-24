import './home.scss'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom'
import LoadScreen from '../../components/load-screen/load-screen';
import Banner from '../../components/banner/banner.jsx';
import ScrollNav from '../../components/scroll-nav/scroll-nav';
import Footer from '../../components/footer/footer.jsx';

const Home = () => {

    const {pallete, theme} = useOutletContext() || {};
    const scrollBlockRef = useRef(null);

    useEffect(()=>{
        const scrollBlock = scrollBlockRef.current;
        if(!scrollBlock) return;

        const handleWheel = (e) => {
            e.preventDefault();

            scrollBlock.scrollLeft += e.deltaY * 2;
        };

        scrollBlock.addEventListener('wheel', handleWheel, {passive: false})

        return ()=>{
            scrollBlock.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
    <div 
        className="base_site"
        style={theme ? 
            {
                background: pallete.background, 
                color: pallete.color
            } : {
                background: 'white', 
                color: 'black'
            }
        }
        >
        <LoadScreen/>
        <Banner />
        <div
            className='scroll-block' 
            style={{borderColor: pallete.color}}
            ref={scrollBlockRef}
        >
            <ScrollNav />
        </div>
        <Footer/>
    </div>
  )
}

export default Home