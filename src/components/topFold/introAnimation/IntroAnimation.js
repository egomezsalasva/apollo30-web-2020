//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors} from '../../../data/apollo30styles'



//STYLES
//-Components
const IntroAnimContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .introAnimBox{
    display: inline-block;
    width: 25%;
    height: 100%;
    background: ${apolloColors.light};
  }
`


//MAIN COMPONENT
const IntroAnimation = () => {
  return (
    <IntroAnimContainer id="introAnimContainer">
        <div className="introAnimBox" id="introAnimBox01" />
        <div className="introAnimBox" id="introAnimBox02" />
        <div className="introAnimBox" id="introAnimBox03" />
        <div className="introAnimBox" id="introAnimBox04" />
    </IntroAnimContainer>
  )
}
export default IntroAnimation
