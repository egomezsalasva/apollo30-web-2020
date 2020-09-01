//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'
//-Images
import internalLinkIcon from '../assets/images/internalLink.svg'
import externalLinkIcon from '../assets/images/externalLink.svg'


//STYLES
//-Components
const TabContainer = styled.section`
    position: relative;
    border-bottom: 2px solid ${apolloColors.dark};
    width: 100%;
    height: calc(60px + 2px);
    cursor: default;

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

    .tabRoleInternalIcon{
        position: absolute;
        top: 25px;
        right: calc(10px + 15px + 20px);
    }

    .iconContainer{
        position: absolute;
        top: 20px;
        right: 10px;
        width: 20px;
        height: 20px;

        .internalLinkIcon{
            position: absolute;
            top: 1px;
            left: 1px;
            width: 20px;
            height: 20px;
            background: url(${internalLinkIcon});
        }
        .externalLinkIcon{
            position: absolute;
            top: 0;
            left: -1px;
            width: 20px;
            height: 20px;
            background: url(${externalLinkIcon});
            opacity: 0;
        }
    }
            
`


//MAIN COMPONENT
const ListTab = ({propPointer, propTitle, propRole, propInternalIcon, propExternalIcon, propOnMouseEnter, propOnMouseLeave}) => {
    return (
        <TabContainer 
            className={`tab ${propPointer ? 'pointerTab' : ''}`}
            onMouseEnter={propOnMouseEnter}
            onMouseLeave={propOnMouseLeave}
        >
            <h3 className="tabTitle">{propTitle}</h3>
            <div className={`tabRole ${propInternalIcon ? 'tabRoleInternalIcon' : ''}`}>{propRole}</div>
            <div className="iconContainer">
                <div className={`${propInternalIcon ? 'internalLinkIcon' : ''}`} />
            </div>
        </TabContainer>
    )
}
export default ListTab
