//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'


//STYLES
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
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  width: 360px;
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


//MAIN COMPONENT
function App() {
  return (
    <>
      <GlobalStyle/>
      <SideNav>
        <BottomSideNav>

        </BottomSideNav>
      </SideNav>
    </>
  )
}
export default App
