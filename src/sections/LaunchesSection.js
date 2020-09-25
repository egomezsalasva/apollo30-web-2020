//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Styles
import { apolloColors, apolloFonts } from '../data/apollo30styles'
//-Images
// import apolloPortfolio from '../assets/images/apolloPortfolio.gif'
import apolloDefault from '../assets/images/apolloPortfolio.gif'
import internalLinkIcon from '../assets/images/internalLink.svg'
import vogueImg01 from '../assets/images/vogue/vogue01.gif'
import nikeImg01 from '../assets/images/nike/nike01.gif'
import canPizzaImg01 from '../assets/images/canPizza/canPizza01.gif'
import sitaImg01 from '../assets/images/sitaAbellan/sitaAbellan02.gif'
import cambridgeImg01 from '../assets/images/cambridge/cambridge01.gif'
import muchoMuchachoImg01 from '../assets/images/muchoMuchacho/muchoMuchacho01.gif'
import threeMarksImg01 from '../assets/images/threeMarks/threeMarks01.gif'
import xemeiImg01 from '../assets/images/xemei/xemei01.gif'
import laZebraImg01 from '../assets/images/laZebra/laZebra01.png'
import trickImg01 from '../assets/images/trick/trick01.gif'
import nialImg01 from '../assets/images/nial/nial01.gif'
import finallyPressImg01 from '../assets/images/finallyPress/finallyPress01.gif'
import newIconsImg01 from '../assets/images/newIcons/newIcons01.gif'
import laProaImg01 from '../assets/images/laProa/laProa01.jpg'
import chipBakerImg01 from '../assets/images/chipBaker/chipBaker01.gif'
import unikoImg01 from '../assets/images/uniko/uniko01.png'
import scrannysHouseImg01 from '../assets/images/scrannysHouse/scrannysHouse01.png'
import theNewStorytellersImg01 from '../assets/images/theNewStorytellers/theNewStorytellers01.gif'
import premisButacaImg01 from '../assets/images/premisButaca/premisButaca01.gif'
import owlInstituteImg01 from '../assets/images/owlInstitute/owlInstitute01.png'
import bouCafesImg01 from '../assets/images/bouCafe/bouCafe01.gif'


//-Components
import GlobalSection from '../components/GlobalSection'
import GlobalList from '../components/GlobalList'
import FeaturedTab from '../components/launchesSection/FeaturedTab'
import LaunchesTab from '../components/launchesSection/LaunchesTab'

//STYLES
//-Components
const ListContainerStyledComp = styled.section`
    position: relative;

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
        @media (max-width: 950px) {
          display: none;
        }

        .photoBox{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: url(${apolloDefault});
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }

`
const InnerPage = styled.div`
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    min-height: 100vh;
    background: ${props => props.inputColor || apolloColors.dark };
    z-index: 300;
    overflow: scroll;

    .rightSection{
      position: absolute;
      right: 0;
      width: calc(100% - 12.5%);

      .topFoldInner{
        position: relative;
        height: 100vh;
        width: 100%;

        .bgImage{
          width: 400px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .titleTopFoldInner{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: ${apolloColors.light};
          font: ${apolloFonts.heading01};
          letter-spacing: 10px;
          text-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        }

      }

      .contentInner{
        width: 100%;
        .imageContainerInner{
          text-align: center;
          &:first-of-type{
            /* padding-top: 100px; */
          }
          img{
            width: 75%;
          }
        }
      }

    }
`

const InnerPageBackButton = styled.div`
  position: fixed;
  top: 0;
  left: -100vw;
  width: 12.5vw;
  height: 100vh;
  z-index: 400;
  background: ${apolloColors.light};
  cursor: pointer;

  .backButton{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(-1);
    width: 20px;
    height: 20px;
    background: url(${internalLinkIcon});
  }
`


