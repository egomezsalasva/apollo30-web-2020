//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
//-Components
import IntroAnimation from '../components/topFold/introAnimation/IntroAnimation'
import HeroTopFold from '../components/topFold/heroTopFold/HeroTopFold'




//MAIN COMPONENT
const TopFold = () => {

    //GLOBAL ANIM EFFECTS
      const effectStartBoxes01 = useRef({ 
        duration: 1.2,
        scaleX: 0, 
        transformOrigin:"right", 
      })
      const effectMoveUpText01 = useRef({
        duration: 1.6,
        y: 66,
        opacity: 0,
        rotate: 2,
        stagger: 0.2,
        ease: "power4.inOut",
      })
      const effectFadeInText01 = useRef({
        duration: 1.2,
        opacity: 0,
        y: 1,
        ease: "power4.inOut",
      })
    //

    //INTRO TOP FOLD ANIMATION
      useEffect( () => {
        const introTl = gsap.timeline()
        introTl
          //Division 4 Anim
          .to("#introAnimBox01", effectStartBoxes01.current, "start")
          .to("#introAnimBox02", effectStartBoxes01.current, "start")
          .to("#introAnimBox03", effectStartBoxes01.current, "start")
          .to("#introAnimBox04", effectStartBoxes01.current, "start")
          .to("#introAnimContainer", { duration: 0, display: "none" })
          //Fade In texts
          .from(".welcomeIntro", effectFadeInText01.current, "stage02")
          .from(".menuHeading", effectFadeInText01.current, "stage02")
          .from(".menuOptions", effectFadeInText01.current, "stage02")
          .from(".sidenavBottomText", effectFadeInText01.current, "stage02")
          .from(".ctaText", effectFadeInText01.current, "stage02")
          .from(".descriptionTextContainer", effectFadeInText01.current, "stage02")
          .from(".circleTextLogo", { duration: 1.2, opacity: 0, scale:0.9, y: 1, ease: "power4.inOut"}, "stage02")
          .from(".logo", {duration: 1.2, opacity: 0, scale: 0.75, ease: "power4.inOut"}, "stage02")
          //We are Apollo30 Anim
          .from(".welcomeHeadingInner", effectMoveUpText01.current, "stage03-=0.4")
          //Scroll Me Anim
          .to(".sidenavBottomText", {duration: 1.2, y: -12, ease: "power4.inOut"}, "+=1.6")
          .delay(1.2)
      }, [])
    //
    
    return (
      <>
        <IntroAnimation />
        <HeroTopFold />
      </>
    )
}
export default TopFold
