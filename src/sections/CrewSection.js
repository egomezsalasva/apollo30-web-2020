//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Styles
import {apolloColors} from '../data/apollo30styles'
//-Components
import GlobalSection from '../components/GlobalSection'
import GlobalList from '../components/GlobalList'
import GlobalTab from '../components/GlobalTab'

//STYLES
//-Components
const ListContainerStyledComp = styled.section`
    position: relative;

    .tabMailPlus{
        right: calc(10px + 15px + 20px);
        opacity: 0;
    }

    .tabRolePlus{
        right: calc(10px + 15px + 20px);
    }

    .plusCrew{
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
    }

`


//MAIN COMPONENT
const CrewSection = () => {


    //CREW ANIMATIONS
      
        let plusAntoLine01 = useRef()
        let plusAntoLine02 = useRef()
        let plusAntoRole = useRef()
        let plusAntoMail = useRef()
        let crewHoverAntoTl = gsap.timeline({ paused: true, reversed: true })

        useEffect( () => { 
            crewHoverAntoTl
                        .to( plusAntoLine01, { duration: 0.8, rotate: 90, ease: "power2.inOut"}, "start" )
                        .to( plusAntoLine02, { duration: 0.8, rotate: 180, ease: "power2.inOut"}, "start" )
                        .to( plusAntoRole, { duration: 0.8, x: `${-95.03 - 19}`, ease: "power2.inOut" }, "start" )
                        .to( plusAntoMail, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4" )
        }, [crewHoverAntoTl])


        let plusSandraLine01 = useRef()
        let plusSandraLine02 = useRef()
        let plusSandraRole = useRef()
        let plusSandraMail = useRef()
        let crewHoverSandraTl = gsap.timeline({ paused: true, reversed: true })
        useEffect( () => { 
            crewHoverSandraTl
                        .to( plusSandraLine01, { duration: 0.8, rotate: 90, ease: "power2.inOut"}, "start" )
                        .to( plusSandraLine02, { duration: 0.8, rotate: 180, ease: "power2.inOut"}, "start" )
                        .to( plusSandraRole, { duration: 0.8, x: `${-95.03 - 19}`, ease: "power2.inOut" }, "start" )
                        .to( plusSandraMail, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4" )
        }, [crewHoverSandraTl])

    //

    return (
        <GlobalSection
            propSectionID="crew" 
            propSectionTitle="Crew" 
            propSectionDescription="We believe autonomy is a powerful motivator. That's why we operate in a decentralized system, with a base work station in Barcelona."
        >

            <ListContainerStyledComp className="listContainer">

                <GlobalList propListTitle="Ground Control" >

                    <GlobalTab propTitle="Anto"
                        propRole="Creative Director"
                        propRoleRef={el => plusAntoRole = el}
                        propOnMouseEnter={ () => crewHoverAntoTl.play() }
                        propOnMouseLeave={ () => crewHoverAntoTl.reverse() }
                        propRoleWithIcon
                    >
                        <div className="tabRole tabMailPlus" ref={el => plusAntoMail = el}>a@apollo30.com</div>
                        <div className="plusCrew">
                            <div className="line01Plus" ref={el => plusAntoLine01 = el}></div>
                            <div className="line02Plus" ref={el => plusAntoLine02 = el}></div>
                        </div>
                    </GlobalTab>
                    <GlobalTab propTitle="Sandra"
                        propRole="Accounting"
                        propRoleRef={el => plusSandraRole = el}
                        propOnMouseEnter={ () => crewHoverSandraTl.play() }
                        propOnMouseLeave={ () => crewHoverSandraTl.reverse() }
                        propRoleWithIcon
                    >
                        <div className="tabRole tabMailPlus" ref={el => plusSandraMail = el}>s@apollo30.com</div>
                        <div className="plusCrew">
                            <div className="line01Plus" ref={el => plusSandraLine01 = el}></div>
                            <div className="line02Plus" ref={el => plusSandraLine02 = el}></div>
                        </div>
                    </GlobalTab>
                    <GlobalTab propTitle="Ramón" propRole="Administrator" propNoPointer />
                    <GlobalTab propTitle="Cesar" propRole="Videographer / Motion Designer" propNoPointer />
                    <GlobalTab propTitle="Paula" propRole="Junior Designer" propNoPointer />
                    
                </GlobalList>

    
                <GlobalList propListTitle="Technicians">

                    <GlobalTab propTitle="Kike" propRole="UX & UI Designer / Front-End Developer" propNoPointer />
                    <GlobalTab propTitle="Pablo" propRole="Full-Stack Developer" propNoPointer />
                    <GlobalTab propTitle="Esther" propRole="Photographer" propNoPointer />
                    <GlobalTab propTitle="Nathan" propRole="Photographer" propNoPointer />

                </GlobalList>

            </ListContainerStyledComp>

        </GlobalSection>

    )
}
export default CrewSection
