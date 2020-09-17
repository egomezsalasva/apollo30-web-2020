//IMPORTS
//-Modules
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Components
import GlobalSection from '../components/GlobalSection'
import GlobalList from '../components/GlobalList'
import GlobalTab from '../components/GlobalTab'
import CrewTab from '../components/crewSection/CrewTab'

//STYLES
//-Components
const ListContainerStyledComp = styled.div`
    position: relative;

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
                        .to( plusAntoRole, { duration: 0.8, x: `${-101.97 - 20}`, ease: "power2.inOut" }, "start" )
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
                        .to( plusSandraRole, { duration: 0.8, x: `${-135.86 - 20}`, ease: "power2.inOut" }, "start" )
                        .to( plusSandraMail, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4" )
        }, [crewHoverSandraTl])

    //

    return (
        <GlobalSection
            propSectionID="crew" 
            propSectionTitle="Crew" 
            propSectionDescription="We believe autonomy is a powerful motivator. That's why we operate in a decentralized manner, although we have a base work station in Barcelona."
        >

            <ListContainerStyledComp className="listContainer">

                <GlobalList propListTitle="Ground Control" >

                    <CrewTab propTitle="Anto"
                        //Text
                        propRole="Creative Director"
                        propEmail="a@apollo30.com"
                        //Refs
                        propRoleRef={el => plusAntoRole = el}
                        propEmailRef={el => plusAntoMail = el}
                        propPlusLine01Ref={el => plusAntoLine01 = el}
                        propPlusLine02Ref={el => plusAntoLine02 = el}
                        //Handlers
                        propOnMouseEnter={ () => crewHoverAntoTl.play() }
                        propOnMouseLeave={ () => crewHoverAntoTl.reverse() }   
                    />
                    <CrewTab propTitle="Sandra"
                        //Text
                        propRole="Accounting"
                        propEmail="sandra@apollo30.com"
                        //Refs
                        propRoleRef={el => plusSandraRole = el}
                        propEmailRef={el => plusSandraMail = el}
                        propPlusLine01Ref={el => plusSandraLine01 = el}
                        propPlusLine02Ref={el => plusSandraLine02 = el}
                        //Handlers
                        propOnMouseEnter={ () => crewHoverSandraTl.play() }
                        propOnMouseLeave={ () => crewHoverSandraTl.reverse() }
                    />
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
