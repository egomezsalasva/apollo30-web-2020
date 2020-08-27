//IMPORTS
//-Modules
import React, {useRef, useEffect, useState} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Styles
import {apolloColors, apolloFonts} from './data/apollo30styles'
//-Images
// import logoImg from './assets/images/apollo30Logo.png'
import spaceTextureHero from './assets/images/spaceTextureHero.png'
import apolloPortfolio from './assets/images/apolloPortfolio.gif'
import arrowServices from './assets/images/apolloServicesArrow.svg'
// import bigLogo from './assets/images/apollo30BigLogo.svg'
import nikeImg01 from './assets/images/nike/nike01.jpg'
import nikeImg02 from './assets/images/nike/nike02.jpg'
import nikeImg03 from './assets/images/nike/nike03.jpg'
import nikeImg04 from './assets/images/nike/nike04.jpg'
import unikoImg01 from './assets/images/uniko/uniko01.jpg'
import trickImg01 from './assets/images/trick/trick01.gif'
import threeMarksImg01 from './assets/images/threeMarks/threeMarksImg01.gif'
import premisButacaImg01 from './assets/images/premisButaca/premisButaca01.gif'
import muchoMuchachoImg01 from './assets/images/muchoMuchacho/muchoMuchacho01.gif'
import sitaImg01 from './assets/images/sitaAbellan/sitaAbellan01.jpg'
import newIconsImg01 from './assets/images/newIcons/newIcons01.gif'
import laProaImg01 from './assets/images/laProa/laProa01.jpg'
import chipBakerImg01 from './assets/images/chipBaker/chipBaker01.gif'
//-Components
import SideNav from './components/SideNav'


//STYLES
//-Vars
const leftSideWidth = "25vw"
//-Components
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    font-style: normal;
    font-weight: normal;  
    src: url('./assets/fonts/Graphik-Regular.eot');
    src: url('./assets/fonts/Graphik-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Graphik-Regular.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Regular.woff') format('woff'),
        url('./assets/fonts/Graphik-Regular.ttf') format('truetype'),
        url('./assets/fonts/Graphik-Regular.svg#Graphik-Regular') format('svg');
    /* font-display: swap; */
  }
  @font-face {
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    src: url('./assets/fonts/Graphik-Black.eot');
    src: url('./assets/fonts/Graphik-Black.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Graphik-Black.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Black.woff') format('woff'),
        url('./assets/fonts/Graphik-Black.ttf') format('truetype'),
        url('./assets/fonts/Graphik-Black.svg#Graphik-Black') format('svg');
    /* font-display: swap; */
  }
  @font-face {
    font-family: 'VCR OSD Mono';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/VCROSDMono.eot');
    src: url('./assets/fonts/VCROSDMono.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/VCROSDMono.woff2') format('woff2'),
        url('./assets/fonts/VCROSDMono.woff') format('woff'),
        url('./assets/fonts/VCROSDMono.ttf') format('truetype'),
        url('./assets/fonts/VCROSDMono.svg#VCROSDMono') format('svg');
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Graphik', 'Helvetica', Arial, sans-serif;
    background: ${apolloColors.light};
  }
  button{
    border: none;
    outline: none;
  }
