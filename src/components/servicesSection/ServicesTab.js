//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Images
import arrowServices from '../../assets/images/apolloServicesArrow.svg'
//-Styles
import { apolloFonts, apolloColors} from '../../data/apollo30styles'
//-Components
import GlobalTab from '../GlobalTab'


//STYLES
//-Components
const ServicesTabContainer = styled.div`
    width: 100%;

    .topLine{
        width: 500px;
    }

    .tab{
        width: 100%;
        /* height: 104px; */

        .tabTitle{
            position: absolute;
            top: 19px;
            left: 10px;
            display: inline-block;
            color: ${apolloColors.dark};
            ${apolloFonts.subheading03};
        }
        .tabReadMore{
            position: absolute;
            top: 24px;
            right: calc(20px + 15px + 10px);
            ${apolloFonts.textSmall};
            opacity: 0;
        }
    }
`
const ServiceTextStyledComp = styled.div`
    display: none;
    width: 300px;
    position: absolute;
    top: calc(20px + 20px + 10px);
    /* right: calc(20px + 15px + 10px); */
    right: calc(20px + 15px);
    ${apolloFonts.textSmall};
    line-height: 18px;
    opacity: 0;    
`
const ArrowContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
    width: 20px;
    height: 20px;

    .arrowWrapper{
        width: 100%;
        height: 100%;
        transform: rotate(45deg);

        .arrowServices{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 18px;
            height: 14px;
            background: url(${arrowServices});
            background-repeat: no-repeat;
            background-size: contain;
        }
    }   
`


//MAIN COMPONENT
const ServicesTab = ({propNoPointer, propTitle, propRoleRef, propOnMouseEnter, propOnMouseLeave, propOnClick, propServicesTextRef, propServicesText, propServicesArrowRef, propTabRef }) => {


    return (
        <ServicesTabContainer >
            <GlobalTab 
                //Texts          
                propTitle={propTitle}
                propRole="Click To Read More"
                //Icons
                propRoleWithIcon 
                //Conditional Styles
                propNoPointer={propNoPointer}
                propServicesReadMore
                //Extra Classes
                propRoleExtraClasses="tabReadMore servicesRole"
                //Refs
                propTabRef={propTabRef}
                propRoleRef={propRoleRef}
                //Event Handlers
                propOnMouseEnter={propOnMouseEnter}
                propOnMouseLeave={propOnMouseLeave}
                propOnClick={propOnClick}
            >
                <ServiceTextStyledComp ref={propServicesTextRef}>{propServicesText}</ServiceTextStyledComp>

                <ArrowContainer>
                    <div className="arrowWrapper" ref={propServicesArrowRef}>
                        <div className="arrowServices" />
                    </div>  
                </ArrowContainer> 

            </GlobalTab>
        </ServicesTabContainer>
    )
}
export default ServicesTab
