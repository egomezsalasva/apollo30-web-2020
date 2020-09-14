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


  //CLICK HANDLER ACCORDEON

    const [openWidth, setOpenWidth] = useState(false)
    const [creativityOpen, setCreativityOpen] = useState(false)
    const [brandOpen, setBrandOpen] = useState(false)
    const [mediaOpen, setMediaOpen] = useState(false)
    const [developmentOpen, setDevelopmentOpen] = useState(false)

    const [creativityTl] = useState(gsap.timeline({ paused: true }))
    const [creativityOpenTl] = useState(gsap.timeline({ paused: true }))
    const [brandTl] = useState(gsap.timeline({ paused: true }))
    const [mediaTl] = useState(gsap.timeline({ paused: true }))
    const [developmentTl] = useState(gsap.timeline({ paused: true }))

    let topLineServicesRef = useRef()
    let creativityTabRef = useRef()
    let arrowCreativityRef = useRef()
    let arrowBrandRef = useRef()
    let arrowMediaRef = useRef()
    let arrowDevelopmentRef = useRef()
    let brandInnovationTabRef = useRef()
    let mediaActivationTabRef = useRef()
    let developmentTabRef = useRef()
    let creativityReadMoreRef = useRef()
    let brandReadMoreRef = useRef()
    let mediaReadMoreRef = useRef()
    let developmentReadMoreRef = useRef()
    let creativityTextRef = useRef()
    let brandTextRef = useRef()
    let mediaTextRef = useRef()
    let developmentTextRef = useRef()

    //Creativity Tab 
        //Animations
          useEffect(() => {
            creativityTl
              .to(topLineServicesRef.current, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
              .to(creativityReadMoreRef.current, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
              .to(arrowCreativityRef.current, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.2")
              .to(brandInnovationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
              .to(arrowBrandRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
              .to(mediaActivationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
              .to(arrowMediaRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
              .to(developmentTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
              .to(arrowDevelopmentRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
              .to(creativityReadMoreRef.current, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(creativityTabRef.current, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
              .to(creativityTextRef.current, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              .reverse()
          }, [creativityTl])
          useEffect(() => {
            creativityOpenTl
              .to(topLineServicesRef.current, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
              .to(creativityReadMoreRef.current, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
              .to(arrowCreativityRef.current, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.2")
              .to(brandInnovationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
              .to(arrowBrandRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
              .to(mediaActivationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
              .to(arrowMediaRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
              .to(developmentTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
              .to(arrowDevelopmentRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
              .to(creativityReadMoreRef.current, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(creativityTabRef.current, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
              .to(brandReadMoreRef.current, { duration: 0, display: "block", ease: "power2.inOut"} , "stage02")
              .to(brandTextRef.current, { duration: 0.8, opacity: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(brandInnovationTabRef.current, { duration: 0.8, height: "62px", ease: "power2.inOut" }, "stage03")
              .to(creativityTextRef.current, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              .reverse()
          }, [creativityOpenTl])
        //

        //Logic
          const toggleCreativityTl = () => {

            if(openWidth === false && creativityOpen === false){
              creativityTl.reversed(!creativityTl.reversed())
              setOpenWidth(true)
              setCreativityOpen(true)
            }

            if(openWidth === true && creativityOpen === true){
              creativityTl.reversed(!creativityTl.reversed())
              setOpenWidth(false)
              setCreativityOpen(false)
            }

            // if(openWidth === true && creativityOpen === false && (brandOpen === true || mediaOpen === true || developmentTl === true)){
            //   creativityOpenTl.play()
            //   setOpenWidth(true)
            //   setCreativityOpen(true)
            //   setBrandOpen(false)
            //   setMediaOpen(false)
            //   setDevelopmentOpen(false)
            // }

          }
        //
    //

    //Brand Tab
        //Animations
          useEffect(() => {
            brandTl
              .to(topLineServicesRef.current, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
              .to(brandReadMoreRef.current, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
              .to(arrowCreativityRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
              .to(brandInnovationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
              .to(arrowBrandRef.current, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.4")
              .to(mediaActivationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
              .to(arrowMediaRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
              .to(developmentTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
              .to(arrowDevelopmentRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
              .to(brandReadMoreRef.current, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(brandInnovationTabRef.current, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
              .to(brandTextRef.current, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              .reverse()
          }, [brandTl])
        //
        //Logic
          const toggleBrandTl = () => {

            if(openWidth === false && brandOpen === false ){
              brandTl.reversed(!brandTl.reversed())
              setOpenWidth(true)
              setBrandOpen(true)
            }

            if(openWidth === true && brandOpen === true){
              brandTl.reversed(!brandTl.reversed())
              setOpenWidth(false)
              setBrandOpen(false)
            }

          }
        //
    //

    //Media Tab
      //Animations
        useEffect(() => {
          mediaTl
            .to(topLineServicesRef.current, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
            .to(mediaReadMoreRef.current, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
            .to(creativityTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
            .to(arrowCreativityRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
            .to(brandInnovationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
            .to(arrowBrandRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
            .to(mediaActivationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
            .to(arrowMediaRef.current, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.6")
            .to(developmentTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
            .to(arrowDevelopmentRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
            .to(mediaReadMoreRef.current, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
            .to(mediaActivationTabRef.current, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
            .to(mediaTextRef.current, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
            .reverse()
        }, [mediaTl])
      //
      //Logic
        const toggleMediaTl = () => {

          if(openWidth === false && mediaOpen === false){
            mediaTl.reversed(!mediaTl.reversed())
            setOpenWidth(true)
            setMediaOpen(true)
          }

          if(openWidth === true && mediaOpen === true){
            mediaTl.reversed(!mediaTl.reversed())
            setOpenWidth(false)
            setMediaOpen(false)
          }

        }
      //
    //

    //Development Tab
      //Animations
        useEffect(() => {
          developmentTl
            .to(topLineServicesRef.current, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
            .to(mediaReadMoreRef.current, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
            .to(creativityTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
            .to(arrowCreativityRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
            .to(brandInnovationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
            .to(arrowBrandRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
            .to(mediaActivationTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
            .to(arrowMediaRef.current, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
            .to(developmentTabRef.current, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
            .to(arrowDevelopmentRef.current, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.8")
            .to(developmentReadMoreRef.current, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
            .to(developmentTabRef.current, { duration: 0.8, height: "78px", ease: "power2.inOut" }, "stage02")
            .to(developmentTextRef.current, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
            .reverse()
        }, [developmentTl])
      //
      //Logic
        const toggleDevelopmentTl = () => {

          if(openWidth === false  && developmentOpen === false){
            developmentTl.reversed(!developmentTl.reversed())
            setOpenWidth(true)
            setDevelopmentOpen(true)
          }

          if(openWidth === true && developmentOpen === true){
            developmentTl.reversed(!developmentTl.reversed())
            setOpenWidth(false)
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
              propTabRef={creativityTabRef}
              propRoleRef={creativityReadMoreRef}
              propServicesTextRef={creativityTextRef}
              propServicesArrowRef={arrowCreativityRef}
              //Handlers
              propOnClick={toggleCreativityTl}   
          />
          <ServicesTab propTitle="Brand Innovation"
              //Text
              propServicesText="Los consumidores de hoy no compran una marca, se han de sentir partícipes de ella. Ayudamos a las marcas a simplificar y aclarar quiénes son para transmitir mejor y llegar a conectar verdaderamente con su público objetivo."
              //Refs
              propTabRef={brandInnovationTabRef}
              propRoleRef={brandReadMoreRef}
              propServicesTextRef={brandTextRef}
              propServicesArrowRef={arrowBrandRef}
              //Handlers
              propOnClick={toggleBrandTl}     
          />
          <ServicesTab propTitle="Media Activation"
              //Text
              propServicesText="La abundancia de competencia en el mercado actual exige una dosis extra de creatividad y estrategia. Una estrategia ocurrente garantiza ubicaciones de medios más ingeniosas y, por tanto, mas efectivas."
              //Refs
              propTabRef={mediaActivationTabRef}
              propRoleRef={mediaReadMoreRef}
              propServicesTextRef={mediaTextRef}
              propServicesArrowRef={arrowMediaRef}
              //Handlers
              propOnClick={toggleMediaTl}       
          />
          <ServicesTab propTitle="Development"
              //Text
              propServicesText="Ofrecemos servicios de diseño y desarrollo web, creamos apps y gestionamos proyectos de desarrollo personalizados."
              //Refs
              propTabRef={developmentTabRef}
              propRoleRef={developmentReadMoreRef}
              propServicesTextRef={developmentTextRef}
              propServicesArrowRef={arrowDevelopmentRef}
              //Handlers
              propOnClick={toggleDevelopmentTl}
          />

        </div>

      </ListContainerStyledComp>

    </GlobalSection>

  )
}
export default ServicesSection
