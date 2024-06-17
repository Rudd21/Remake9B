import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import "./load-screen.scss"
import 'ldrs/hatch'

const loadVariats = {
  initial:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
      staggerChildren: 0.1,
      delay: 2,
    }
  },
  animate:{
    x: 1700,
    opacity:0,
    transition:{
      duration:2,
      staggerChildren: 0.1,
      delay: 2,
    }
  }
}

const opacityVariats = {
  initial:{
    opacity:1,
    scale: 1.2,
    transition:{
      duration:1,
      staggerChildren: 0.1,
      delay: 0,
    }
  },
  animate:{
    opacity:0,
    scale: 1,
    transition:{
      duration:0.5,
      staggerChildren: 0.1,
      delay: 1,
    }
  }
}
// Default values shown  
const LoadScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () =>{
      setIsLoading(false)
    }
//  window.addEventListener('load', handleLoad)
// return () => {
//   window.addEventListener('load', handleLoad)
// }
  const timeout = setTimeout(() => {
    setIsLoading(false);
  }, 10000);

return () => clearTimeout(timeout);
}, [])

  return (
    <>
      <motion.div 
        className="div"
        variants={loadVariats} 
        initial="initial"
        animate="animate" 
        // animate={isLoading ? "animate" : "initial"}
      >
      <motion.div className='logoAndText' 
      variants={opacityVariats} 
      initial="initial" 
      animate="animate">
        <l-hatch
        id="loading"
        size="42"
        stroke="4"
        speed="3.5"
        color="#ffffff" 
        ></l-hatch>
        <p>While everyone was studying history, we threw in snus</p>
      </motion.div>
      </motion.div>
    </>
  )
}

export default LoadScreen