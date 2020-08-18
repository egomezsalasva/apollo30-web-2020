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
        ${apolloFonts.subheading03};
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
        ${apolloFonts.textSpecial};
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
        ${apolloFonts.textLarge};
      }
    }  
  }
`
const LaunchesSection = styled.section`
  width: 100%;
  padding: 130px;
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
            <ul className="menuOptions">
              <li className="active">
                <a href="#launches">Launches</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#tripulation">Tripulation</a>
              </li>
              <li>
                <a href="#base">Base</a>
              </li>
            </ul>
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
