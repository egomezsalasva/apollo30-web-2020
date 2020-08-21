//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'
//-Images
import arrowImg from '../assets/images/apoolloArrow.svg'
import asterixImg from '../assets/images/apolloAsterix.svg'


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
            transform: translate(-1px -2px);
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
    background: ${apolloColors.dark};

    .sidenavBottomTextContainer{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 12px;
      overflow: hidden;

      .sidenavBottomText{

        .sidenavBottomTextInner{
          color: ${apolloColors.light};
          ${apolloFonts.textSmall}
        }
      }
    }
  }
`


//MAIN COMPONENT
function SideNav() {


  return (
    <>
      <Wrapper>
        <div className="sidenavTop">
          <div className="fullMenuContainer">
            <div className="menuHeading">Menu</div>
            <ul className="menuOptions">
              <li className="lauchesRef">
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
          <div className="sidenavBottomTextContainer">
            <div className="sidenavBottomText">
              <div className="sidenavBottomTextInner">Scroll Down</div>
              <div className="sidenavBottomTextInner">Scroll Down</div>
              <div className="sidenavBottomTextInner">Call Houston</div>
            </div>
          </div>
          
        </div>
      </Wrapper>
    </>
  )
}
export default SideNav
