//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Styles
import {apolloColors, apolloFonts} from '../../../data/apollo30styles'
//-Images
import spaceTextureHero from '../../../assets/images/spaceTextureHero.png'



//STYLES
//-Components
const HeroTopFoldContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${spaceTextureHero});
  background-size: cover;
  background-position: center;

  .heroTop{
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 150px);

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

    .circleTextLogo{
      position: absolute;
      top: 0;
      left: 138px;
      color: ${apolloColors.light};
      font-family: ${apolloFonts.textSpecial};
      font-family: 'VCR OSD Mono';
      font-size: 12px;
      text-align: center;
      letter-spacing: 0;
    }

    .circleTextLogoScrollWrapper{
      display: inline-block;
      position: absolute;
      top: calc(50% - 138px);
      left: calc(50% - 138px);
      width: calc(138px * 2);
      height: calc(138px * 2);
    }

    .circleTextLogoWrapper{
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(138px * 2);
      height: calc(138px * 2);
    }

  }

  .heroBottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    display: flex;
    .ctaButton{
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


//MAIN COMPONENT
const HeroTopFold = () => {

    //CIRCLE TOP FOLD
        //Make Circle
            useEffect( () => {
                const circularText = (txt, radius, classIndex) => {
                    txt = txt.split("")
                    classIndex = document.getElementsByClassName("circleTextLogo")[classIndex];

                    let deg = 360 / txt.length
                    let origin = -25;

                    txt.forEach((ea) => {
                        ea = `<p style=' height:${radius}px; position:absolute; transform:rotate(${origin}deg); transform-origin:0 100%'>${ea}</p>`;
                        classIndex.innerHTML += ea;
                        origin += deg;
                    })
                }
                circularText("HI HUMANS, WE ARE APOLLO30 · WE ARE CELEBRATING OUR FIRST REVOLUTION MOVEMENT AROUND THE SUN · ", 138, 0)
            })
        //
        //Rotate Circle Animation
            useEffect( () => {
                let dur = 56
                const rotateTextTl = gsap.timeline({})
                rotateTextTl.to(".circleTextLogoWrapper", { duration: dur, rotation:"360_ccw" , transformOrigin:"138px 138px",  repeat: -1, ease: "linear" })  
            })
            useEffect( () => {  
              document.body.addEventListener('wheel', (e) => {
                const rotateScrollWrapperTl = gsap.timeline({})
                rotateScrollWrapperTl.to(".circleTextLogoScrollWrapper", { duration: 0.4, rotation: -(window.pageYOffset * 0.125) , transformOrigin:"138px 138px", ease: "linear" })
              })   
            })
        //
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
    
    return (
        <HeroTopFoldContainer>

            <div className="heroTop" >
                <div className="circleTextLogoScrollWrapper">
                  <div className="circleTextLogoWrapper">
                    <div className="circleTextLogo" />
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
                    <div className="ctaText">Establish Connection</div>
                </button>

                <div className="descriptionBox">
                    <div className="descriptionTextContainer">
                        <div>We are a creative studio based in Barcelona.</div>
                        <div>We develop creative communication strategies.</div>
                    </div>
                </div>

            </div>

        </HeroTopFoldContainer>
    )
}
export default HeroTopFold
