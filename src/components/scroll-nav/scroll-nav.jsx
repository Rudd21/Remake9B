import React,{useRef, useEffect, useLayoutEffect, useState} from 'react'
import "./scroll-nav.scss"
import { useScroll, motion, useTransform, useAnimation} from 'framer-motion';
import { Link} from 'react-router-dom';

const safeDocument = typeof document !== 'undefined' ? document : {};

const ScrollNav = ({totalScrolls, setConditionChecked, conditionChecked, translateX, setTranslateX, setHeight, needTranslate}) => {
  const scrolledY = window.scrollY
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };
    const [heightNavPixels, setHeightNavPixels] = useState(0);
    const [widthNavPixels, setWidthNavPixels] = useState(0);
    // const [translateX, setTranslateX] = useState(0);
    const elementRef = useRef(null);
    // const [totalScrolls, setTotalScrolls] = useState(0);
  
    useLayoutEffect(() => {
      if (elementRef.current) {
        const height = elementRef.current.clientHeight;
        setHeightNavPixels(height);
      }
    }, []);
    useLayoutEffect(() => {
      if (elementRef.current) {
        const width = elementRef.current.clientWidth;
        setWidthNavPixels(width);
        console.log(widthNavPixels)
      }
    }, []);
    

    // const [x, y] = useState(1)
    const [saveTranslate, setSaveTranslate] = useState(0)
    // useEffect(() => {
    //   if (translateX >= widthNavPixels) {
    //     if(x == 1){
    //       allowScroll();
    //       y(2)
    //       setTranslateX(saveTranslate);
    //     } else if(x==2){
    //       console.log("Було зміненно rewrite" + x)
    //       console.log("Було зміненно")
    //       setTranslateX(totalScrolls - heightNavPixels);
    //       blockScroll();
    //       y(1)
    //       setSaveTranslate(translateX)
    //     }
    //   } else if (totalScrolls > heightNavPixels) {
    //     setTranslateX(totalScrolls - heightNavPixels);
    //     blockScroll();
    //     window.scrollTo(0, heightNavPixels)
    //   } else {
    //     allowScroll();        
    //     setTranslateX(saveTranslate);
    //     setConditionChecked(false)
    //   }
    // }, [totalScrolls]);
    // useEffect(()=>{
    //   console.log("Збережено " + saveTranslate)
    // },[saveTranslate]) 
    // useEffect(() => {
    //   if (conditionChecked == false && scrolledY > heightNavPixels) {
    //     setTranslateX(totalScrolls - heightNavPixels);
    //     blockScroll();
    //     setConditionChecked(true);
    //   } else if (conditionChecked && totalScrolls > widthNavPixels) {
    //     setTranslateX(saveTranslate);
    //     allowScroll();
    //   }
    // }, [scrolledY, totalScrolls]);
    const [bagBlock, setBagBlock] = useState(true)
    const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //   const mediaQuery = window.matchMedia('(max-width: 767px)');
    //   setIsMobile(mediaQuery.matches);
  
    //   const handleResize = (event) => {
    //     setIsMobile(event.matches);
    //   };
  
    //   mediaQuery.addEventListener('change', handleResize);
    //   return () => {
    //     mediaQuery.removeEventListener('change', handleResize);
    //   };
    // }, []);
    const [openPage, setOpenPage] = useState(false)
    const funcSetPage = () => {
      // setOpenPage(true)
      console.log("Еллоу")
      allowScroll()
    }
    useEffect(() => {
      if (widthNavPixels > 768) {
        const completeMobileText = () => {
          if (
            scrolledY + 100 >= heightNavPixels &&
            (heightNavPixels - 150 < totalScrolls && totalScrolls < widthNavPixels + 1000) ||
            needTranslate === true
          ) {
            setTranslateX(totalScrolls - heightNavPixels);
            window.scrollTo(0, heightNavPixels);
            setSaveTranslate(translateX);
            blockScroll();
            if (bagBlock) {
              allowScroll();
              setBagBlock(false);
            }
          } else if (
            totalScrolls > widthNavPixels + 1000 ||
            translateX <= 0 ||
            openPage === true
          ) {
            setTranslateX(saveTranslate - 100);
            allowScroll();
            if (translateX < 0) {
              allowScroll();
            }
          }
  
          console.log(saveTranslate + ' У сейві');
          console.log(translateX + ' Транслейт');
        };
  
        completeMobileText();
      }else{
        console.log("mobile version")
      }
    }, [totalScrolls,scrolledY,needTranslate])
  //     useEffect(()=>{

  //       if (scrolledY+100 >= heightNavPixels &&(heightNavPixels - 150 < totalScrolls  && totalScrolls < widthNavPixels + 1000) || needTranslate === true) {
  //         // console.log("NEs")
  //         setTranslateX(totalScrolls - heightNavPixels);
  //         window.scrollTo(0, heightNavPixels)
  //         setSaveTranslate(translateX)
  //         blockScroll();
  //         if(bagBlock == true){
  //           allowScroll();
  //           setBagBlock(false)
  //         }
  //       }else if(totalScrolls>widthNavPixels+1000 || translateX <= 0 || openPage==True){
  //         setTranslateX(saveTranslate-100)
  //         // console.log(saveTranslate + " Засейвино")
  //         allowScroll();
  //         if(translateX < 0){
  //           allowScroll();
  //         }
  //       }

  //     console.log(saveTranslate + " У сейві")
  //     console.log(translateX + " Транслейт")
  //     // console.log((widthNavPixels +1000) + " Ввіз")
  //     // if(scrolledY + 100 >= heightNavPixels){
  //     //   console.log(true + " Має в бік")
  //     // }else{
  //     //   console.log(false + " НЕМає в бік")
  //     // }
  //     // if(heightNavPixels - 150
  //     //    < totalScrolls){
  //     //   console.log(true + " total")
  //     // }else{
  //     //   console.log(false + " total")
  //     // }
  //     // if(totalScrolls < widthNavPixels + 1000){
  //     //   console.log(true + " Гортає")
  //     // }else{
  //     //   console.log(false + " НЕГортає")
  //     // }
  //   }, [totalScrolls,scrolledY,needTranslate])

  // if (widthNavPixels<768) {
  //   console.log('Mobile');
  // }else if (widthNavPixels>768){
  //   completeMobileText()
  // }
    const translateNav = -(translateX < 0 ? 0 : translateX);
    const translateTransform = {
      transform: `translate(${translateNav}px, ${0}px)`
    };
  

    // Оригінальний код функції

    // translateXParentt(translateX)
    setHeight(heightNavPixels)
  return (
    <motion.section id='scrollNav' className='scrollNav' 
      ref={elementRef}
      style={translateTransform}
    >
        <div className="text-nav">
            <p className='text-nav-p'>That website use: React, Framer-motion and JSX</p>
            <p>Contined scrolling :)</p>
        </div>
          <Link to="/about_site" onClick={funcSetPage}  className='button aboutSite'>
            <div className="text-button">
                <h1>About website</h1>
                <p>History site started in 2021 after idea about it</p>
            </div>
          </Link>
          <Link to="/classmates" onClick={funcSetPage}  className='button aboutClassmate'>
            <div className="text-button ">
                <h1>Classmate's</h1>
                <p>After started 10 grade a lot of classmates changed</p>
            </div>
        </Link>
        <Link to="/oldguard" onClick={funcSetPage}  className='button aboutGvardia'>
            <div className="text-button ">
                <h1>Old Gvardia</h1>
                <p>Tried not to forget anyone</p>
            </div>
        </Link>
        <Link to="/gallery" onClick={funcSetPage}   className='button aboutGallery'>
        <div className="text-button">
                <h1>Gallery</h1>
                <p>Photos from the photo shoot and edited by me</p>
            </div>
        </Link>
        <a href="https://rudd21.github.io/Porfolio/" className='button aboutDeveloper'>
            <div className="text-button">
                <h1>About developer</h1>
                <p>Hi, my name is Walter Hartvel White</p>
            </div>
        </a>
    </motion.section>
  )
}

export default ScrollNav;
