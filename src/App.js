//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from './data/apollo30styles'
//-Images
import logoImg from './assets/images/apollo30Logo.png'


//STYLES
//-Vars
const leftSideWidth = "360px"
const topFoldStripHeight = "150px"

//-Components
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${apolloColors.light};
  }
  button{
    border: none;
    outline: none;
  }
`

const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${leftSideWidth};
  height: 100vh;

  .sidenavTop{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100% - ${topFoldStripHeight});
    background: ${apolloColors.light};

    .fullMenuContainer{
      position: absolute;
      top: 50%;
      left: 120px;
      transform: translateY(-50%);

      .menuHeading{
        ${apolloFonts.textSpecial};
      }
      .menuContainer{

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
    background: ${apolloColors.dark};

    .sidenavBottomText{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${apolloColors.light};
      ${apolloFonts.textSmall}
    }
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
        /* SubHeading 3 - VCR OSD Mono - ALLCAPS */
        font-family: 'VCR OSD Mono';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 18px;
        text-transform: uppercase;
      }
      .welcomeHeading{
        margin-top: 20px;
        color: ${apolloColors.light};
        ${apolloFonts.heading01};
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
      width: 350px;
      height: 100%;
      background: ${apolloColors.light};
      cursor: pointer;
      .ctaText{
        color: ${apolloColors.dark};
        /* Paragraph Special - VCR OSD Mono - ALLCAPS */
        font-family: 'VCR OSD Mono';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
        text-transform: uppercase;
      }
    }
    .descriptionBox{
      width: 100%;
      align-self: center;
      text-align: center;

      p{
        display: inline-block;
        margin: 40px;
        text-align: left;
        color: ${apolloColors.light};
        /* Pargraph Large - Graphik */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
      }
    }  
  }
`

const LaunchesSection = styled.section`
  width: 100%;
  height: 1430px;
  background: ${apolloColors.light};
`


//MAIN COMPONENT
function App() {
  return (
    <>
      <GlobalStyle/>

      <SideNav>
        <div className="sidenavTop">
          <div className="fullMenuContainer">
            <div className="menuHeading">Menu</div>

          </div>

        </div>
        <div className="sidenavBottom">
          <div className="sidenavBottomText">Scroll Down</div>
        </div>
      </SideNav>

      <ContentContainer>

        <TopFold>

          <img className="logo" src={logoImg} alt="Apollo30 Logo" />

          <div className="heroTop">
            <div className="welcomeHeadingComposition">
              <div className="welcomeIntro">Welcome,</div>
              <div className="welcomeHeading">WE ARE <br/> APOLLO30</div>
            </div>
          </div>

          <div className="heroBottom">
            <button className="ctaButton">
              <div className="ctaText">Call Houston</div>
            </button>
            <div className="descriptionBox">
                <p>
                  We are a creative studio based in Barcelona.<br/>
                  We develop creative communication strategies.
                </p>
            </div>
          </div>

        </TopFold>

        <LaunchesSection>

        </LaunchesSection>

      </ContentContainer>
    </>
  )
}
export default App
