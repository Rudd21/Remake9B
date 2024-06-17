import React, {useState, useEffect, useRef} from 'react'
import { motion } from "framer-motion"
import 'ldrs/grid'
import "./banner.scss"
import { infinity } from 'ldrs'

const triangleVariats = {
    initial:{
      x: 0,
      transition:{
        duration:5,
        staggerChildren: 0.1,
        delay: 4,
        ease: "easeInOut", // Тип анімації
        yoyo: Infinity // Відтворення анімації в обидва напрямки нескінченно разів
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
const banner = () => {
    const elementRef = useRef(null);
    const [heightBannerPixels, setHeightBannerPixels] = useState(0);
  
    useEffect(() => {
        if (elementRef.current) {
            const height = elementRef.current.clientHeight;
            setHeightBannerPixels(height);
        }
    }, []);
    useEffect(() =>{
        console.log(heightBannerPixels)
    }, [heightBannerPixels])
  const [totalScrolls, setTotalScrolls] = useState(0);
  useEffect(() => {
    const handleWheel = (event) => {
      setTotalScrolls(totalScrolls + event.deltaY);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [totalScrolls]);

    const [colorIndex, setColorIndex] = useState(0)
    const colors =['#6942c5','#492E87'];

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setColorIndex(prevIndex => (prevIndex + 1 ) % colors.length);
        },1000)
        return () => clearInterval(intervalId)
    }, []);
    const [Position,setPosition] = useState({x:0, y:0})
    const mousePosition = (e) =>{
        setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    }
  return (
    <section className='banner' ref={elementRef} >
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
                        <button className='header-nav'>Get in touch</button>
                        <div class="dropdown-content">
                            <a href="#">Instagram</a>
                            <a href="#">Telegram</a>
                            <a href="#">Reddit</a>
                        </div>
                    </div>
                    <button className='header-nav'>Switch theme</button>
                </div>
            </div>
        </nav>
        <main className='banner-main'>
            <div className="text">
                <div className='B10'>
                <div className='media_styles' style={{display:'flex', overflow:'hidden'}}>
                    <motion.p variants={appeardText} initial="initial" animate="animate" className='alpha10'>10 Alpha</motion.p>
                    <p className='triangleAnim'>◂</p>

                </div>
                <div style={{overflow:'hidden'}}>
                    <motion.p variants={appeardText} initial="initial" 
                        animate={{ 
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                delay: 2.2
                            }
                        }}
                    className='descibe-web'>Yes, you have correctly noticed. Beta became Alpha, not vice versa</motion.p>
                </div>
                </div>
            </div>
            <motion.div className="images" onMouseMove={mousePosition} 
            initial={{
                overflow: 'hidden',
            }}
            animate={{
                overflow: 'visible',
                transition: {
                    duration: 1,
                    delay: 5.2
                }
            }}>
                <motion.div className="image1-box" variants={appeardText} initial="initial"                         
                        animate={{ 
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                delay: 3.4
                            }
                        }}>
                    <img                  
                    // style={{
                    //     transformOrigin: `${Position.x}px ${Position.y}px`, // Встановлення центру обертання
                    //     transform: `scale(1.05) rotate(${0.1 * Position.x}deg) rotate(${0.1 * Position.y}deg)` // Обертання та масштабування
                    //     }} 
                        className='image1'
                        src="./public/donbasForAnim.jpg" alt="" 
                    />
                    <p> - Liberation of Donetsk</p>
                </motion.div>
                <motion.div ho className="image2-box" variants={appeardText} initial="initial" 
                        animate={{ 
                            y: -10,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                delay: 3.7
                            }
                        }}>
                    <p>Liberation of Mariupol - </p>
                    <img
                // style={{
                //     transformOrigin: `${Position.x}px ${Position.y}px`, // Встановлення центру обертання
                //     transform: `scale(1.05) rotate(${0.1 * Position.x}deg) rotate(${0.1 * Position.y}deg)` // Обертання та масштабування
                //     }}
                    className='image2'
                     src="./public/marik.jpg" alt="" />
                </motion.div>
            </motion.div>
        </main>
        <footer className='footer'>
                <motion.div style={{overflow:'hidden', height:'70px'}} variants={buttonAnim} initial="initial" animate="animate">
                    <motion.button variants={appeardText} initial="initial" 
                        animate={{ 
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                delay: 2.3
                            }
                        }} className='letsScroll'>
                        <p>Let's Scroll ⇓</p>
                    </motion.button>
                </motion.div>
        </footer>
    </section>
  )
}

export default banner