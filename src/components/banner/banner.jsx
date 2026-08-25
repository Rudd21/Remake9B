import React, {useState, useEffect, useRef} from 'react'
import { motion } from "framer-motion"
import 'ldrs/grid'
import "./banner.scss"
import { infinity } from 'ldrs'
import { useOutletContext } from 'react-router'

const triangleVariats = {
    initial:{
      x: 0,
      transition:{
        duration:5,
        staggerChildren: 0.1,
        delay: 4,
        ease: "easeInOut",
        yoyo: Infinity
      }
    },
    animate:{
      x: -10,
      transition:{
        repeat:Infinity,
        duration:5,
        staggerChildren: 0.1,
        delay: 4,
      },
    },
  }
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
            delay:2,
        }
    }
}
const buttonAnim ={
    initial:{
        y:0,
        transition:{
            repeat: infinity,
            duration:1,
            delay:0,
        }
    },
    animate:{
        y:10,
        transition:{
            repeat: infinity,
            duration:1,
            delay:0,
        }
    },
}

// Component
const Banner = () => {

    const {theme, setTheme} = useOutletContext() || {};

    const content_link = 'https://raw.githubusercontent.com/Rudd21/Remake9B/refs/heads/main/public/'

    const [colorIndex, setColorIndex] = useState(0)
    const colors =['#6942c5','#492E87'];

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setColorIndex(prevIndex => (prevIndex + 1 ) % colors.length);
        },1000)
        return () => clearInterval(intervalId)
    }, []);

  return (
    <section className='banner'>
        <motion.div
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false, amount: 0.5 }}
            // transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <nav className='banner-nav'>
                <div className="content-nav">
                    <div className="social">
                        <div className="dropdown">
                            <button className='header-nav'>Зв'язатися</button>
                            <div className="dropdown-content">
                                <a href="https://instagram.com/taqpas">Instagram</a>
                                <a href="https://t.me/samogonshikkk">Telegram</a>
                                <a href="https://www.linkedin.com/in/taras-yatskov-657303425/">LinkedIn</a>
                            </div>
                        </div>
                        <button onClick={() => setTheme(theme === 'black' ? 'white' : 'black')} className='header-nav'>Змінити тему</button>
                    </div>
                </div>
            </nav>
            <main className='banner-content'>
                <div className="banner-text">
                    <div className='main-text'>
                        <h1 className='graduation-text' variants={appeardText} initial="initial" animate="animate">Випуск 2025</h1>
                        <p className='triangleAnim'>◂</p>
                    </div>
                    <motion.p variants={appeardText} initial="initial" 
                        animate={{ 
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                delay: 2.2
                            }
                        }}
                        className='describe-web'
                    >    
                        Клас є випуском Ліцею №18. Клас існував під буквою 'Б' з 2014 року та під буквою 'A' з 2023 року
                    </motion.p>
                </div>
                <motion.div className="image-box" variants={appeardText} initial="initial"                         
                    animate={{ 
                        y: 0,
                        opacity: 1,
                        transition: {
                        duration: 2,
                        delay: 3.4
                   }}}
                >
                    <img
                        className='image'
                        src={content_link + `donbasForAnim.jpg`} alt="banner_image" 
                    />
                    <p>Фотожаба "Звільнення Донецьку"</p>
                </motion.div>
            </main>
        </motion.div>
    </section>
  )
}

export default Banner