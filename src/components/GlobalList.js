//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'

//STYLES
//-Components
const GlobalListStyledComp = styled.div`

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

`


//MAIN COMPONENT
const CrewSection = ({children, propExtraListClass, propListTitle}) => {
    return (
        <GlobalListStyledComp className={`${propExtraListClass}`}>
            <h5 className="listTitle">{propListTitle}</h5>
            <div className="divisionLine topLine"></div>

            {children}

        </GlobalListStyledComp>
    )
}
export default CrewSection