//DATA
const imagesForLaunches = {

  default: [
    apolloDefault
  ],

  //Featured
  vogue: [
    vogueImg01,
  ],
  nike: [
    nikeImg01
  ],
  canPizza: [
    canPizzaImg01,
  ],
  sita: [
    sitaImg01
  ],
  //2020
  cambridge: [
    cambridgeImg01
  ], 
  muchoMuchacho: [
    muchoMuchachoImg01
  ],
  threeMarks: [
    threeMarksImg01
  ],
  xemei: [
    xemeiImg01
  ],
  laZebra: [
    laZebraImg01
  ],
  trick: [
    trickImg01
  ],
  nial: [
    nialImg01
  ],
  finallyPress: [
    finallyPressImg01
  ],

  //2019
  newIcons: [
    newIconsImg01
  ],
  laProa: [
    laProaImg01
  ],
  chipBaker: [
    chipBakerImg01
  ],
  uniko: [
    unikoImg01
  ],
  scrannysHouse: [
    scrannysHouseImg01
  ], 
  premisButaca: [
    premisButacaImg01
  ],
  theNewStorytellers: [
    theNewStorytellersImg01
  ],
  owlInstitute: [
    owlInstituteImg01
  ],
  bouCafes: [
    bouCafesImg01
  ],
  
}

