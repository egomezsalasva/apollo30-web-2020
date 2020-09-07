//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'
//-Images
import apolloPortfolio from '../assets/images/apolloPortfolio.gif'
import internalLinkIcon from '../assets/images/internalLink.svg'
import nikeImg01 from '../assets/images/nike/nike01.jpg'
import nikeImg02 from '../assets/images/nike/nike02.jpg'
import nikeImg03 from '../assets/images/nike/nike03.jpg'
import nikeImg04 from '../assets/images/nike/nike04.jpg'
import unikoImg01 from '../assets/images/uniko/uniko01.jpg'
import trickImg01 from '../assets/images/trick/trick01.gif'
import threeMarksImg01 from '../assets/images/threeMarks/threeMarksImg01.gif'
import premisButacaImg01 from '../assets/images/premisButaca/premisButaca01.gif'
import muchoMuchachoImg01 from '../assets/images/muchoMuchacho/muchoMuchacho01.gif'
import sitaImg01 from '../assets/images/sitaAbellan/sitaAbellan01.jpg'
import newIconsImg01 from '../assets/images/newIcons/newIcons01.gif'
import laProaImg01 from '../assets/images/laProa/laProa01.jpg'
import chipBakerImg01 from '../assets/images/chipBaker/chipBaker01.gif'
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

`
const InnerPage = styled.div`
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    background: ${apolloColors.dark};
    z-index: 300;
    overflow: scroll;

    .leftSection{
      position: absolute;
      width: 12.5%;
      height: 100%;
      left: 0; 
      right: 0;
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
    }
`


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

  //EXTERNAL ICON HOVER ANIM
    let externalIconHoverTl = gsap.timeline({paused: true})
    let roleCanPizzaRef = useRef()
    let roleIconCanPizzaRef = useRef()
    useEffect( () => {
      externalIconHoverTl.to(roleCanPizzaRef, { duration: 0.8, x: -35, ease: "power2.inOut"})
      externalIconHoverTl.to(roleIconCanPizzaRef, { duration: 0.8, alpha: 1, ease: "power2.inOut"}, "-=0.4")
    }, [externalIconHoverTl])  
  //

  //INNER PAGE CLICK HANDLER
    let innerNikeTransition = gsap.timeline({paused: true})
    useEffect( () => {
      innerNikeTransition.to("#nikeInner", { duration: 1.2, x: "100vw", ease: "power2.inOut"})
    }, [innerNikeTransition])

    let innerBackButtonHoverTl = gsap.timeline({paused: true})
    useEffect( () => {
        innerBackButtonHoverTl.to("#leftBackSection", { duration: 0.8, width: "18.75%", ease: "power2.inOut"})
    })
  //

  
  return (

    <>
    <InnerPage id="nikeInner">
        <div className="leftSection" id="leftBackSection" onClick={() => innerNikeTransition.reverse()} onMouseEnter={() => innerBackButtonHoverTl.play()} onMouseLeave={() => innerBackButtonHoverTl.reverse()}>
        <div className="backButton"></div>
        </div>
    </InnerPage>

    <GlobalSection 
        propSectionID="launches" 
        propSectionTitle="Launches" 
        propSectionDescription="Here are some non-confidential launches we have picked from our archives"
    >

        <ListContainerStyledComp className="listContainer">


            <GlobalList propListTitle="Featured" propExtraListClass="listFeatured" >

                <FeaturedTab propTitle="Vogue"
                    //Main Props
                    propRole="Creativity" 
                    propInternalIcon
                    // Event Handlers
                    propOnClick={() => innerNikeTransition.play()}
                />
                <FeaturedTab propTitle="Nike" 
                    //Main Props   
                    propRole="Creativity" 
                    propInternalIcon
                    // Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.nike)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <FeaturedTab propTitle="Cambridge Press" 
                    //Main Props
                    propRole="Creativity / Development" 
                    propInternalIcon
                    // Event Handlers
                />

            </GlobalList>
            

            <GlobalList propListTitle="2020" propExtraListClass="list2020" >
    
                <LaunchesTab propTitle="Can Pizza"
                    propRole="All Services"
                    //Links and Refs
                    propHrefTab="https://www.canpizza.eu/"
                    propRoleRef={el => roleCanPizzaRef = el}
                    propRoleIconRef={el => roleIconCanPizzaRef = el}
                    //Event Handlers
                    propOnMouseEnter={() => externalIconHoverTl.play()}
                    propOnMouseLeave={() => externalIconHoverTl.reverse()}
                />
                <LaunchesTab propTitle="Mucho Muchacho"
                    //Main Props
                    propRole="Creativity / Development"
                    //Links and Refs
                    propHrefTab="https://muchomuchacho.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.muchoMuchacho)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Sita Abellán"
                    //Main Props
                    propRole="Creativity / Development"
                    //Links and Refs
                    propHrefTab={null}
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.sita)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Three Marks Coffee"
                    //Main Props
                    propRole="Development"
                    //Links and Refs
                    propHrefTab="https://www.threemarkscoffee.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.threeMarks)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Xemei"
                    //Main Props
                    propRole="All Services"
                    //Links and Refs
                    propHrefTab="https://xemei.es/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />
                <LaunchesTab propTitle="La Zebra Slow Food"
                    //Main Props
                    propRole="All Services"
                    //Links and Refs
                    propHrefTab="https://www.lazebraslowfood.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />
                <LaunchesTab propTitle="Trick.Wtf"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.trick.wtf/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.trick)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Nial"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.trick.wtf/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />
                <LaunchesTab propTitle="Finally Press"
                    //Main Props
                    propRole="Creativity / Development"
                    //Links and Refs
                    propHrefTab="http://finallypress.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />

            </GlobalList>


            <GlobalList propListTitle="2019" propExtraListClass="list2019" >
                
                <LaunchesTab propTitle="New Icons"
                    //Main Props
                    propRole="Branding"
                    //Links and Refs
                    propHrefTab={null}
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.newIcons)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="La Proa 04"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.laproa04.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.laProa)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Chip Baker Films"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.chipbakerfilms.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.chipBaker)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle='Uniko. "Model Agency"'
                    //Main Props
                    propRole="Branding"
                    //Links and Refs
                    propHrefTab="https://www.chipbakerfilms.com/"
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.uniko)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Scranny's House"
                    //Main Props
                    propRole="Branding"
                    //Links and Refs
                    propHrefTab={null}
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />
                <LaunchesTab propTitle="The New Storytellers"
                    //Main Props
                    propRole="Development"
                    //Links and Refs
                    propHrefTab="https://www.thenewstorytellers.es/" 
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />
                <LaunchesTab propTitle="Premis Butaca"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://www.thenewstorytellers.es/" 
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.premisButaca)}
                    propOnMouseLeave={() => defaultGif()}
                />
                <LaunchesTab propTitle="Owl Institute"
                    //Main Props
                    propRole="Branding / Development"
                    //Links and Refs
                    propHrefTab="https://owlpsicologia.com/" 
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
                />
                <LaunchesTab propTitle="Cafes Bou"
                    //Main Props
                    propRole="Creativity"
                    //Links and Refs
                    propHrefTab={null} 
                    propRoleRef={null}
                    propRoleIconRef={null}
                    //Event Handlers
                    propOnMouseEnter={null}
                    propOnMouseLeave={null}
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
