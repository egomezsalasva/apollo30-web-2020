//IMPORTS
//-Modules
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Styles
import {apolloColors, apolloFonts} from '../data/apollo30styles'
//-Components
import GlobalSection from '../components/GlobalSection'
import ServicesTab from '../components/servicesSection/ServicesTab'

//STYLES
//-Components
const ListContainerStyledComp = styled.section`
    position: relative;

    .apolloList{
        display:inline-block;
        padding-top: 50px;
        width: 500px;
        @media (max-width: 1230px) {
            width: 54.9450549%; 
        }
        @media (max-width: 1100px) {
          width: 500px;
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

`


//MAIN COMPONENT
const ServicesSection = () => {


  //HOVER HANDLER ACCORDEON TAB
    // const hoverServiceTl = gsap.timeline({paused: true})
    // useEffect( () => {
    //   hoverServiceTl.to(creativityReadMoreRef, { duration: 0.8, alpha: 0.33, ease:"power2.inOut" })
    // }, [hoverServiceTl])
  //


  //CLICK HANDLER ACCORDEON

    const [creativityOpen, setCreativityOpen] = useState(false)
    const [brandOpen, setBrandOpen] = useState(false)
    const [mediaOpen, setMediaOpen] = useState(false)
    const [developmentOpen, setDevelopmentOpen] = useState(false)

    const [creativityTl] = useState(gsap.timeline({ paused: true }))
    const [brandTl] = useState(gsap.timeline({ paused: true }))
    const [mediaTl] = useState(gsap.timeline({ paused: true }))
    const [developmentTl] = useState(gsap.timeline({ paused: true }))

    let topLineServicesRef = useRef(null)
    let creativityTabRef = useRef(null)
    let arrowCreativityRef = useRef(null)
    let arrowBrandRef = useRef(null)
    let arrowMediaRef = useRef(null)
    let arrowDevelopmentRef = useRef(null)
    let brandInnovationTabRef = useRef(null)
    let mediaActivationTabRef = useRef(null)
    let developmentTabRef = useRef(null)
    let creativityReadMoreRef = useRef(null)
    let brandReadMoreRef = useRef(null)
    let mediaReadMoreRef = useRef(null)
    let developmentReadMoreRef = useRef(null)
    let creativityTextRef = useRef(null)
    let brandTextRef = useRef(null)
    let mediaTextRef = useRef(null)
    let developmentTextRef = useRef(null)

    //Creativity Tab 
        //Animations
          useEffect(() => {
            creativityTl
              //open his tab
              .to(creativityReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef, { duration: 0.8, height: 150, ease: "power2.inOut" }, "start")
              .to(arrowCreativityRef, { duration: 0.8, rotate: "-45", ease: "power2.inOut" }, "start")
              .to(creativityTextRef, { duration: 0, display: "block", ease: "power2.inOut" }, "stage02-=0.4")
              .to(creativityTextRef, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4")
              .reverse()
          }, [creativityTl])
        //

        //Logic
          const toggleCreativityTl = () => {

            if (creativityOpen === false && brandOpen === true){
              setCreativityOpen(true)
              setBrandOpen(false)
              creativityTl.reversed(!creativityTl.reversed())
              brandTl.reversed(!brandTl.reversed())
            } else if (creativityOpen === false && mediaOpen === true){
              setCreativityOpen(true)
              setMediaOpen(false)
              creativityTl.reversed(!creativityTl.reversed())
              mediaTl.reversed(!mediaTl.reversed())
            } else if (creativityOpen === false && developmentOpen === true){
              setCreativityOpen(true)
              setDevelopmentOpen(false)
              creativityTl.reversed(!creativityTl.reversed())
              developmentTl.reversed(!developmentTl.reversed())
            } else if (creativityOpen === false){
              setCreativityOpen(true)
              creativityTl.reversed(!creativityTl.reversed())
            } else if (creativityOpen === true){
              setCreativityOpen(false)
              creativityTl.reversed(!creativityTl.reversed())
            }

          }
        //
    //

    //Brand Tab
        //Animations
        useEffect(() => {
          brandTl
            //open his tab
            .to(brandReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
            .to(brandInnovationTabRef, { duration: 0.8, height: 150, ease: "power2.inOut" }, "start")
            .to(arrowBrandRef, { duration: 0.8, rotate: "-45", ease: "power2.inOut" }, "start")
            .to(brandTextRef, { duration: 0, display: "block", ease: "power2.inOut" }, "stage02-=0.4")
            .to(brandTextRef, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4")
            .reverse()
        }, [brandTl])
        //
        //Logic
          const toggleBrandTl = () => {

            if (brandOpen === false && creativityOpen === true){
              setBrandOpen(true)
              setCreativityOpen(false)
              brandTl.reversed(!brandTl.reversed())
              creativityTl.reversed(!creativityTl.reversed())
            } else if (creativityOpen === false && mediaOpen === true){
              setBrandOpen(true)
              setMediaOpen(false)
              brandTl.reversed(!brandTl.reversed())
              mediaTl.reversed(!mediaTl.reversed())
            } else if (creativityOpen === false && developmentOpen === true){
              setBrandOpen(true)
              setDevelopmentOpen(false)
              brandTl.reversed(!brandTl.reversed())
              developmentTl.reversed(!developmentTl.reversed())
            } else if (brandOpen === false){
              setBrandOpen(true)
              brandTl.reversed(!brandTl.reversed())
            } else if (brandOpen === true){
              setBrandOpen(false)
              brandTl.reversed(!brandTl.reversed())
            }

          }
        //
    //

    //Media Tab
      //Animations
        useEffect(() => {
          mediaTl
            //open his tab
            .to(mediaReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
            .to(mediaActivationTabRef, { duration: 0.8, height: 168, ease: "power2.inOut" }, "start")
            .to(arrowMediaRef, { duration: 0.8, rotate: "-45", ease: "power2.inOut" }, "start")
            .to(mediaTextRef, { duration: 0, display: "block", ease: "power2.inOut" }, "stage02-=0.4")
            .to(mediaTextRef, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4")
            .reverse()
        }, [mediaTl])
      //
      //Logic
        const toggleMediaTl = () => {

          if (mediaOpen === false && creativityOpen === true){
            setMediaOpen(true)
            setCreativityOpen(false)
            mediaTl.reversed(!mediaTl.reversed())
            creativityTl.reversed(!creativityTl.reversed())
          } else if (mediaOpen === false && brandOpen === true){
            setMediaOpen(true)
            setBrandOpen(false)
            mediaTl.reversed(!mediaTl.reversed())
            brandTl.reversed(!brandTl.reversed())
          } else if (mediaOpen === false && developmentOpen === true){
            setMediaOpen(true)
            setDevelopmentOpen(false)
            mediaTl.reversed(!mediaTl.reversed())
            developmentTl.reversed(!developmentTl.reversed())
          } else if (mediaOpen === false){
            setMediaOpen(true)
            mediaTl.reversed(!mediaTl.reversed())
          } else if (mediaOpen === true){
            setMediaOpen(false)
            mediaTl.reversed(!mediaTl.reversed())
          }

        }
      //
    //

    //Development Tab
      //Animations
        useEffect(() => {
            developmentTl
              //open his tab
              .to(developmentReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(developmentTabRef, { duration: 0.8, height: 114, ease: "power2.inOut" }, "start")
              .to(arrowDevelopmentRef, { duration: 0.8, rotate: "-45", ease: "power2.inOut" }, "start")
              .to(developmentTextRef, { duration: 0, display: "block", ease: "power2.inOut" }, "stage02-=0.4")
              .to(developmentTextRef, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "stage02-=0.4")
              .reverse()
        }, [developmentTl])
      //
      //Logic
        const toggleDevelopmentTl = () => {

          if (developmentOpen === false && creativityOpen === true){
            setDevelopmentOpen(true)
            setCreativityOpen(false)
            developmentTl.reversed(!developmentTl.reversed())
            creativityTl.reversed(!creativityTl.reversed())
          } else if (developmentOpen === false && brandOpen === true){
            setDevelopmentOpen(true)
            setBrandOpen(false)
            developmentTl.reversed(!developmentTl.reversed())
            brandTl.reversed(!brandTl.reversed())
          } else if (developmentOpen === false && mediaOpen === true){
            setDevelopmentOpen(true)
            setMediaOpen(false)
            developmentTl.reversed(!developmentTl.reversed())
            mediaTl.reversed(!mediaTl.reversed())
          } else if (developmentOpen === false){
            setDevelopmentOpen(true)
            developmentTl.reversed(!developmentTl.reversed())
          } else if (developmentOpen === true){
            setDevelopmentOpen(false)
            developmentTl.reversed(!developmentTl.reversed())
          }

        }
      //
    //

  //

  return (
    <GlobalSection 
        propSectionID="services" 
        propSectionTitle="Services" 
        propSectionDescription="We believe that in our current era, there’s a saturation of stimuli. This requires differentiation through tailored content."
    >
        
      <ListContainerStyledComp className="listContainer">

        <div className="apolloList servicesList">

          <div className="divisionLine topLine" style={{marginTop: "0px"}} ref={topLineServicesRef}></div>

          <ServicesTab propTitle="Creativity"
              //Text
              propServicesText="We create content (publicity, cinematography, social, digital and mobile) that transcends the traditional media and blurs the lines between product, experiences, content and marketing."
              //Refs
              propTabRef={el => {creativityTabRef = el}}
              propRoleRef={el => {creativityReadMoreRef = el}}
              propServicesTextRef={el => {creativityTextRef = el}}
              propServicesArrowRef={el => {arrowCreativityRef = el}}
              //Handlers
              // propOnMouseEnter={() => hoverServiceTl.play()}
              // propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleCreativityTl}   
          />
          <ServicesTab propTitle="Brand Innovation"
              //Text
              propServicesText="Nowadays consumers don't buy a brand, they need to feel part of it. We help brands simplify and clarify who they are to better transmit, reach and connect with their target market."
              //Refs
              propTabRef={el => {brandInnovationTabRef = el}}
              propRoleRef={el => {brandReadMoreRef = el}}
              propServicesTextRef={el => {brandTextRef = el}}
              propServicesArrowRef={el => {arrowBrandRef = el}}
              //Handlers
              // propOnMouseEnter={() => hoverServiceTl.play()}
              // propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleBrandTl}     
          />
          <ServicesTab propTitle="Media Activation"
              //Text
              propServicesText="Competition abundance in the current market requires an extra dose of creativity and strategy. Una estrategia ocurrente garantiza ubicaciones de medios más ingeniosas y, por tanto, mas efectivas."
              //Refs
              propTabRef={el => {mediaActivationTabRef = el}}
              propRoleRef={el => {mediaReadMoreRef = el}}
              propServicesTextRef={el => {mediaTextRef = el}}
              propServicesArrowRef={el => {arrowMediaRef = el}}
              //Handlers
              // propOnMouseEnter={() => hoverServiceTl.play()}
              // propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleMediaTl}       
          />
          <ServicesTab propTitle="Development"
              //Text
              propServicesText="We offer design services y web development, we create apps and manage personalized projects."
              //Refs
              propTabRef={el => {developmentTabRef = el}}
              propRoleRef={el => {developmentReadMoreRef = el}}
              propServicesTextRef={el => {developmentTextRef = el}}
              propServicesArrowRef={el => {arrowDevelopmentRef = el}}
              //Handlers
              // propOnMouseEnter={() => hoverServiceTl.play()}
              // propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleDevelopmentTl}
          />

        </div>

      </ListContainerStyledComp>

    </GlobalSection>

  )
}
export default ServicesSection
