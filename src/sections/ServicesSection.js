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


    }

`


//MAIN COMPONENT
const ServicesSection = () => {


  //HOVER HANDLER ACCORDEON TAB
    const hoverServiceTl = gsap.timeline({paused: true})
    useEffect( () => {
      hoverServiceTl.to(creativityReadMoreRef, { duration: 0.8, alpha: 0.33, ease:"power2.inOut" })
    }, [hoverServiceTl])
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
              .to(creativityReadMoreRef, { duration: 0.8, alpha: 0, ease: "power2.inOut" }, "start")
              .reverse()
          }, [creativityTl])
        //

        //Logic
          const toggleCreativityTl = () => {

            if(creativityOpen === false){
              creativityTl.reversed(!creativityTl.reversed())
              setCreativityOpen(true)
            }

            if(creativityOpen === true){
              creativityTl.reversed(!creativityTl.reversed())
              setCreativityOpen(false)
            }

          }
        //
    //

    //Brand Tab
        //Animations
          useEffect(() => {
            brandTl
              .to(brandReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .reverse()
          }, [brandTl])
        //
        //Logic
          const toggleBrandTl = () => {

            if(brandOpen === false ){
              brandTl.reversed(!brandTl.reversed())
              setBrandOpen(true)
            }

            if(brandOpen === true){
              brandTl.reversed(!brandTl.reversed())
              setBrandOpen(false)
            }

          }
        //
    //

    //Media Tab
      //Animations
        useEffect(() => {
          mediaTl
            .to(mediaReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
            .reverse()
        }, [mediaTl])
      //
      //Logic
        const toggleMediaTl = () => {

          if(mediaOpen === false){
            mediaTl.reversed(!mediaTl.reversed())
            setMediaOpen(true)
          }

          if(mediaOpen === true){
            mediaTl.reversed(!mediaTl.reversed())
            setMediaOpen(false)
          }

        }
      //
    //

    //Development Tab
      //Animations
        useEffect(() => {
          developmentTl
            .to(mediaReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
            .reverse()
        }, [developmentTl])
      //
      //Logic
        const toggleDevelopmentTl = () => {

          if(developmentOpen === false){
            developmentTl.reversed(!developmentTl.reversed())
            setDevelopmentOpen(true)
          }

          if(developmentOpen === true){
            developmentTl.reversed(!developmentTl.reversed())
            setDevelopmentOpen(false)
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
              propServicesText="Creamos contenido (publicitario, cinematográfico, social, digital y móvil) que trasciende los medios tradicionales y difumina las líneas entre productos, experiencias, contenido y marketing."
              //Refs
              propTabRef={el => {creativityTabRef = el}}
              propRoleRef={el => {creativityReadMoreRef = el}}
              propServicesTextRef={el => {creativityTextRef = el}}
              propServicesArrowRef={el => {arrowCreativityRef = el}}
              //Handlers
              propOnMouseEnter={() => hoverServiceTl.play()}
              propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleCreativityTl}   
          />
          <ServicesTab propTitle="Brand Innovation"
              //Text
              propServicesText="Los consumidores de hoy no compran una marca, se han de sentir partícipes de ella. Ayudamos a las marcas a simplificar y aclarar quiénes son para transmitir mejor y llegar a conectar verdaderamente con su público objetivo."
              //Refs
              propTabRef={el => {brandInnovationTabRef = el}}
              propRoleRef={el => {brandReadMoreRef = el}}
              propServicesTextRef={el => {brandTextRef = el}}
              propServicesArrowRef={el => {arrowBrandRef = el}}
              //Handlers
              propOnMouseEnter={() => hoverServiceTl.play()}
              propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleBrandTl}     
          />
          <ServicesTab propTitle="Media Activation"
              //Text
              propServicesText="La abundancia de competencia en el mercado actual exige una dosis extra de creatividad y estrategia. Una estrategia ocurrente garantiza ubicaciones de medios más ingeniosas y, por tanto, mas efectivas."
              //Refs
              propTabRef={el => {mediaActivationTabRef = el}}
              propRoleRef={el => {mediaReadMoreRef = el}}
              propServicesTextRef={el => {mediaTextRef = el}}
              propServicesArrowRef={el => {arrowMediaRef = el}}
              //Handlers
              propOnMouseEnter={() => hoverServiceTl.play()}
              propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleMediaTl}       
          />
          <ServicesTab propTitle="Development"
              //Text
              propServicesText="Ofrecemos servicios de diseño y desarrollo web, creamos apps y gestionamos proyectos de desarrollo personalizados."
              //Refs
              propTabRef={el => {developmentTabRef = el}}
              propRoleRef={el => {developmentReadMoreRef = el}}
              propServicesTextRef={el => {developmentTextRef = el}}
              propServicesArrowRef={el => {arrowDevelopmentRef = el}}
              //Handlers
              propOnMouseEnter={() => hoverServiceTl.play()}
              propOnMouseLeave={() => hoverServiceTl.reverse()}
              propOnClick={toggleDevelopmentTl}
          />

        </div>

      </ListContainerStyledComp>

    </GlobalSection>

  )
}
export default ServicesSection
