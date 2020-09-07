//IMPORTS
//-Modules
import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
//-Styles
import {apolloColors} from './data/apollo30styles'
//-Components
import SideNav from './components/SideNav'
import TopFold from './sections/TopFold'
import LaunchesSection from './sections/LaunchesSection'
import ServicesSection from './sections/ServicesSection'
import CrewSection from './sections/CrewSection'
import BaseSection from './sections/BaseSection'


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

  return (
    <>
      <GlobalStyle/>

      <SideNav/>

      <ContentContainer>

        <TopFold />

        <FirstSectionSpace/>
        <LaunchesSection />
        <ServicesSection />
        <CrewSection />
        <BaseSection />

      </ContentContainer>
    </>
  )
}
export default App