`
const FirstAnimContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .firstAnimBox{
    display: inline-block;
    width: 25%;
    height: 100%;
    background: ${apolloColors.light};

  }
`
const ContentContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100vw - ${leftSideWidth});
`
const TopFold = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${spaceTextureHero});
  background-size: cover;
  background-position: center;

  .logo{
    position: absolute;
    right: 60px;
    top: 60px;
    height: 60px;
    z-index: 50;
  }
  .heroTop{
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 150px);
    /* background: ${apolloColors.dark}; */

    .welcomeHeadingComposition{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;

      .welcomeIntro{
        color: ${apolloColors.light};
        ${apolloFonts.subheading03};
      }
      .welcomeHeadingContainer{
        margin-top: 20px;
        .welcomeHeading{
          height: 66px;
          color: ${apolloColors.light};
          ${apolloFonts.heading01};
          overflow: hidden;
        }
      }
      
    }
  }
  .heroBottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    /* background: ${apolloColors.dark}; */
    display: flex;
    .ctaButton{
      /*width: 20.8333333vw;  300px */
      width: 25vw;
      height: 100%;
      background: ${apolloColors.light};
      cursor: pointer;
      .ctaText{
        color: ${apolloColors.dark};
        ${apolloFonts.textSpecial};
      }
    }
    .descriptionBox{
      width: calc(100% - 25vw);
      align-self: center;
      text-align: center;

      .descriptionTextContainer{
        display: inline-block;
        padding: 40px;
        text-align: left;
        color: ${apolloColors.light};
        ${apolloFonts.textLarge};
      }
    }  
  }
`
const FirstSectionSpace = styled.div`
  width: 100%;
  height: 60px;
  background: ${apolloColors.light};
`
const Section = styled.section`
  width: 100%;
  background: ${apolloColors.light};

  .sectionCenter{
    width: 910px;
    margin: 0 auto;
    padding: 70px 0 130px;
    padding-left: 45px;
    @media (max-width: 1230px) {
      width: 100%; 
    }

    .sectionTitle{
      color: ${apolloColors.dark};
      ${apolloFonts.heading02};
    }
    .sectionDescription{
      margin-top: 30px;
      max-width: 500px;
      color: ${apolloColors.dark};
      ${apolloFonts.textLarge};
    }

    .listContainer{
      position: relative;

      .apolloList{
        display:inline-block;
        padding-top: 50px;
        width: 500px;
        @media (max-width: 1230px) {
          width: 54.9450549% ;
          /* min-width: 300px; */  
        }

        .listTitle{
          padding-left: 10px;
          ${apolloFonts.subheading03};
        }
        .divisionLine{
          width: 100%;
          height: 2px;
          background: ${apolloColors.dark};
        }
        .topLine{
          margin-top: 20px;
        }

        .tab{
          position: relative;
          border-bottom: 2px solid ${apolloColors.dark};
          width: 100%;
          height: calc(60px + 2px);
          cursor: default;

          .tabTitle{
            position: absolute;
            top: 20px;
            left: 10px;
            display: inline-block;
            color: ${apolloColors.dark};
            ${apolloFonts.subheading01};
          }
          .tabRole{
            position: absolute;
            top: 25px;
            right: 10px;
            ${apolloFonts.textSmall};
            opacity: 0.33;
          }
          .tabMailPlus{
            right: calc(10px + 15px + 20px);
            opacity: 0;
          }
          .tabRolePlus{
            right: calc(10px + 15px + 20px);
          }
          .plusCrew{
            position: absolute;
            top: 21px;
            right: 10px;
            display: inline-block;
            width: 20px;
            height: 20px;
            .line01Plus{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2px;
              height: 12px;
              background: ${apolloColors.dark};
            }
            .line02Plus{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              height: 2px;
              width: 12px;
              background: ${apolloColors.dark};
            }
          }
          
        }

        .pointerTab{
          cursor: pointer;
        }

        .coordinates{
          margin: 20px 0 0 10px;
          color: ${apolloColors.dark};
          ${apolloFonts.subheading03};
        }

        .address{
          margin: 20px 0 0 10px;
          color: ${apolloColors.dark};
          ${apolloFonts.textLarge};
        }

        .contactText{
          margin: 10px 0 0 10px;
          color: ${apolloColors.dark};
          ${apolloFonts.textLarge};
          a{
            text-decoration: none;
            color: ${apolloColors.dark};
          }
        }

        .phoneText{
          margin-top: 20px;
        }

        .linkedinText{
          margin-bottom: 0px;
        }

      }

      /* .listFeatured{
        .topLine{
          opacity: 0;
        }
        .tab{
          background: ${apolloColors.dark};
          border-bottom: 2px solid ${apolloColors.light};
          .tabTitle{
            color: ${apolloColors.light};
          }
          .tabRole{
            color: ${apolloColors.light};
            opacity: 0.33;
          }
        }
      } */

      .servicesList{
        .topLine{
          width: 500px;
        }
        .tab{
          width: 500px;
          height: 60px;
          /* height: 104px; */
          &:hover .tabReadMore{
            opacity: 0.33;
            transition: opacity 0.8s ease-in-out;
          } 

          .tabTitle{
            position: absolute;
            top: 19px;
            left: 10px;
            display: inline-block;
            color: ${apolloColors.dark};
            ${apolloFonts.subheading03};
          }
          .tabReadMore{
            position: absolute;
            top: 24px;
            right: calc(20px + 20px + 10px);
            ${apolloFonts.textSmall};
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
          }
          .tabServiceText{
            display: none;
            width: 360px;
            position: absolute;
            top: 20px;
            right: calc(20px + 20px + 10px);
            ${apolloFonts.textSmall};
            line-height: 18px;
            opacity: 0;
          }
        }
        .arrowContainer{
            position: absolute;
            top: 20px;
            right: 10px;
            width: 20px;
            height: 20px;
            /* background: red; */

            .arrowWrapper{
              width: 100%;
              height: 100%;
              /* background: blue; */
              transform: rotate(45deg);

              .arrowServices{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 18px;
                height: 14px;
                background: url(${arrowServices});
                background-repeat: no-repeat;
                background-size: contain;
              }
            }  
          }
      }
        
      .photoContainer{
        position: absolute;
        top: calc(50px + 20px + 20px + 2px);
        left: 500px;
        height: 300px;
        /* width: calc(410px + 40px); */
        width: calc(31.25vw);
        @media (max-width: 1230px) {
          /* width: calc(100% - 54.9450549%); */
          width: 29.6747967vw; /* BUG Not Working */
          min-width: 380px;
          left: 54.9450549%;
        }

        .photoBox{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: url(${apolloPortfolio});
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }

    }
    

  } 
`
/*const BackgroundLogo = styled.div`
  height: 100%;
  width: 100%;
  //background: url(https://media.giphy.com/media/l0K4lUxBzIOeJd1EA/giphy.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75%;
  mask: url(${bigLogo});
  mask-repeat: no-repeat;
  mask-size: 75%;
  mask-position: center;
  opacity: 0;
`*/


