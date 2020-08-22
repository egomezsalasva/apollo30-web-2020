//IMPORTS
//-Modules
import React, {useRef, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Styles
import {apolloColors, apolloFonts} from './data/apollo30styles'
//-Images
// import logoImg from './assets/images/apollo30Logo.png'
import apolloPortfolio from './assets/images/apolloPortfolio.gif'
import bigLogo from './assets/images/apollo30BigLogo.svg'
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

  .logo{
    position: absolute;
    right: 60px;
    top: 60px;
    height: 60px;
    z-index: 100;
  }
  .heroTop{
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 150px);
    background: ${apolloColors.dark};

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
    background: ${apolloColors.dark};
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

      p{
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
  padding: 70px 130px 130px;
  background: ${apolloColors.light};

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

  .apolloList{
    margin-top: 50px;
    width: 500px;

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
      padding: 20px 10px;
      cursor: pointer;

      .tabTitle{
        display: inline-block;
        color: ${apolloColors.dark};
        ${apolloFonts.subheading01};
      }
      .tabTitleServices{
        display: inline-block;
        color: ${apolloColors.dark};
        ${apolloFonts.subheading03};
      }
      .tabRole{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        ${apolloFonts.textSmall};
        opacity: 0.33;
      }
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
`
const PhotoContainer = styled.div`
  position: absolute;
  top: calc( 100vh + 130px + 90px + 144px);
  right: 0;
  width: calc(100vw - 990px);
  min-width: calc(300px + 40px);
  height: 300px;

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
`
const BackgroundLogo = styled.div`
  height: 100%;
  width: 100%;
  background: url(https://media.giphy.com/media/l0K4lUxBzIOeJd1EA/giphy.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75%;
  mask: url(${bigLogo});
  mask-repeat: no-repeat;
  mask-size: 75%;
  mask-position: center;
  opacity: 0;
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
function App() {

  //GLOBAL ANIM EFFECTS
    let effectText01 = useRef({
      duration: 1.6,
      y: 66,
      opacity: 0,
      rotate: 2,
      stagger: 0.2,
      ease: "power4.inOut",
    })
  //

  //INTRO TOP FOLD ANIMATION
    const introTl = gsap.timeline()
    useEffect( () => {
      introTl
      //Division 4 Anim
      .to(".firstAnimBox01", { scaleX: 0, transformOrigin:"right", duration: 1.2}, "start")
      .to(".firstAnimBox02", { scaleX: 0, transformOrigin:"right", duration: 1.2}, "start")
      .to(".firstAnimBox03", { scaleX: 0, transformOrigin:"right", duration: 1.2}, "start")
      .to(".firstAnimBox04", { scaleX: 0, transformOrigin:"right", duration: 1.2}, "start")
      .to(".firstAnimContainer", {duration: 0, display: "none"})
      //We are Apollo30 Anim
      .from(".welcomeHeadingInner", effectText01.current)
      //Scroll Me Anim
      .to(".sidenavBottomText", {duration: 1.2, y: -12,ease: "power2.inOut"}, "+=1.2")
      .delay(1.2)
    }, [introTl])
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
        checkSection( "#tripulation", "#tripulationNavRef")
        checkSection( "#base", "#baseNavRef")
      })
    }, [])
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
            <BackgroundLogo />
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
              <div className="ctaText">Call Houston</div>
            </button>
            <div className="descriptionBox">
                <p>
                  <div>We are a creative studio based in Barcelona.</div>
                  <div>We develop creative communication strategies.</div>
                </p>
            </div>
          </div>

        </TopFold>

        <FirstSectionSpace/>

        <Section id="launches">
          <h2 className="sectionTitle">Launches</h2>
          <p className="sectionDescription">Here are some non-confidential launches we have picked from our archives</p>

          <div className="apolloList list2020">
            <h5 className="listTitle">2020</h5>

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
              <h3 className="tabTitle">Cambridge Press</h3>
              <div className="tabRole">Creativity / Development</div>
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
                <div className="tabRole">Creativity / Branding / Development</div>
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
        </Section>
        <PhotoContainer ref={el => photoBoxRef = el}>
          <div className="photoBox"></div>
        </PhotoContainer>

        <Section id="services">

          <h2 className="sectionTitle">Services</h2>
          <p className="sectionDescription">We believe that in our current era, there’s a saturation of stimuli. This requires differentiation through tailored content.</p>

          <div className="apolloList">
            <div className="divisionLine topLine"></div>
            <div className="tab">
              <h3 className="tabTitleServices">Creativity</h3>
              <div className="tabRole">Read More</div>
            </div>
            <div className="tab">
              <h3 className="tabTitleServices">Brand Innovation</h3>
              <div className="tabRole">Read More</div>  
            </div>
            <div className="tab">
              <h3 className="tabTitleServices">Media Activation</h3>
              <div className="tabRole">Read More</div>
            </div>
            <div className="tab">
              <h3 className="tabTitleServices">Development</h3>
              <div className="tabRole">Read More</div>
            </div>
          </div>

        </Section>

        <Section id="tripulation">

          <h2 className="sectionTitle">Tripulation</h2>

          <div className="apolloList">
            <h5 className="listTitle">Operations</h5>

            <div className="divisionLine topLine"></div>
            <div className="tab">
              <h3 className="tabTitle">Anto</h3>
              <div className="tabRole">Creative Director</div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Sandra</h3>
              <div className="tabRole">General Manager</div>  
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

        </Section>

        <Section id="base">

          <h2 className="sectionTitle">Base</h2>

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

        </Section>

      </ContentContainer>
    </>
  )
}
export default App
