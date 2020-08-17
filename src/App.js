//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'


//STYLES
//-Vars
const leftSideWidth = "360px"
//-Components
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
  }
`
const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${leftSideWidth};
  height: 100vh;
  background: red;
`
const BottomSideNav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 150px;
  background: blue;
`
const RightContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100vw - ${leftSideWidth});
  background: pink;
`
const TopFold = styled.section`
  width: 100%;
  height: 100vh;
  background: yellow;
`
const LaunchesSection = styled.section`
  width: 100%;
  height: 1430px;
  background: beige;
`


//MAIN COMPONENT
function App() {
  return (
    <>
      <GlobalStyle/>

      <SideNav>

        <BottomSideNav>

        </BottomSideNav>
      </SideNav>

      <RightContainer>

        <TopFold>

        </TopFold>

        <LaunchesSection>

        </LaunchesSection>

      </RightContainer>
    </>
  )
}
export default App
