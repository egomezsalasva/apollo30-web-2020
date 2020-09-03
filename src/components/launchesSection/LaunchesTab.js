//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Images
import internalLinkIcon from '../../assets/images/internalLink.svg'
import externalLinkIcon from '../../assets/images/externalLink.svg'
//-Components
import GlobalTab from '../GlobalTab'


//STYLES
//-Components
const IconContainer = styled.div`
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
`


//MAIN COMPONENT
const LaunchesTab = ({propNoPointer, propTitle, propRole, propInternalIcon, propExternalIcon, propOnMouseEnter, propOnMouseLeave, propOnClick, propRoleIconRef, propRoleRef, propHrefTab}) => {

    return (
        <a href={propHrefTab} target="_blank" rel="noopener noreferrer">
            <GlobalTab 
                propNoPointer={propNoPointer} 
                propTitle={propTitle} 
                propRole={propRole} 
                propRoleRef={propRoleRef}
                propInternalIcon={propInternalIcon} 
                propExternalIcon={propExternalIcon}
                //Event Handlers
                propOnMouseEnter={propOnMouseEnter}
                propOnMouseLeave={propOnMouseLeave}
                propOnClick={propOnClick}
            >
                <IconContainer className="iconContainer">
                    <div className="externalLinkIcon" ref={propRoleIconRef}/>
                </IconContainer>
            </GlobalTab>
        </a>
    )
}
export default LaunchesTab
        
