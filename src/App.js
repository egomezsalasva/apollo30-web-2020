//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import gsap from 'gsap'
//-Styles
import {apolloColors, apolloFonts} from './data/apollo30styles'
//-Components
import SideNav from './components/SideNav'
import TopFold from './sections/TopFold'
import LaunchesSection from './sections/LaunchesSection'
import ServicesSection from './sections/ServicesSection'


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
    overflow-x: hidden;
  }
  button{
    border: none;
    outline: none;
  }
`
const ContentContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100vw - ${leftSideWidth});
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

        .tab{

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
        
    }
  } 
`


//MAIN COMPONENT
const App = () => {


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


  return (
    <>
      <GlobalStyle/>


      <SideNav/>

      <ContentContainer>

        <TopFold />

        <FirstSectionSpace/>
        <LaunchesSection />
        <ServicesSection />

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
