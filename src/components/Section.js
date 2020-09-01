//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'


//STYLES
//-Components
const SectionContainer = styled.section`
  width: 100%;
  background: ${apolloColors.light};

  .sectionCenter{
    width: 910px;
    margin: 0 auto;
    padding: 70px 0 130px;
    padding-left: 45px;
    @media (max-width: 1230px) {
      width: 100%; 
    }

    .sectionTitle{
      color: ${apolloColors.dark};
      ${apolloFonts.heading02};
    }

    .sectionDescription{
      margin-top: 30px;
      max-width: 500px;
      color: ${apolloColors.dark};
      ${apolloFonts.textLarge};
    }
  } 
`



//MAIN COMPONENT
const Section = ({sectionIdProp, sectionTitleProp, sectionDescriptionProp, children}) => {
  return (
    <SectionContainer id={sectionIdProp}>
        <div className="sectionCenter">
            <h2 className="sectionTitle">{sectionTitleProp}</h2>
            <p className="sectionDescription">{sectionDescriptionProp}</p>
            {children}
        </div>
    </SectionContainer>
  )
}
export default Section