//DATA
const imagesForLaunches = {

  default: [
      apolloPortfolio
  ],

  nike: [
    nikeImg01,
    nikeImg02,
    nikeImg03,
    nikeImg04,
  ],

  uniko: [
    unikoImg01
  ], 

  trick: [
    trickImg01
  ],

  threeMarks: [
    threeMarksImg01
  ],

  premisButaca: [
    premisButacaImg01
  ],
  
  muchoMuchacho: [
    muchoMuchachoImg01
  ],

  sita: [
    sitaImg01
  ],

  newIcons: [
    newIconsImg01
  ],

  laProa: [
    laProaImg01
  ],

  chipBaker: [
    chipBakerImg01
  ]
}

//MAIN COMPONENT
const App = () => {

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
        .to(".firstAnimBox01", effectStartBoxes01.current, "start")
        .to(".firstAnimBox02", effectStartBoxes01.current, "start")
        .to(".firstAnimBox03", effectStartBoxes01.current, "start")
        .to(".firstAnimBox04", effectStartBoxes01.current, "start")
        .to(".firstAnimContainer", { duration: 0, display: "none" })
        //Fade In texts
        .from(".welcomeIntro", effectFadeInText01.current, "stage02")
        .from(".menuHeading", effectFadeInText01.current, "stage02")
        .from(".menuOptions", effectFadeInText01.current, "stage02")
        .from(".sidenavBottomText", effectFadeInText01.current, "stage02")
        .from(".ctaText", effectFadeInText01.current, "stage02")
        .from(".descriptionTextContainer", effectFadeInText01.current, "stage02")
        .from(".logo", {duration: 1.2, opacity: 0, scale: 0.75, ease: "power4.inOut"}, "stage02")
        //We are Apollo30 Anim
        .from(".welcomeHeadingInner", effectMoveUpText01.current, "stage03-=0.4")
        //Scroll Me Anim
        .to(".sidenavBottomText", {duration: 1.2, y: -12, ease: "power4.inOut"}, "+=1.6")
        .delay(1.2)
    }, [])
  //

  //CTA BUTTON ANIMATION
    let ctaButtonRef = useRef()
    const ctaButtonTl = gsap.timeline({paused: true, reversed: true})
    useEffect( () => {
      ctaButtonTl.to(ctaButtonRef, { 
        duration: 0.8, 
        width: "37.5vw",
        ease: "power2.inOut",
      })
    }, [ctaButtonTl])
  //

  //IMAGE SCROLL FOLLOWER
    
    //SCROLL FOLLOW
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger)
      }
      let photoBoxRef = useRef()
      useEffect(() => {
        ScrollTrigger.create({
          pin: photoBoxRef,
          trigger: photoBoxRef,
          start: "center center",
          endTrigger: ".list2019",
          end: `bottom-=130px center`,
        })
      }, [])
    //
  
    //LOOP IMAGES FUNCTION
      /*const loopImages = arrayOfImages => {
          let counterImgs = 0
          document.querySelector(".photoBox").style.background = `url(${arrayOfImages[counterImgs]})`
          document.querySelector(".photoBox").style.backgroundPosition = "center"
          document.querySelector(".photoBox").style.backgroundSize = "contain"
          document.querySelector(".photoBox").style.backgroundRepeat = "no-repeat"
          let interval = setInterval( () => {
            counterImgs++
            if(counterImgs === arrayOfImages.length){
              counterImgs = 0
            }
            document.querySelector(".photoBox").style.background = `url(${arrayOfImages[counterImgs]})`
            document.querySelector(".photoBox").style.backgroundPosition = "center"
            document.querySelector(".photoBox").style.backgroundSize = "contain"
            document.querySelector(".photoBox").style.backgroundRepeat = "no-repeat"
          },2000)
          return () => clearInterval(interval);
      }
      const resetToDefaultLoopImage = () => {
          loopImages(imagesForLaunches.portfolio)
      }
      */
      const defaultGif = () => {
        document.querySelector(".photoBox").style.background = `url(${imagesForLaunches.default[0]})`
        document.querySelector(".photoBox").style.backgroundPosition = "center"
        document.querySelector(".photoBox").style.backgroundSize = "contain"
        document.querySelector(".photoBox").style.backgroundRepeat = "no-repeat"
      }
      const setImage = img => {
        document.querySelector(".photoBox").style.background = `url(${img[0]})`
        document.querySelector(".photoBox").style.backgroundPosition = "center"
        document.querySelector(".photoBox").style.backgroundSize = "contain"
        document.querySelector(".photoBox").style.backgroundRepeat = "no-repeat"
      } 
    //

  //

  //NAV SCROLL HANDLER
    //Check Scroll Section
      useEffect( () => { 

        const checkSection = (sectionId, sectionRef) => {
          const lauchesSectionTop = document.querySelector(sectionId).getBoundingClientRect().top - 60 - (window.innerHeight * 0.5)
          const lauchesSectionBottom = document.querySelector(sectionId).getBoundingClientRect().bottom - 60 - (window.innerHeight * 0.5)
          if( lauchesSectionTop < 0 && lauchesSectionBottom > 0){
            document.querySelector(sectionRef).classList.add("active")
          } else {
            document.querySelector(sectionRef).classList.remove("active")
          }
        }

        window.addEventListener('scroll', e => {
          checkSection( "#launches", "#launchesNavRef")
          checkSection( "#services", "#servicesNavRef")
          checkSection( "#crew", "#crewNavRef")
          checkSection( "#base", "#baseNavRef")
        })


        

      }, [])
    //
  //

  //CREW ANIMATIONS
      
      let plusAntoLine01 = useRef()
      let plusAntoLine02 = useRef()
      let plusAntoRole = useRef()
      let plusAntoMail = useRef()
      let crewHoverAntoTl = gsap.timeline({ paused: true, reversed: true })
      useEffect( () => { 
          crewHoverAntoTl.to( plusAntoLine01, { duration: 0.8, rotate: 90, ease: "power2.inOut"}, "start" )
                         .to( plusAntoLine02, { duration: 0.8, rotate: 180, ease: "power2.inOut"}, "start" )
                         .to( plusAntoRole, { duration: 0.8, x: `${-95.03 - 19}`, ease: "power2.inOut" }, "start" )
                         .to( plusAntoMail, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4" )
      }, [crewHoverAntoTl])


      let plusSandraLine01 = useRef()
      let plusSandraLine02 = useRef()
      let plusSandraRole = useRef()
      let plusSandraMail = useRef()
      let crewHoverSandraTl = gsap.timeline({ paused: true, reversed: true })
      useEffect( () => { 
          crewHoverSandraTl.to( plusSandraLine01, { duration: 0.8, rotate: 90, ease: "power2.inOut"}, "start" )
                         .to( plusSandraLine02, { duration: 0.8, rotate: 180, ease: "power2.inOut"}, "start" )
                         .to( plusSandraRole, { duration: 0.8, x: `${-95.03 - 19}`, ease: "power2.inOut" }, "start" )
                         .to( plusSandraMail, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4" )
      }, [crewHoverSandraTl])

  //

  //SERVICES ACCORDEON
      const [servicesWide, setServicesWide] = useState(false)
      const [creativityTabActive, setCreativityTabActive] = useState(false)
      const [brandTabActive, setBrandTabActive] = useState(false)
      const [mediaTabActive, setMediaTabActive] = useState(false)
      const [developmentTabActive, setDevelopmentTabActive] = useState(false)

      const creativityTl = gsap.timeline({ paused: true, reversed: false })
      const brandTl = gsap.timeline({ paused: true, reversed: false })
      const mediaTl = gsap.timeline({ paused: true, reversed: false })
      let topLineServicesRef = useRef()
      let creativityTabRef = useRef()
      let arrowCreativityRef = useRef()
      let arrowBrandRef = useRef()
      let arrowMediaRef = useRef()
      let arrowDevelopmentRef = useRef()
      let brandInnovationTabRef = useRef()
      let mediaActivationTabRef = useRef()
      let developmentTabRef = useRef()
      let creativityReadMoreRef = useRef()
      let brandReadMoreRef = useRef()
      let mediaReadMoreRef = useRef()
      let creativityTextRef = useRef()
      let brandTextRef = useRef()
      let mediaTextRef = useRef()
      const creativityClickHandler = () => {
        if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
          creativityTl
                  .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
                  .to(creativityReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
                  .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
                  .to(arrowCreativityRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.2")
                  .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
                  .to(arrowBrandRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
                  .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
                  .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
                  .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
                  .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
                  .to(creativityReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
                  .to(creativityTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
                  .to(creativityTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
                  // .from(creativityTextRef, { duration: 0.8, y: 1, ease: "power2.inOut" }, "stage03")
                  .play()
          setServicesWide(!servicesWide)
          setCreativityTabActive(!creativityTabActive)
        } else if (servicesWide === true  && creativityTabActive === true && brandTabActive === false && mediaTabActive === false && developmentTabActive === false) {
          creativityTl.reverse()
          setServicesWide(!servicesWide)
          setCreativityTabActive(!creativityTabActive)
        }

      }
      const brandClickHandler = () => {
        if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
          brandTl
                  .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
                  .to(brandReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
                  .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
                  .to(arrowCreativityRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
                  .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
                  .to(arrowBrandRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.4")
                  .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
                  .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
                  .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
                  .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
                  .to(brandReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
                  .to(brandInnovationTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
                  .to(brandTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
                  // .from(creativityTextRef, { duration: 0.8, y: 1, ease: "power2.inOut" }, "stage03")
                  .play()
          setServicesWide(!servicesWide)
          setBrandTabActive(!brandTabActive)
        } else if (servicesWide === true  && creativityTabActive === false && brandTabActive === true && mediaTabActive === false && developmentTabActive === false) {
          brandTl.reverse()
          setServicesWide(!servicesWide)
          setBrandTabActive(!brandTabActive)
        }

      }
      const mediaClickHandler = () => {
        if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
          mediaTl
                  .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
                  .to(mediaReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
                  .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
                  .to(arrowCreativityRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
                  .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
                  .to(arrowBrandRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
                  .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
                  .to(arrowMediaRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.6")
                  .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
                  .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
                  .to(mediaReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
                  .to(mediaActivationTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
                  .to(mediaTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
                  // .from(creativityTextRef, { duration: 0.8, y: 1, ease: "power2.inOut" }, "stage03")
                  .play()
          setServicesWide(!servicesWide)
          setMediaTabActive(!mediaTabActive)
        } else if (servicesWide === true  && creativityTabActive === false && brandTabActive === false && mediaTabActive === true && developmentTabActive === false) {
          mediaTl.reverse()
          setServicesWide(!servicesWide)
          setMediaTabActive(!mediaTabActive)
        }

      }


  //

  
  return (
    <>
      <GlobalStyle/>

      <FirstAnimContainer className="firstAnimContainer">
        <div className="firstAnimBox firstAnimBox01"/>
        <div className="firstAnimBox firstAnimBox02"/>
        <div className="firstAnimBox firstAnimBox03"/>
        <div className="firstAnimBox firstAnimBox04"/>
      </FirstAnimContainer>

      <SideNav/>

      <ContentContainer>

        <TopFold>

          {/* <img className="logo" src={logoImg} alt="Apollo30 Logo" /> */}

          <div className="heroTop" >
            {/* <BackgroundLogo /> */}
            <div className="welcomeHeadingComposition">
              <div className="welcomeIntro">Hi Humans,</div>
              <div className="welcomeHeadingContainer">
                <div className="welcomeHeading">
                  <div className="welcomeHeadingInner">We Are</div>
                </div>
                <div className="welcomeHeading">
                  <div className="welcomeHeadingInner">Apollo30</div>
                </div>
              </div>
            </div>
          </div>

          <div className="heroBottom">
            <button 
              className="ctaButton" 
              ref={el => ctaButtonRef = el} 
              onMouseEnter={() => ctaButtonTl.play()}
              onMouseLeave={() => ctaButtonTl.reverse()}
            >
              <div className="ctaText">Message Us</div>
            </button>
            <div className="descriptionBox">
                <div className="descriptionTextContainer">
                  <div>We are a creative studio based in Barcelona.</div>
                  <div>We develop creative communication strategies.</div>
                </div>
            </div>
          </div>

        </TopFold>

        <FirstSectionSpace/>

        <Section id="launches">
          <div className="sectionCenter">

            <h2 className="sectionTitle">Launches</h2>
            <p className="sectionDescription">Here are some non-confidential launches we have picked from our archives</p>

            <div className="listContainer">

              <div className="apolloList listFeatured">
                <h5 className="listTitle">Featured</h5>

                <div className="divisionLine topLine"></div>
                <div className="tab">
                  <h3 className="tabTitle">Vogue</h3>
                  {/* Art Direction */}
                  <div className="tabRole">Creativity</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.nike)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Nike</h3>
                  {/* Branded Content Campaign */}
                  <div className="tabRole">Creativity</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Cambridge Press</h3>
                  <div className="tabRole">Creativity / Development</div>
                </div>
              </div>
              <div className="apolloList list2020">
                <h5 className="listTitle">2020</h5>

                <div className="divisionLine topLine"></div>
                <div className="tab">
                  <h3 className="tabTitle">Can Pizza</h3>
                  <div className="tabRole">All Services</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.muchoMuchacho)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Mucho Muchacho</h3>
                  {/* Branded Content Campaign */}
                  <div className="tabRole">Creativity / Development</div>  
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.sita)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Sita Abellán</h3>
                  <div className="tabRole">Creativity / Branding</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.threeMarks)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Three Marks Coffee</h3>
                  {/* E-commerce Development */}
                  <div className="tabRole">Development</div>
                </div>
                <div className="tab">
                  <h3 className="tabTitle">Xemei</h3>
                  <div className="tabRole">All Services</div>
                </div>
                <div className="tab">
                  <h3 className="tabTitle">La Zebra Slow Food</h3>
                  <div className="tabRole">All Services</div>
                </div>
                <div className="tab">
                  <h3 className="tabTitle">La Zorra </h3>
                  <div className="tabRole">All Services</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Trick.Wtf</h3>
                  {/* E-commerce Development */}
                  <div className="tabRole">Branding / Development</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Nial</h3>
                  <div className="tabRole">Branding / Development</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                  <h3 className="tabTitle">Finally Press</h3>
                  <div className="tabRole">Creativity / Development</div>
                </div>
              </div>
              <div className="apolloList list2019">
                <h5 className="listTitle">2019</h5>

                <div className="divisionLine topLine"></div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.newIcons)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">New Icons</h3>
                    <div className="tabRole">Branding</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.laProa)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">La Proa 04</h3>
                    <div className="tabRole">Branding / Development</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.chipBaker)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Chip Baker Films</h3>
                    <div className="tabRole">Branding / Development</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.uniko)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Uniko. "Model Agency"</h3>
                    <div className="tabRole">Branding</div>
                </div>
                <div className="tab">
                    <h3 className="tabTitle">Scranny's House</h3>
                    <div className="tabRole">All Services</div>
                </div>
                <div className="tab">
                    <h3 className="tabTitle">The New Storytellers</h3>
                    <div className="tabRole">Development</div>
                </div>
                <div className="tab" onMouseEnter={() => setImage(imagesForLaunches.premisButaca)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Premis Butaca</h3>
                    {/* Campaign, Web, Video & Photography */}
                    <div className="tabRole">Branding / Development</div>
                </div>
                <div className="tab">
                    <h3 className="tabTitle">Owl Institute</h3>
                    <div className="tabRole">Branding / Development</div>
                </div>
                <div className="tab">
                    <h3 className="tabTitle">Cafes Bou</h3>
                    {/* Packaging Design */}
                    <div className="tabRole">Creativity</div>
                </div>
              </div>
              <div className="photoContainer" ref={el => photoBoxRef = el}>
                <div className="photoBox"></div>
              </div>


            </div>

          </div>
        </Section>

        <Section id="services">
          <div className="sectionCenter">

            <h2 className="sectionTitle">Services</h2>
            <p className="sectionDescription">We believe that in our current era, there’s a saturation of stimuli. This requires differentiation through tailored content.</p>

            <div className="listContainer">
              <div className="apolloList servicesList">
                <div className="divisionLine topLine" ref={el => topLineServicesRef = el}></div>
                <div className="tab pointerTab" ref={el => creativityTabRef = el} onClick={() => creativityClickHandler()}>
                  <h3 className="tabTitle">Creativity</h3>
                  <div className="tabReadMore" ref={el => creativityReadMoreRef = el}>Click To Read More</div>
                  <div className="tabServiceText" ref={el => creativityTextRef = el}>Creamos contenido (publicitario, cinematográfico, social, digital y móvil) que trasciende los medios tradicionales y difumina las líneas entre productos, experiencias, contenido y marketing.</div>
                  <div className="arrowContainer">
                    <div className="arrowWrapper" ref={el => arrowCreativityRef = el}>
                      <div className="arrowServices" />
                    </div>  
                  </div> 
                </div>
                <div className="tab pointerTab" ref={el => brandInnovationTabRef = el} onClick={() => brandClickHandler()}>
                  <h3 className="tabTitle">Brand Innovation</h3>
                  <div className="tabReadMore" ref={el => brandReadMoreRef = el}>Click To Read More</div>
                  <div className="tabServiceText" ref={el => brandTextRef = el}>Los consumidores de hoy no compran una marca, se han de sentir partícipes de ella. Ayudamos a las marcas a simplificar y aclarar quiénes son para transmitir mejor y llegar a conectar verdaderamente con su público objetivo.</div>
                  <div className="arrowContainer">
                    <div className="arrowWrapper" ref={el => arrowBrandRef = el}>
                      <div className="arrowServices" />
                    </div>  
                  </div> 
                </div>
                <div className="tab pointerTab" ref={el => mediaActivationTabRef = el} onClick={() => mediaClickHandler()}>
                  <h3 className="tabTitle">Media Activation</h3>
                  <div className="tabReadMore" ref={el => mediaReadMoreRef = el}>Click To Read More</div>
                  <div className="tabServiceText" ref={el => mediaTextRef = el}>La abundancia de competencia en el mercado actual exige una dosis extra de creatividad y estrategia. Una estrategia ocurrente garantiza ubicaciones de medios más ingeniosas y, por tanto, mas efectivas.</div>
                  <div className="arrowContainer">
                    <div className="arrowWrapper" ref={el => arrowMediaRef = el}>
                      <div className="arrowServices" />
                    </div>  
                  </div>
                </div>
                <div className="tab pointerTab" ref={el => developmentTabRef = el}>
                  <h3 className="tabTitle" >Development</h3>
                  <div className="tabReadMore">Click To Read More</div>
                  <div className="arrowContainer">
                    <div className="arrowWrapper" ref={el => arrowDevelopmentRef = el}>
                      <div className="arrowServices" />
                    </div>  
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Section>

        <Section id="crew">
          <div className="sectionCenter">
            <h2 className="sectionTitle">Crew</h2>

            <div className="listContainer">
              <div className="apolloList">
                <h5 className="listTitle">Operations</h5>

                <div className="divisionLine topLine"></div>
                <div className="tab pointerTab"
                 onMouseEnter={ () => crewHoverAntoTl.play() }
                 onMouseLeave={ () => crewHoverAntoTl.reverse() }
                >
                  <h3 className="tabTitle">Anto</h3>
                  <div className="tabRole tabRolePlus" ref={el => plusAntoRole = el}>Creative Director</div>
                  <div className="tabRole tabMailPlus" ref={el => plusAntoMail = el}>a@apollo30.com</div>
                  <div className="plusCrew">
                    <div className="line01Plus" ref={el => plusAntoLine01 = el}></div>
                    <div className="line02Plus" ref={el => plusAntoLine02 = el}></div>
                  </div>
                </div>
                <div className="tab pointerTab"
                  onMouseEnter={ () => crewHoverSandraTl.play() }
                  onMouseLeave={ () => crewHoverSandraTl.reverse() }
                >
                  <h3 className="tabTitle tabRolePlus" >Sandra</h3>
                  <div className="tabRole tabRolePlus" ref={el => plusSandraRole = el}>Accounting</div>
                  <div className="tabRole tabMailPlus" ref={el => plusSandraMail = el}>s@apollo30.com</div>
                  <div className="plusCrew">
                    <div className="line01Plus" ref={el => plusSandraLine01 = el}></div>
                    <div className="line02Plus" ref={el => plusSandraLine02 = el}></div>
                  </div>
                </div>
                <div className="tab">
                  <h3 className="tabTitle">Cesar</h3>
                  <div className="tabRole">Videographer / Motion Designer </div>
                </div>
                <div className="tab">
                  <h3 className="tabTitle">Paula</h3>
                  <div className="tabRole">Community Manager / Junior Designer</div>
                </div>
              </div>

              <div className="apolloList">
                <h5 className="listTitle">Technicians</h5>

                <div className="divisionLine topLine"></div>
                <div className="tab">
                  <h3 className="tabTitle">Kike</h3>
                  <div className="tabRole">UX & UI Designer / Front-End Developer</div>
                </div>
                <div className="tab">
                  <h3 className="tabTitle">Pablo</h3>
                  <div className="tabRole">Full-Stack Developer</div>  
                </div>
                <div className="tab">
                  <h3 className="tabTitle">Nathan</h3>
                  <div className="tabRole">Photographer</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="base">
          <div className="sectionCenter">
            <h2 className="sectionTitle">Base</h2>

            <div className="listContainer">
              <div className="apolloList">
                <h5 className="listTitle">Apollo30 Headquarters</h5>

                <div className="divisionLine topLine"></div>

                <h5 className="coordinates">41.2145º N, 2.0739º E</h5>
                
                <div className="address">
                  C/ d’Enric Morera 5-7, <br/>
                  08902, l’Hospitalet de Llobregat, BCN, ES 
                </div>
              </div>

              <div className="apolloList">
                <h5 className="listTitle">Establish Communication</h5>

                <div className="divisionLine topLine"></div>
            
                <div className="contactText phoneText">+34 693 037 682</div>
                <div className="contactText">contact@apollo30.com</div>
                <div className="contactText"><a href="https://www.instagram.com/apollo30com/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
                <div className="contactText linkedinText"><a href="https://www.linkedin.com/company/apollo-30/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>

              </div>
            </div>
          </div>
        </Section>

      </ContentContainer>
    </>
  )
}
export default App
