//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
//-Styles
import {apolloColors} from './data/apollo30styles'


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
  }
  .sidenavBottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${topFoldStripHeight};
    background: ${apolloColors.dark};
  }
`
const RightContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100vw - ${leftSideWidth});
`
const TopFold = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .heroTop{
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 150px);
    background: ${apolloColors.dark};
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
        font-size: 14px;
        line-height: 14px;
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
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
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

        </div>
        <div className="sidenavBottom">

        </div>
      </SideNav>

      <RightContainer>

        <TopFold>
          <div className="heroTop">

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

      </RightContainer>
    </>
  )
}
export default App
