//IMPORTS
//-Modules
import React, { useRef, useState } from 'react'
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
const LaunchesSection = () => {



  return (
    <GlobalSection 
        propSectionID="services" 
        propSectionTitle="Services" 
        propSectionDescription="We believe that in our current era, there’s a saturation of stimuli. This requires differentiation through tailored content."
    >
        
      <ListContainerStyledComp className="listContainer">

        <div className="apolloList servicesList">

          <div className="divisionLine topLine" style={{marginTop: "0px"}} /*ref={el => topLineServicesRef = el}*/></div>

          <ServicesTab propTitle="Creativity"
              //Text
              propServicesText="Creamos contenido (publicitario, cinematográfico, social, digital y móvil) que trasciende los medios tradicionales y difumina las líneas entre productos, experiencias, contenido y marketing."
              //Refs
              // propTabRef={el => creativityTabRef = el}
              // propRoleRef={el => creativityReadMoreRef = el}
              // propServicesTextRef={el => creativityTextRef = el}
              // propServicesArrowRef={el => arrowCreativityRef = el}
              //Handlers
              propOnClick={null}   
          />
          <ServicesTab propTitle="Brand Innovation"
              //Text
              propServicesText="Los consumidores de hoy no compran una marca, se han de sentir partícipes de ella. Ayudamos a las marcas a simplificar y aclarar quiénes son para transmitir mejor y llegar a conectar verdaderamente con su público objetivo."
              //Refs
              // propTabRef={el => brandInnovationTabRef = el}
              // propRoleRef={el => brandReadMoreRef = el}
              // propServicesTextRef={el => brandTextRef = el}
              // propServicesArrowRef={el => arrowBrandRef = el}
              //Handlers
              // propOnClick={brandClickHandler}     
          />
          <ServicesTab propTitle="Media Activation"
              //Text
              propServicesText="La abundancia de competencia en el mercado actual exige una dosis extra de creatividad y estrategia. Una estrategia ocurrente garantiza ubicaciones de medios más ingeniosas y, por tanto, mas efectivas."
              //Refs
              // propTabRef={el => mediaActivationTabRef = el}
              // propRoleRef={el => mediaReadMoreRef = el}
              // propServicesTextRef={el => mediaTextRef = el}
              // propServicesArrowRef={el => arrowMediaRef = el}
              //Handlers
              // propOnClick={() => mediaClickHandler()}       
          />
          <ServicesTab propTitle="Development"
              //Text
              propServicesText="Ofrecemos servicios de diseño y desarrollo web, creamos apps y gestionamos proyectos de desarrollo personalizados."
              //Refs
              // propTabRef={el => developmentTabRef = el}
              // propRoleRef={el => developmentReadMoreRef = el}
              // propServicesTextRef={el => developmentTextRef = el}
              // propServicesArrowRef={el => arrowDevelopmentRef = el}
              //Handlers
              // propOnClick={() => developmentClickHandler()}
          />

        </div>

      </ListContainerStyledComp>

    </GlobalSection>

  )
}
export default LaunchesSection
