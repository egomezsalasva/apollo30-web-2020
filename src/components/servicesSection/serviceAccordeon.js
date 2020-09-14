//SERVICES ACCORDEON
    //-States
    const [servicesWide, setServicesWide] = useState(false)
    const [creativityTabActive, setCreativityTabActive] = useState(false)
    const [brandTabActive, setBrandTabActive] = useState(false)
    const [mediaTabActive, setMediaTabActive] = useState(false)
    const [developmentTabActive, setDevelopmentTabActive] = useState(false)
//
//-Timelines
  const creativityTl = gsap.timeline({ paused: true })
  const brandTl = gsap.timeline({ paused: true })
  const mediaTl = gsap.timeline({ paused: true })
  const developmentTl = gsap.timeline({ paused: true })
//
//-Refs
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
//
//-Handlers
  const creativityClickHandler = () => {
    //Tabs Closed to Open Creativity Tab 
      if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
        creativityTl
                .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
                .to(creativityReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
                .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
                .to(arrowCreativityRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.2")
                .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
                .to(arrowBrandRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
                .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
                .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
                .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
                .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
                .to(creativityReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
                .to(creativityTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
                .to(creativityTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
                // .from(creativityTextRef, { duration: 0.8, y: 1, ease: "power2.inOut" }, "stage03")
                .play()
        setServicesWide(!servicesWide)
        setCreativityTabActive(!creativityTabActive)
        }
    //

    //Tabs Open to Switch to Creativity Tab
      if(servicesWide === true && creativityTabActive === false){
        if( brandTabActive === true || mediaTabActive === true ||  developmentTabActive === true){
          creativityTl
                .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
                .to(creativityReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
                .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
                .to(arrowCreativityRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.2")
                .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
                .to(arrowBrandRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
                .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
                .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
                .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
                .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
                .to(creativityReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
                .to(creativityTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
                .to(brandReadMoreRef, { duration: 0, display: "block", ease: "power2.inOut"} , "stage02")
                .to(brandTextRef, { duration: 0.8, opacity: 0, display: "none", ease: "power2.inOut"} , "stage02")
                .to(brandInnovationTabRef, { duration: 0.8, height: "62px", ease: "power2.inOut" }, "stage03")
                .to(creativityTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
                .play()
          setCreativityTabActive(!creativityTabActive)
        }
      }
    //
    //Tabs Open to Close All Tabs

  }
  const brandClickHandler = () => {
    //Tabs Closed to Open Brand Tab 
      if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
        brandTl
              .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
              .to(brandReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
              .to(arrowCreativityRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
              .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
              .to(arrowBrandRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.4")
              .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
              .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
              .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
              .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
              .to(brandReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(brandInnovationTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
              .to(brandTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              .play()
        setServicesWide(!servicesWide)
        setBrandTabActive(!brandTabActive)
      }
    //
    //Tabs Open to Switch to Creativity Tab
      if(servicesWide === true &&  brandTabActive === false){
        if( creativityTabActive === true || mediaTabActive === true ||  developmentTabActive === true){
          brandTl
              .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
              .to(brandReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
              .to(arrowCreativityRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
              .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
              .to(arrowBrandRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.4")
              .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
              .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
              .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
              .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
              .to(brandReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(brandInnovationTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
              .to(creativityReadMoreRef, { duration: 0, display: "block", ease: "power2.inOut"} , "stage02")
              .to(creativityTextRef, { duration: 0.8, opacity: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(creativityTabRef, { duration: 0.8, height: "62px", ease: "power2.inOut" }, "stage03")
              .to(brandTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              .play()
              setBrandTabActive(!brandTabActive)
        }
      }
    //
  }
  const mediaClickHandler = () => {
    if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
      mediaTl
              .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
              .to(mediaReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
              .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
              .to(arrowCreativityRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
              .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
              .to(arrowBrandRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
              .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
              .to(arrowMediaRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.6")
              .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
              .to(arrowDevelopmentRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.8")
              .to(mediaReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
              .to(mediaActivationTabRef, { duration: 0.8, height: "114px", ease: "power2.inOut" }, "stage02")
              .to(mediaTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              // .from(creativityTextRef, { duration: 0.8, y: 1, ease: "power2.inOut" }, "stage03")
              .play()
      setServicesWide(!servicesWide)
      setMediaTabActive(!mediaTabActive)
    } else if (servicesWide === true && creativityTabActive === false && brandTabActive === false && mediaTabActive === true && developmentTabActive === false) {
      mediaTl.reverse()
      setServicesWide(!servicesWide)
      setMediaTabActive(!mediaTabActive)
    }

  }
  const developmentClickHandler = () => {
    if(servicesWide === false && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === false){
      developmentTl
      .to(topLineServicesRef, { duration: 0.8, width: 700, ease: "power2.inOut" }, "start")
      .to(mediaReadMoreRef, { duration: 0.8, opacity: 0, ease: "power2.inOut" }, "start")
      .to(creativityTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.2")
      .to(arrowCreativityRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.2")
      .to(brandInnovationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.4")
      .to(arrowBrandRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.4")
      .to(mediaActivationTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.6")
      .to(arrowMediaRef, { duration: 0.8, rotate: 90, ease: "power2.inOut" }, "start+=0.6")
      .to(developmentTabRef, { duration: 0.8, width: 700, ease: "power2.inOut"}, "start+=0.8")
      .to(arrowDevelopmentRef, { duration: 1.6, rotate: 135, ease: "power2.inOut" }, "start+=0.8")
      .to(developmentReadMoreRef, { duration: 0, display: "none", ease: "power2.inOut"} , "stage02")
      .to(developmentTabRef, { duration: 0.8, height: "78px", ease: "power2.inOut" }, "stage02")
      .to(developmentTextRef, { duration: 0.8, opacity: 0.66, display:"inline-block", ease: "power2.inOut" }, "stage03")
              // .from(creativityTextRef, { duration: 0.8, y: 1, ease: "power2.inOut" }, "stage03")
              .play()
      setServicesWide(!servicesWide)
      setMediaTabActive(!mediaTabActive)
    } else if (servicesWide === true && creativityTabActive === false && brandTabActive === false && mediaTabActive === false && developmentTabActive === true) {
      developmentTl.reverse()
      setServicesWide(!servicesWide)
      setDevelopmentTabActive(!developmentTabActive)
    }

  }
//


//