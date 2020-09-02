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
import Section from '../components/Section'
import FeaturedTab from '../components/launchesSection/FeaturedTab'
import LaunchesTab from '../components/launchesSection/LaunchesTab'

//STYLES
//-Components
const ListContainerStyledComp = styled.section`
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
            height: 1px;
            background: ${apolloColors.dark};
        }
        .topLine{
            margin-top: 20px;
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

    <Section 
        propSectionID="launches" 
        propSectionTitle="Launches" 
        propSectionDescription="Here are some non-confidential launches we have picked from our archives"
    >

        <ListContainerStyledComp className="listContainer">

            <div className="apolloList listFeatured">
                <h5 className="listTitle">Featured</h5>

                <div className="divisionLine topLine"></div>

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

            </div>
            
            <div className="apolloList list2020">
                <h5 className="listTitle">2020</h5>

                <div className="divisionLine topLine"></div>

                <LaunchesTab propTitle="Can Pizza"
                    //Main Props
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
                
            </div>

            <div className="apolloList list2019">
                <h5 className="listTitle">2019</h5>

                <div className="divisionLine topLine"></div>

                <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.newIcons)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">New Icons</h3>
                    <div className="tabRole">Branding</div>
                </div>

                <a href="https://www.laproa04.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.laProa)} onMouseLeave={() => defaultGif()}>
                        <h3 className="tabTitle">La Proa 04</h3>
                        <div className="tabRole tabRoleIcon">Branding / Development</div>
                        <div className="iconContainer">
                        <div className="externalLinkIcon" />
                        </div>
                    </div>
                </a>

                <a href="https://www.chipbakerfilms.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.chipBaker)} onMouseLeave={() => defaultGif()}>
                        <h3 className="tabTitle">Chip Baker Films</h3>
                        <div className="tabRole tabRoleIcon">Branding / Development</div>
                        <div className="iconContainer">
                        <div className="externalLinkIcon" />
                        </div>
                    </div>
                </a>

                <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.uniko)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Uniko. "Model Agency"</h3>
                    <div className="tabRole">Branding</div>
                </div>

                <div className="tab pointerTab">
                    <h3 className="tabTitle">Scranny's House</h3>
                    <div className="tabRole">Branding</div>
                </div>

                <a href="https://www.thenewstorytellers.es/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab">
                        <h3 className="tabTitle">The New Storytellers</h3>
                        <div className="tabRole tabRoleIcon">Development</div>
                        <div className="iconContainer">
                        <div className="externalLinkIcon" />
                        </div>
                    </div>
                </a>

                <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.premisButaca)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Premis Butaca</h3>
                    <div className="tabRole">Branding / Development</div>
                </div>

                <a href="https://owlpsicologia.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab">
                        <h3 className="tabTitle">Owl Institute</h3>
                        <div className="tabRole tabRoleIcon">Branding / Development</div>
                        <div className="iconContainer">
                        <div className="externalLinkIcon" />
                        </div>
                    </div>
                </a>

                <div className="tab pointerTab">
                    <h3 className="tabTitle">Cafes Bou</h3>
                    {/* Packaging Design */}
                    <div className="tabRole">Creativity</div>
                </div>

            </div>

            <div className="photoContainer" ref={el => photoBoxRef = el}>
                <div className="photoBox"></div>
            </div>

        </ListContainerStyledComp>

    </Section>
    </>
  )
}
export default LaunchesSection
