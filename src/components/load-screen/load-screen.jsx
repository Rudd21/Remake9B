import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from "framer-motion"
import "./load-screen.scss"
import 'ldrs/hatch'

const screenVariants = {
  // Стан 1
  covered: {
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  },
  // Стан 2
  uncovered: {
    y: "-100vh",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
  }
}

const logoVariants = {
  covered: { opacity: 1, scale: 1 },
  uncovered: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
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
const LoadScreen = ({ isTransitioning }) => {
  
  const currentStage = isTransitioning ? "covered" : "uncovered";

  return (
    <motion.div 
      className="load-screen-overlay"
      variants={screenVariants}
      initial="covered"
      animate={currentStage}
    >
      <motion.div className='logoAndText' variants={logoVariants}>
        <l-hatch id="loading" size="42" stroke="4" speed="3.5" color="#ffffff"></l-hatch>
        <p>While everyone was studying history, we threw in snus</p>
      </motion.div>
    </motion.div>
  )
}

export default LoadScreen