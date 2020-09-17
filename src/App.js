//IMPORTS
//-Modules
import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
//-Styles
import {apolloColors} from './data/apollo30styles'
//-Fonts
import GraphikRegEOT from './assets/fonts/Graphik-Regular.eot'
import GraphikRegWOFF from './assets/fonts/Graphik-Regular.woff'
import GraphikRegWOFF2 from './assets/fonts/Graphik-Regular.woff2'
import GraphikRegTTF from './assets/fonts/Graphik-Regular.ttf'
import GraphikRegSVG from './assets/fonts/Graphik-Regular.svg'
import GraphikBlkEOT from './assets/fonts/Graphik-Black.eot'
import GraphikBlkWOFF from './assets/fonts/Graphik-Black.woff'
import GraphikBlkWOFF2 from './assets/fonts/Graphik-Black.woff2'
import GraphikBlkTTF from './assets/fonts/Graphik-Black.ttf'
import GraphikBlkSVG from './assets/fonts/Graphik-Black.svg'
import VCROSDMonoEOT from './assets/fonts/VCROSDMono.eot'
import VCROSDMonoWOFF from './assets/fonts/VCROSDMono.woff'
import VCROSDMonoWOFF2 from './assets/fonts/VCROSDMono.woff2'
import VCROSDMonoTTF from './assets/fonts/VCROSDMono.ttf'
import VCROSDMonoSVG from './assets/fonts/VCROSDMono.svg'
//-Components
import SideNav from './sections/SideNav'
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
    src: url(${GraphikRegEOT});
    src: url('${GraphikRegEOT}?#iefi') format('embedded-opentype'),
         url(${GraphikRegWOFF}) format('woff'),
         url(${GraphikRegWOFF2}) format('woff2'),
         url(${GraphikRegTTF}) format('truetype'),
         url('${GraphikRegSVG}#Graphik-Regular') format('svg');
    /* font-display: swap; */
  }
  @font-face {
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    src: url(${GraphikBlkEOT});
    src: url('${GraphikBlkEOT}?#iefix') format('embedded-opentype'),
         url(${GraphikBlkWOFF}) format('woff'),
         url(${GraphikBlkWOFF2}) format('woff2'),  
         url(${GraphikBlkTTF}) format('truetype'),
         url('${GraphikBlkSVG}#Graphik-Black') format('svg');
    /* font-display: swap; */
  }
  @font-face {
    font-family: 'VCR OSD Mono';
    font-style: normal;
    font-weight: normal;
    src: url(${VCROSDMonoEOT});
    src: url('${VCROSDMonoEOT}?#iefix') format('embedded-opentype'),
         url(${VCROSDMonoWOFF}) format('woff'),
         url(${VCROSDMonoWOFF2}) format('woff2'),
         url(${VCROSDMonoTTF}) format('truetype'),
         url('${VCROSDMonoSVG}#VCROSDMono') format('svg');
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
