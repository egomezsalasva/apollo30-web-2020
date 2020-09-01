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
import externalLinkIcon from '../assets/images/externalLink.svg'
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
import TabList from '../components/TabList'

//STYLES
//-Components
const ListContainer = styled.section`
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
            .hideIconOuter{
            
            }
            .tabRole{
            position: absolute;
            top: 25px;
            right: 10px;
            ${apolloFonts.textSmall};
            opacity: 0.33;
            color: ${apolloColors.dark};
            }
            .tabRoleInternalIcon{
            position: absolute;
            top: 25px;
            right: calc(10px + 15px + 20px);
            }
            .iconContainer{
            position: absolute;
            top: 20px;
            right: 10px;
            width: 20px;
            height: 20px;
            .internalLinkIcon{
                position: absolute;
                top: 1px;
                left: 1px;
                width: 20px;
                height: 20px;
                background: url(${internalLinkIcon});
            }
            .externalLinkIcon{
                position: absolute;
                top: 0;
                left: -1px;
                width: 20px;
                height: 20px;
                background: url(${externalLinkIcon});
                opacity: 0;
            }
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
            right: calc(20px + 15px + 10px);
            ${apolloFonts.textSmall};
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
            }
            .tabServiceText{
            display: none;
            width: 360px;
            position: absolute;
            top: 20px;
            right: calc(20px + 15px + 10px);
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
    <Section 
        sectionIdProp="launches" 
        sectionTitleProp="Launches" 
        sectionDescriptionProp="Here are some non-confidential launches we have picked from our archives"
    >

        <ListContainer className="listContainer">

            <div className="apolloList listFeatured">
                <h5 className="listTitle">Featured</h5>

                <div className="divisionLine topLine"></div>

                <TabList 
                    propPointer
                    propTitle = "Vogue"
                    propRole = "Creativity"
                    propInternalIcon
                    // Event Handlers
                />

                <TabList 
                    propPointer
                    propTitle = "Nike"
                    propRole = "Creativity"
                    propInternalIcon
                    // Event Handlers
                    propOnMouseEnter={() => setImage(imagesForLaunches.nike)}
                    propOnMouseLeave={() => defaultGif()}
                />

                <TabList 
                    propPointer
                    propTitle = "Cambridge Press"
                    propRole = "Creativity / Development"
                    propInternalIcon
                    // Event Handlers
                />

            </div>
            
            <div className="apolloList list2020">
                <h5 className="listTitle">2020</h5>

                <div className="divisionLine topLine"></div>
                <a href="https://www.canpizza.eu/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => externalIconHoverTl.play()} onMouseLeave={() => externalIconHoverTl.reverse()}>
                    <h3 className="tabTitle">Can Pizza</h3>
                    <div className="tabRole tabRoleIcon" ref={el => roleCanPizzaRef = el} >All Services</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" ref={el => roleIconCanPizzaRef = el}/>
                    </div>
                    </div>
                </a>

                <a href="https://muchomuchacho.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.muchoMuchacho)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Mucho Muchacho</h3>
                    <div className="tabRole tabRoleIcon">Creativity / Development</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" />
                    </div> 
                    </div>
                </a>

                <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.sita)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Sita Abellán</h3>
                    <div className="tabRole">Creativity / Branding</div>
                </div>

                <a href="https://www.threemarkscoffee.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.threeMarks)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Three Marks Coffee</h3>
                    {/* E-commerce Development */}
                    <div className="tabRole tabRoleIcon">Development</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" />
                    </div> 
                    </div>
                </a>

                <div className="tab pointerTab">
                    <h3 className="tabTitle">Xemei</h3>
                    <div className="tabRole">All Services</div>
                </div>

                <a href="https://www.lazebraslowfood.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab">
                    <h3 className="tabTitle">La Zebra Slow Food</h3>
                    <div className="tabRole tabRoleIcon">All Services</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" />
                    </div> 
                    </div>
                </a>

                <div className="tab pointerTab">
                    <h3 className="tabTitle">La Zorra </h3>
                    <div className="tabRole">All Services</div>
                </div>

                <a href="https://www.trick.wtf/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Trick.Wtf</h3>
                    <div className="tabRole tabRoleIcon">Branding / Development</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" />
                    </div>
                    </div>
                </a>

                <a href="https://nial.es/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Nial</h3>
                    <div className="tabRole tabRoleIcon">Branding / Development</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" />
                    </div>
                    </div>
                </a>

                <a href="http://finallypress.com/" target="_blank" rel="noopener noreferrer">
                    <div className="tab pointerTab" onMouseEnter={() => setImage(imagesForLaunches.trick)} onMouseLeave={() => defaultGif()}>
                    <h3 className="tabTitle">Finally Press</h3>
                    <div className="tabRole tabRoleIcon">Creativity / Development</div>
                    <div className="iconContainer">
                        <div className="externalLinkIcon" />
                    </div>
                    </div>
                </a>

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

        </ListContainer>

    </Section>
  )
}
export default LaunchesSection
