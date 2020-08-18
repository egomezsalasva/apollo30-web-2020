//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from './data/apollo30styles'


//STYLES
//-Vars
const leftSideWidth = "360px"
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

//MAIN COMPONENT
function SideNav() {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  )
}
export default SideNav
