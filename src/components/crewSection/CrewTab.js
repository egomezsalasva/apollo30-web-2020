//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Styles
import {apolloColors, apolloFonts} from '../../data/apollo30styles'
//-Components
import GlobalTab from '../../components/GlobalTab'

//STYLES
//-Components
const EmailText = styled.div`
    position: absolute;
    top: 25px;
    right: 10px;
    ${apolloFonts.textSmall};
    color: ${apolloColors.dark};
    right: calc(10px + 15px + 20px);
    opacity: 0;
`
const PlusIcon = styled.div`
    position: absolute;
    top: 21px;
    right: 10px;
    display: inline-block;
    width: 20px;
    height: 20px;

    .line01Plus{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 12px;
        background: ${apolloColors.dark};
    }
    .line02Plus{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 2px;
        width: 12px;
        background: ${apolloColors.dark};
    }
`

//MAIN COMPONENT
const CrewTab = ({propTitle, propRole, propRoleRef, propOnMouseEnter, propOnMouseLeave, propEmail, propEmailRef, propPlusLine01Ref, propPlusLine02Ref}) => {
    return (
        <GlobalTab
            //Text
            propTitle={propTitle}
            propRole={propRole}
            //Icons
            propRoleWithIcon
            //Refs
            propRoleRef={propRoleRef}
            //Handlers
            propOnMouseEnter={propOnMouseEnter}
            propOnMouseLeave={propOnMouseLeave}   
        >
            <EmailText ref={propEmailRef}>{propEmail}</EmailText>
            <PlusIcon>
                <div className="line01Plus" ref={propPlusLine01Ref}></div>
                <div className="line02Plus" ref={propPlusLine02Ref}></div>
            </PlusIcon>
        </GlobalTab>
    )
}
export default CrewTab