//MAIN COMPONENT
const LaunchesSection = () => {


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
  
    //SET IMAGES FUNCTION
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
    //

  //

  //INNER PAGE CLICK HANDLER

    //Timelines
      const innerVogueTransition = gsap.timeline({paused: true})
      let vogueBackButton = useRef(null)
      const innerNikeTransition = gsap.timeline({paused: true})
      const innerCanPizzaTransition = gsap.timeline({paused: true})
      const innerSitaTransition = gsap.timeline({paused: true})
    //

    //Animations
      const innerPageTransitionAnim = { duration: 1.2, x: "100vw", ease: "power2.inOut"}
      useEffect( () => {
        innerVogueTransition.to("#vogueInner", innerPageTransitionAnim, "start")
                            .to(vogueBackButton, innerPageTransitionAnim, "start")
      }, [innerVogueTransition, innerPageTransitionAnim])
      useEffect( () => {
        innerNikeTransition.to("#nikeInner", innerPageTransitionAnim)
      }, [innerNikeTransition, innerPageTransitionAnim])
      useEffect( () => {
        innerCanPizzaTransition.to("#canPizzaInner", innerPageTransitionAnim)
      }, [innerCanPizzaTransition, innerPageTransitionAnim])
      useEffect( () => {
        innerSitaTransition.to("#sitaInner", innerPageTransitionAnim)
      }, [innerSitaTransition, innerPageTransitionAnim])

      let innerBackButtonHoverTl = gsap.timeline({paused: true})
      useEffect( () => {
          innerBackButtonHoverTl.to("#leftBackSection", { duration: 0.8, width: "18.75vw", ease: "power2.inOut"})
      })
    //

  //

  //HOVER EXTERNAL ICON & CHANGE PHOTOS HANDLER

    //Timelines
      const cambridgeHoverTl = gsap.timeline({paused: true})
      const muchoMuchachoHoverTl = gsap.timeline({paused: true})
      const threeMarksCoffeeHoverTl = gsap.timeline({paused: true})
      // const laZorraHoverTl = gsap.timeline({paused: true})
      const xemeiHoverTl = gsap.timeline({paused: true})
      const laZebraHoverTl = gsap.timeline({paused: true})
      const trickWtfHoverTl = gsap.timeline({paused: true})
      const nialHoverTl = gsap.timeline({paused: true})
      const finallyPressHoverTl = gsap.timeline({paused: true})
      const laProaHoverTl = gsap.timeline({paused: true})
      const chipBakerHoverTl = gsap.timeline({paused: true})
      const theNewStorytellersHoverTl = gsap.timeline({paused: true})
      const owlInstituteHoverTl = gsap.timeline({paused: true})
    //

    //Refs
      // let cambridgeTitleRef = useRef(null)
      let cambridgeRoleRef = useRef(null)
      let cambridgeIconRef = useRef(null)
      // let muchoMuchachoTitleRef = useRef(null)
      let muchoMuchachoRoleRef = useRef(null)
      let muchoMuchachoIconRef = useRef(null)
      let threeMarksCoffeeRoleRef = useRef(null)
      let threeMarksCoffeeIconRef = useRef(null)
      // let laZorraRoleRef = useRef(null)
      // let laZorraIconRef = useRef(null)
      let xemeiRoleRef = useRef(null)
      let xemeiIconRef = useRef(null)
      let laZebraRoleRef = useRef(null)
      let laZebraIconRef = useRef(null)
      let trickWtfRoleRef = useRef(null)
      let trickWtfIconRef = useRef(null)
      let nialRoleRef = useRef(null)
      let nialIconRef = useRef(null)
      let finallyPressRoleRef = useRef(null)
      let finallyPressIconRef = useRef(null)
      let laProaRoleRef = useRef(null)
      let laProaIconRef = useRef(null)
      let chipBakerRoleRef = useRef(null)
      let chipBakerIconRef = useRef(null)
      let theNewStorytellersRoleRef = useRef(null)
      let theNewStorytellersIconRef = useRef(null)
      let owlInstituteRoleRef = useRef(null)
      let owlInstituteIconRef = useRef(null)
    //

    //Anim
      const titleAnim = { duration: 0.6, x: 10, ease: "power2.inOut"}
      const roleAnim = { duration: 0.6, x: -30, ease: "power2.inOut"}
      const iconAnim = { duration: 0.6, alpha: 1, ease: "power2.inOut"}
      useEffect( () => {
        cambridgeHoverTl
                    // .to(cambridgeTitleRef, titleAnim)
                    .to(cambridgeRoleRef, roleAnim)
                    .to(cambridgeIconRef, iconAnim, "-=0.3")
      }, [cambridgeHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        muchoMuchachoHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(muchoMuchachoRoleRef, roleAnim)
                    .to(muchoMuchachoIconRef, iconAnim, "-=0.3")
      }, [muchoMuchachoHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        threeMarksCoffeeHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(threeMarksCoffeeRoleRef, roleAnim)
                    .to(threeMarksCoffeeIconRef, iconAnim, "-=0.3")
      }, [threeMarksCoffeeHoverTl, titleAnim, roleAnim, iconAnim])
      // useEffect( () => {
      //   laZorraHoverTl
      //               // .to(muchoMuchachoTitleRef, titleAnim)
      //               .to(laZorraRoleRef, roleAnim)
      //               .to(laZorraIconRef, iconAnim, "-=0.3")
      // }, [laZorraHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        xemeiHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(xemeiRoleRef, roleAnim)
                    .to(xemeiIconRef, iconAnim, "-=0.3")
      }, [xemeiHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        laZebraHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(laZebraRoleRef, roleAnim)
                    .to(laZebraIconRef, iconAnim, "-=0.3")
      }, [laZebraHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        trickWtfHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(trickWtfRoleRef, roleAnim)
                    .to(trickWtfIconRef, iconAnim, "-=0.3")
      }, [trickWtfHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        nialHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(nialRoleRef, roleAnim)
                    .to(nialIconRef, iconAnim, "-=0.3")
      }, [nialHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        finallyPressHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(finallyPressRoleRef, roleAnim)
                    .to(finallyPressIconRef, iconAnim, "-=0.3")
      }, [finallyPressHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        laProaHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(laProaRoleRef, roleAnim)
                    .to(laProaIconRef, iconAnim, "-=0.3")
      }, [laProaHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        chipBakerHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(chipBakerRoleRef, roleAnim)
                    .to(chipBakerIconRef, iconAnim, "-=0.3")
      }, [chipBakerHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        theNewStorytellersHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(theNewStorytellersRoleRef, roleAnim)
                    .to(theNewStorytellersIconRef, iconAnim, "-=0.3")
      }, [theNewStorytellersHoverTl, titleAnim, roleAnim, iconAnim])
      useEffect( () => {
        owlInstituteHoverTl
                    // .to(muchoMuchachoTitleRef, titleAnim)
                    .to(owlInstituteRoleRef, roleAnim)
                    .to(owlInstituteIconRef, iconAnim, "-=0.3")
      }, [owlInstituteHoverTl, titleAnim, roleAnim, iconAnim])
    //
      
    //Handlers
      const onEnterHandler = (tl, imgH) => {
        if(tl !== null){
          tl.play()
        }
        if(imgH !== null){
          setImage(imgH)
        }
      }
      const onLeaveHandler = (tl) => {
        if(tl !== null){
          tl.reverse()
        }
        defaultGif()
      }
    //
    
  //

  //LOCK BODY SCROLL
      const lockBodyScroll = () => {
        document.body.style.overflow = "hidden"
      }
      const unlockBodyScroll = () => {
        document.body.style.overflow = "visible"
      }
      
  //


  
  return (

    <>
    
    <InnerPage id="vogueInner">
        {/* "#D7D7D7" */}
          <div className="rightSection">
              <div className="topFoldInner">
                <img src={vogueImg01} className="bgImage" alt="vogue inner"/>
                <div className="titleTopFoldInner">VOGUE</div>
              </div>
              <div className="contentInner">
                <div className="imageContainerInner">
                  <img src={vogueImg01} alt=""/>
                </div>
                <div className="imageContainerInner">
                  <img src={vogueImg01} alt=""/>
                </div>
                <div className="imageContainerInner">
                  <img src={vogueImg01} alt=""/>
                </div>
              </div>
          </div>
    </InnerPage>
    <InnerPageBackButton className="leftSection" 
      id="leftBackSection"
      ref={el => {vogueBackButton = el}}
      onClick={() => {innerVogueTransition.reverse(); unlockBodyScroll()}} 
      onMouseEnter={() => innerBackButtonHoverTl.play()} 
      onMouseLeave={() => innerBackButtonHoverTl.reverse()}
    >
      <div className="backButton" />
    </InnerPageBackButton>

    {/* <InnerPage id="nikeInner">
        <div className="leftSection" id="leftBackSection" onClick={() => innerNikeTransition.reverse()} onMouseEnter={() => innerBackButtonHoverTl.play()} onMouseLeave={() => innerBackButtonHoverTl.reverse()}>
        <div className="backButton"></div>
        </div>
    </InnerPage>
    <InnerPage id="canPizzaInner" inputColor="#CE0E2D">
        <div className="leftSection" id="leftBackSection" onClick={() => innerCanPizzaTransition.reverse()} onMouseEnter={() => innerBackButtonHoverTl.play()} onMouseLeave={() => innerBackButtonHoverTl.reverse()}>
        <div className="backButton"></div>
        </div>
    </InnerPage>
    <InnerPage id="sitaInner">
        <div className="leftSection" id="leftBackSection" onClick={() => innerSitaTransition.reverse()} onMouseEnter={() => innerBackButtonHoverTl.play()} onMouseLeave={() => innerBackButtonHoverTl.reverse()}>
        <div className="backButton"></div>
        </div>
    </InnerPage> */}

    <GlobalSection 
        propSectionID="launches" 
        propSectionTitle="Launches" 
        propSectionDescription="Here are some non-confidential launches we have picked from our archives"
    >

        <ListContainerStyledComp className="listContainer">

            <GlobalList propListTitle="Special Missions" propExtraListClass="listFeatured" >

                <FeaturedTab propTitle="Vogue"
                    //Main Props
                    propRole="Creativity" 
                    propInternalIcon
                    // Event Handlers
                    propOnClick={() => {innerVogueTransition.play(); lockBodyScroll()}}
                    propOnMouseEnter={() => setImage(imagesForLaunches.vogue)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <FeaturedTab propTitle="Nike" 
                    //Main Props   
                    propRole="Creativity" 
                    propInternalIcon
                    // Event Handlers
                    propOnClick={() => innerNikeTransition.play()}
                    propOnMouseEnter={() => setImage(imagesForLaunches.nike)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <FeaturedTab propTitle="Can Pizza" 
                    //Main Props
                    propRole="All Services" 
                    propInternalIcon
                    // Event Handlers
                    propOnClick={() => innerCanPizzaTransition.play()}
                    propOnMouseEnter={() => setImage(imagesForLaunches.canPizza)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <FeaturedTab propTitle="Sita Abellán" 
                    //Main Props
                    propRole="Creativity / Development" 
                    propInternalIcon
                    // Event Handlers
                    propOnClick={() => innerSitaTransition.play()}
                    propOnMouseEnter={() => setImage(imagesForLaunches.sita)}
                    propOnMouseLeave={() => defaultGif()}
                />

            </GlobalList>
            
            <GlobalList propListTitle="2020" propExtraListClass="list2020" >
    
                <LaunchesTab propTitle="Cambridge"
                    propRole="Creativity / Development"
                    //Links and Refs
                    propHrefTab="https://www.cambridgewithyou.org/"
                    // propTitleRef={el => {canPizzaTitleRef = el}}
                    propRoleRef={el => {cambridgeRoleRef = el}}
                    propRoleIconRef={el => {cambridgeIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(cambridgeHoverTl, imagesForLaunches.cambridge) }
                    propOnMouseLeave={ () => onLeaveHandler(cambridgeHoverTl) }
                />
                <LaunchesTab propTitle="Mucho Muchacho"
                    //Main Props
                    propRole="Creativity / Development"
                    //Links and Refs
                    propHrefTab="https://muchomuchacho.com/"
                    // propTitleRef={el => {muchoMuchachoTitleRef = el}}
                    propRoleRef={el => {muchoMuchachoRoleRef = el}}
                    propRoleIconRef={el => {muchoMuchachoIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(muchoMuchachoHoverTl, imagesForLaunches.muchoMuchacho) }
                    propOnMouseLeave={ () => onLeaveHandler(muchoMuchachoHoverTl)}
                />
                <LaunchesTab propTitle="Three Marks Coffee"
                    //Main Props
                    propRole="Development"
                    //Links and Refs
                    propHrefTab="https://www.threemarkscoffee.com/"
                    propRoleRef={el => {threeMarksCoffeeRoleRef = el}}
                    propRoleIconRef={el => {threeMarksCoffeeIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(threeMarksCoffeeHoverTl, imagesForLaunches.threeMarks) }
                    propOnMouseLeave={ () => onLeaveHandler(threeMarksCoffeeHoverTl)}
                />
                {/* <LaunchesTab propTitle="La Zorra"
                    //Main Props
                    propRole="All Services"
                    //Links and Refs
                    propWithExternalLink
                    propHrefTab="http://restaurantelazorra.com/"
                    propRoleRef={el => {laZorraRoleRef = el}}
                    propRoleIconRef={el => {laZorraIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(laZorraHoverTl, null) }
                    propOnMouseLeave={ () => onLeaveHandler(laZorraHoverTl)}
                /> */}
                <LaunchesTab propTitle="Xemei"
                    //Main Props
                    propRole="All Services"
                    //Links and Refs
                    propWithExternalLink
                    propHrefTab="https://xemei.es/"
                    propRoleRef={el => {xemeiRoleRef = el}}
                    propRoleIconRef={el => {xemeiIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(xemeiHoverTl, imagesForLaunches.xemei) }
                    propOnMouseLeave={ () => onLeaveHandler(xemeiHoverTl)}
                />
                <LaunchesTab propTitle="La Zebra Slow Food"
                    //Main Props
                    propRole="All Services"
                    //Links and Refs
                    propHrefTab="https://www.lazebraslowfood.com/"
                    propRoleRef={el => {laZebraRoleRef = el}}
                    propRoleIconRef={el => {laZebraIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(laZebraHoverTl, imagesForLaunches.laZebra) }
                    propOnMouseLeave={ () => onLeaveHandler(laZebraHoverTl)}
                />
                <LaunchesTab propTitle="Trick.Wtf"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.trick.wtf/"
                    propRoleRef={el => {trickWtfRoleRef = el}}
                    propRoleIconRef={el => {trickWtfIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(trickWtfHoverTl, imagesForLaunches.trick) }
                    propOnMouseLeave={ () => onLeaveHandler(trickWtfHoverTl)}
                />
                <LaunchesTab propTitle="Nial"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="http://www.nial-artlaw.com/"
                    propRoleRef={el => {nialRoleRef = el}}
                    propRoleIconRef={el => {nialIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(nialHoverTl, imagesForLaunches.nial) }
                    propOnMouseLeave={ () => onLeaveHandler(nialHoverTl)}
                />
                <LaunchesTab propTitle="Finally Press"
                    //Main Props
                    propRole="Creativity / Development"
                    //Links and Refs
                    propHrefTab="http://finallypress.com/"
                    propRoleRef={el => {finallyPressRoleRef = el}}
                    propRoleIconRef={el => {finallyPressIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(finallyPressHoverTl, imagesForLaunches.finallyPress) }
                    propOnMouseLeave={ () => onLeaveHandler(finallyPressHoverTl)}
                />

            </GlobalList>

            <GlobalList propListTitle="2019" propExtraListClass="list2019" >
                
                <LaunchesTab propTitle="New Icons"
                    //Main Props
                    propRole="Branding"
                    //Links and Refs
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(null, imagesForLaunches.newIcons) }
                    propOnMouseLeave={ () => onLeaveHandler(null)}
                />
                <LaunchesTab propTitle="La Proa 04"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.laproa04.com/"
                    propRoleRef={el => {laProaRoleRef = el}}
                    propRoleIconRef={el => {laProaIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(laProaHoverTl, imagesForLaunches.laProa) }
                    propOnMouseLeave={ () => onLeaveHandler(laProaHoverTl)}
                />
                <LaunchesTab propTitle="Chip Baker Films"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.chipbakerfilms.com/"
                    propRoleRef={el => {chipBakerRoleRef = el}}
                    propRoleIconRef={el => {chipBakerIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(chipBakerHoverTl, imagesForLaunches.chipBaker) }
                    propOnMouseLeave={ () => onLeaveHandler(chipBakerHoverTl)}
                />
                <LaunchesTab propTitle='Uniko. "Model Agency"'
                    //Main Props
                    propRole="Branding"
                    //Links and Refs
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(null, imagesForLaunches.uniko) }
                    propOnMouseLeave={ () => onLeaveHandler(null)}
                />
                <LaunchesTab propTitle="Scranny's House"
                    //Main Props
                    propRole="Branding"
                    //Links and Refs
                    //Event Handlers
                    propOnMouseEnter={() => onEnterHandler(null, imagesForLaunches.scrannysHouse) }
                    propOnMouseLeave={() => onLeaveHandler(null) }
                />
                <LaunchesTab propTitle="The New Storytellers"
                    //Main Props
                    propRole="Development"
                    //Links and Refs
                    propHrefTab="https://www.thenewstorytellers.es/" 
                    propRoleRef={el => {theNewStorytellersRoleRef = el}}
                    propRoleIconRef={el => {theNewStorytellersIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(theNewStorytellersHoverTl, imagesForLaunches.theNewStorytellers) }
                    propOnMouseLeave={ () => onLeaveHandler(theNewStorytellersHoverTl)}
                />
                <LaunchesTab propTitle="Premis Butaca"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(null, imagesForLaunches.premisButaca) }
                    propOnMouseLeave={ () => onLeaveHandler(null)}
                />
                <LaunchesTab propTitle="Owl Institute"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://owlpsicologia.com/" 
                    propRoleRef={el => {owlInstituteRoleRef = el}}
                    propRoleIconRef={el => {owlInstituteIconRef = el}}
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(owlInstituteHoverTl, imagesForLaunches.owlInstitute) }
                    propOnMouseLeave={ () => onLeaveHandler(owlInstituteHoverTl)}
                />
                <LaunchesTab propTitle="Cafes Bou"
                    //Main Props
                    propRole="Creativity"
                    //Links and Refs
                    //Event Handlers
                    propOnMouseEnter={ () => onEnterHandler(null, imagesForLaunches.bouCafes) }
                    propOnMouseLeave={ () => onLeaveHandler(null)}
                />

            </GlobalList>

            <div className="photoContainer" ref={el => photoBoxRef = el}>
                <div className="photoBox"></div>
            </div>

        </ListContainerStyledComp>

    </GlobalSection>
    </>
  )
}
export default LaunchesSection
