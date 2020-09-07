//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'


//STYLES
//-Vars
const borderHeight = "1px"
//-Components
const TabContainer = styled.div`
    position: relative;
    border-bottom: ${borderHeight} solid ${apolloColors.dark};
    width: 100%;
    height: calc(60px + ${borderHeight});
    cursor: pointer;

    .noPointerTab{
        cursor: default;
    }

    .tabTitle{
        position: absolute;
        top: 20px;
        left: 10px;
        display: inline-block;
        color: ${apolloColors.dark};
        ${apolloFonts.subheading01};
    }
 
    .tabRole{
        position: absolute;
        top: 25px;
        right: 10px;
        ${apolloFonts.textSmall};
        opacity: 0.33;
        color: ${apolloColors.dark};
    }

    .tabRoleWithIcon{
        position: absolute;
        top: 25px;
        right: calc(10px + 15px + 20px);
    }            
`


//MAIN COMPONENT
const GlobalTab = ({propNoPointer, propTitle, propRole, propInternalIcon, propOnMouseEnter, propOnMouseLeave, propOnClick, children, propRoleRef, propTabRef, propServicesReadMore, propWithPlus}) => {
    return (
        <TabContainer 
            className={`tab ${propNoPointer ? 'noPointerTab' : ''}`}
            ref={propTabRef}
            onMouseEnter={propOnMouseEnter}
            onMouseLeave={propOnMouseLeave}
            onClick={propOnClick}
        >

            <h3 className="tabTitle">{propTitle}</h3>

            <div 
                className={`tabRole ${ propInternalIcon ? 'tabRoleWithIcon' : ''} ${ propServicesReadMore ? 'tabReadMore' : ''} ${ propWithPlus ? 'tabRolePlus' : ''}`}
                ref={propRoleRef}
            >
                {propRole}
            </div>

            {children}

        </TabContainer>
    )
}
export default GlobalTab
