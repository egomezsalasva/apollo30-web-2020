//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'
//-Components
import GlobalSection from '../components/GlobalSection'
import GlobalList from '../components/GlobalList'

//STYLES
//-Components
const ListContainerStyledComp = styled.div`
    position: relative;

    .apolloList{
        display:inline-block;
        padding-top: 50px;
        width: 500px;
        @media (max-width: 1230px) {
            width: 54.9450549% ;
            /* min-width: 300px; */  
        }

        .listTitle{
            padding-left: 10px;
            ${apolloFonts.subheading03};
        }

        .divisionLine{
            width: 100%;
            height: 1px;
            background: ${apolloColors.dark};
        }
        .topLine{
            margin-top: 20px;
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


`


//MAIN COMPONENT
const BaseSection = () => {

  return (
    <GlobalSection
        propSectionID="base" 
        propSectionTitle="Base" 
        propSectionDescription={null}
    >

        <ListContainerStyledComp className="listContainer">

            <GlobalList propListTitle="Apollo30 Headquarters">

                <h5 className="coordinates">41.2145º N, 2.0739º E</h5>
                
                <div className="address">
                    C/ d’Enric Morera 5-7, <br/>
                    08902, l’Hospitalet de Llobregat, BCN, ES 
                </div>

            </GlobalList>


            <GlobalList propListTitle="Establish Communication">
        
                <div className="contactText phoneText">+34 693 037 682</div>
                <div className="contactText">contact@apollo30.com</div>
                <div className="contactText"><a href="https://www.instagram.com/apollo30com/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
                <div className="contactText linkedinText"><a href="https://www.linkedin.com/company/apollo-30/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>

            </GlobalList>

        </ListContainerStyledComp>

    </GlobalSection>

  )
}
export default BaseSection
