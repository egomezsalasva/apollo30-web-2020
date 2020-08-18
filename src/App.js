//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from './data/apollo30styles'
//-Images
import logoImg from './assets/images/apollo30Logo.png'
import apolloPortfolio from './assets/images/apolloPortfolio.gif'
//-Components
import SideNav from './components/SideNav'


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
    background: ${apolloColors.light};
  }
  button{
    border: none;
    outline: none;
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
const FirstSectionSpace = styled.div`
  width: 100%;
  height: 60px;
  background: ${apolloColors.light};
`
const Section = styled.section`
  width: 100%;
  padding: 70px 130px 130px;
  background: ${apolloColors.light};

  .sectionTitle{
    color: ${apolloColors.dark};
    ${apolloFonts.heading02};
  }
  .sectionDescription{
    margin-top: 30px;
    color: ${apolloColors.dark};
    ${apolloFonts.textLarge};
  }

  .apolloList{
    margin-top: 50px;
    width: 500px;

    .listTitle{
      padding-left: 10px;
      ${apolloFonts.subheading03};
    }
    .divisionLine{
      width: 100%;
      height: 2px;
      background: ${apolloColors.dark};
    }
    .topLine{
      margin-top: 20px;
    }

    .tab{
      position: relative;
      border-bottom: 2px solid ${apolloColors.dark};
      width: 100%;
      padding: 20px 10px;
      cursor: pointer;

      .tabTitle{
        display: inline-block;
        color: ${apolloColors.dark};
        ${apolloFonts.subheading01};
      }
      .tabTitleServices{
        display: inline-block;
        color: ${apolloColors.dark};
        ${apolloFonts.subheading03};
      }
      .tabRole{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        ${apolloFonts.textSmall};
        opacity: 0.33;
      }
    }

    .coordinates{
      margin: 20px 0 0 10px;
      color: ${apolloColors.dark};
      ${apolloFonts.subheading03};
    }

    .address{
      margin: 20px 0 0 10px;
      color: ${apolloColors.dark};
      ${apolloFonts.textLarge};
    }

    .contactText{
      margin: 10px 0 0 10px;
      color: ${apolloColors.dark};
      ${apolloFonts.textLarge};
      a{
        text-decoration: none;
        color: ${apolloColors.dark};
      }
    }

    .phoneText{
      margin-top: 20px;
    }

    .linkedinText{
      margin-bottom: 0px;
    }

  }
`
const PhotoContainer = styled.div`
  position: absolute;
  top: 1134px;
  right: 0;
  width: calc(100vw - 990px);
  min-width: calc(370px + 40px);
  height: 303.4px;

  .photoBox{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 370px;
    height: 303.4px;
    background: url(${apolloPortfolio});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

//MAIN COMPONENT
function App() {
  return (
    <>
      <GlobalStyle/>

      <SideNav/>

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

        <FirstSectionSpace/>

        <Section id="launches">
          <h2 className="sectionTitle">Launches</h2>
          <p className="sectionDescription">Here are some non-confidential launches we have picked from our archives</p>

          <div className="apolloList list2020">
            <h5 className="listTitle">2020</h5>

            <div className="divisionLine topLine"></div>
            <div className="tab">
              <h3 className="tabTitle">Nike Shox</h3>
              <div className="tabRole">Branded Content Campaign</div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Mucho Muchacho</h3>
              <div className="tabRole">Vinyl Cover & Website</div>  
            </div>
            <div className="tab">
              <h3 className="tabTitle">Sita Abellán</h3>
              <div className="tabRole">Branding</div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Three Marks Coffee</h3>
              <div className="tabRole">E-commerce Development</div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Trick.Wtf</h3>
              <div className="tabRole">Branding & Development</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">New Icons</h3>
                <div className="tabRole">Branding</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">La Proa 04</h3>
                <div className="tabRole">Branding & Website</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">Chip Baker Films</h3>
                <div className="tabRole">Branding & Website</div>
            </div>
          </div>

          <div className="apolloList list2019">
            <h5 className="listTitle">2019</h5>

            <div className="divisionLine topLine"></div>
            <div className="tab">
                <h3 className="tabTitle">Uniko. "Model Agency"</h3>
                <div className="tabRole">Rebranding</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">Scranny's House</h3>
                <div className="tabRole">Branding</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">The New Storytellers</h3>
                <div className="tabRole">Website</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">Premis Butaca</h3>
                <div className="tabRole">Campaing, Web, Video & Photography</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">Owl Institute</h3>
                <div className="tabRole">Branding & Website</div>
            </div>
            <div className="tab">
                <h3 className="tabTitle">Cafes Bou</h3>
                <div className="tabRole">Packaging Design</div>
            </div>
          </div>
        </Section>
        <PhotoContainer>
          <div className="photoBox"></div>
        </PhotoContainer>

        <Section id="services">

          <h2 className="sectionTitle">Services</h2>
          <p className="sectionDescription">We believe that in our current era, there’s a saturation of stimuli. This requires differentiation through tailored content.</p>

          <div className="apolloList">
            <div className="divisionLine topLine"></div>
            <div className="tab">
              <h3 className="tabTitleServices">Creativity</h3>
              <div className="tabRole">Read More</div>
            </div>
            <div className="tab">
              <h3 className="tabTitleServices">Brand Innovation</h3>
              <div className="tabRole">Read More</div>  
            </div>
            <div className="tab">
              <h3 className="tabTitleServices">Media Activation</h3>
              <div className="tabRole">Read More</div>
            </div>
            <div className="tab">
              <h3 className="tabTitleServices">Development</h3>
              <div className="tabRole">Read More</div>
            </div>
          </div>

        </Section>

        <Section id="tripulation">

          <h2 className="sectionTitle">Tripulation</h2>

          <div className="apolloList">
            <h5 className="listTitle">Operations</h5>

            <div className="divisionLine topLine"></div>
            <div className="tab">
              <h3 className="tabTitle">Anto</h3>
              <div className="tabRole">Creative Director</div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Sandra</h3>
              <div className="tabRole">General Manager</div>  
            </div>
            <div className="tab">
              <h3 className="tabTitle">Cesar</h3>
              <div className="tabRole">Videographer / Motion Designer </div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Paula</h3>
              <div className="tabRole">Community Manager / Junior Designer</div>
            </div>
          </div>

          <div className="apolloList">
            <h5 className="listTitle">Technicians</h5>

            <div className="divisionLine topLine"></div>
            <div className="tab">
              <h3 className="tabTitle">Kike</h3>
              <div className="tabRole">UX & UI Designer / Front-End Developer</div>
            </div>
            <div className="tab">
              <h3 className="tabTitle">Pablo</h3>
              <div className="tabRole">Full-Stack Developer</div>  
            </div>
            <div className="tab">
              <h3 className="tabTitle">Nathan</h3>
              <div className="tabRole">Photographer</div>
            </div>
          </div>

        </Section>

        <Section id="base">

          <h2 className="sectionTitle">Base</h2>

          <div className="apolloList">
            <h5 className="listTitle">Apollo30 Headquarters</h5>

            <div className="divisionLine topLine"></div>

            <h5 className="coordinates">41.2145º N, 2.0739º E</h5>
            
            <div className="address">
              C/ d’Enric Morera 5-7, <br/>
              08902, l’Hospitalet de Llobregat, BCN, ES 
            </div>
          </div>

          <div className="apolloList">
            <h5 className="listTitle">Establish Communication</h5>

            <div className="divisionLine topLine"></div>
        
            <div className="contactText phoneText">+34 693 037 682</div>
            <div className="contactText">contact@apollo30.com</div>
            <div className="contactText"><a href="https://www.instagram.com/apollo30com/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
            <div className="contactText linkedinText"><a href="https://www.linkedin.com/company/apollo-30/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>

          </div>

        </Section>

      </ContentContainer>
    </>
  )
}
export default App
