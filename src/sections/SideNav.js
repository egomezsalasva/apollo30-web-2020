//IMPORTS
//-Modules
import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'
//-Images
import arrowImg from '../assets/images/apoolloArrow.svg'
import asterixImg from '../assets/images/apolloAsterix.svg'
import spaceTextureNav from '../assets/images/spaceTextureNav.png'


//STYLES
//-Vars
const leftSideWidth = "25vw" /* 360px */
const topFoldStripHeight = "150px"

//-Components
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${leftSideWidth};
  height: 100vh;
  @media (max-width: 1100px) {
    display: none
  }

  .sidenavTop{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - ${topFoldStripHeight});
    background: ${apolloColors.light};

    .fullMenuContainer{
      position: absolute;
      top: 50%;
      left: 8.33333333vw; /* 120px */
      transform: translateY(-50%);

      .menuHeading{
        ${apolloFonts.textSpecial};
      }
      .menuOptions{
        margin-top: 20px;
        list-style: none;
        ${apolloFonts.subheading02};

        li{
          margin: 10px 0;

          a{
            text-decoration: none;
            color: ${apolloColors.dark};
          }
          &:hover::before{
            display: inline-block;
            content: '';
            background: url(${arrowImg});
            background-repeat: no-repeat;
            width: 12px;
            height: 8px;
            margin-right: 10px;
            transform: translate(-1px, -2px);
          }
        }

        .active::before{
          display: inline-block;
          content: '';
          background: url(${asterixImg});
          width: 10px;
          height: 10px;
          margin-right: 10px;
          transform: translateY(-1px);
        }
      }
    }
  }
  .sidenavBottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${topFoldStripHeight};
    background: url(${spaceTextureNav});
    /* background: url(${apolloColors.light}); */
    background-size: cover;
    background-position: center;

    .sidenavBottomTextContainer{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 12px;
      overflow: hidden;

      .sidenavBottomText{

        .sidenavBottomTextInner{
          text-align: center;
          color: ${apolloColors.light};
          /* color: ${apolloColors.dark}; */
          ${apolloFonts.textSmall}
        }
        .sidenavBottomTextInnerDial{
          text-align: center;
          /* color: ${apolloColors.light}; */
          color: ${apolloColors.dark};
          ${apolloFonts.textSpecial}
        }
      }
    }
  }
`


//MAIN COMPONENT
function SideNav() {

  //SCROLL FOLLOW
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }
    let sidenavBottomTextRef = useRef(null)
    // useEffect(() => {
    //   const scrollButtonTl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#base",
    //       start: "bottom-=140px bottom",
    //       end: "bottom bottom",
    //       scrub: true,
    //       markers: true
    //     }
    //   })
    //   scrollButtonTl.to(sidenavBottomTextRef, {duration: 100, y: "-12px", ease: "power4.inOut"})
      
    // }, [])
    useEffect(() => {
      const scrollButtonTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#base",
          start: "bottom-=20px bottom",
          end: "bottom bottom",
          // markers: true
        }
      })
      scrollButtonTl.to(sidenavBottomTextRef, {duration: 1.2, y: -12, ease: "power4.inOut"})
    }, [])
  //

  return (
    <>
      <Wrapper>
        <div className="sidenavTop">
          <div className="fullMenuContainer">
            <div className="menuHeading">Menu</div>
            <ul className="menuOptions">
              <li id="launchesNavRef">
                <a href="#launches">Launches</a>
              </li>
              <li id="servicesNavRef">
                <a href="#services">Services</a>
              </li>
              <li id="crewNavRef">
                <a href="#crew">Crew</a>
              </li>
              <li id="baseNavRef">
                <a href="#base">Base</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidenavBottom">
          <div className="sidenavBottomTextContainer">
            <div className="sidenavBottomText" ref={el => {sidenavBottomTextRef = el}}>
              <div className="sidenavBottomTextInner">Scroll Down</div>
              <div className="sidenavBottomTextInnerDial">Dial: 93 653 93 43</div>
            </div>
          </div>  
        </div>
        
      </Wrapper>
    </>
  )
}
export default SideNav
