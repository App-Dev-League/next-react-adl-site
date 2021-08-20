import React, { useEffect, useRef, useState } from "react"; 
import Image from "next/image"; 
 
import imgM from "../../assets/skills.png"; 
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png"; 
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useIsVisible } from 'react-is-visible'

const Progress = ({ className, ...rest }) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  const [progressBarsFilled, setProgressBarsFilled] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setProgressBarsFilled(true)
      }, 1200);
    }
  }, [isVisible])

  return ( 
    <> 
      <div className={className} {...rest}> 
        <div className="container"> 
          <div className="row"> 
          <div className="col-xs-12">
              <div
                className="section-title"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-6">
                  Our Experience
                </h2>
                <h3 className="font-size-7 text-default-color mb-12">
                  What the community has to say about us.
                </h3>
              </div>
            </div>
          </div> 
          <div className="row align-items-center"> 
            {/* Right */} 
            <div 
              className="col-xl-6 col-lg-6 col-md-5 col-xs-12" 
              data-aos="fade-right" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000} 
            > 
              <div className="content-image-group-3 mb-17 mb-lg-0 mr-xl-16"> 
                <div className="img-1"> 
                  <Image className="w-100" src={imgM} alt="" width={495} height={292} /> 
                  <div className="img-2"> 
                    <img className="w-100" src={imgDP} alt="" /> 
                  </div> 
                </div> 
              </div> 
            </div> 
            {/* Right */} 
            {/* Left */} 
            <div 
              className="col-lg-6 col-md-7 col-xs-12" 
              data-aos="fade-left" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000}
              ref={nodeRef} 
            >
              <div className="mb-10">
                <p className="d-flex justify-content-between mb-4">
                  Would recommend to a friend
                  <span>99%</span>
                </p>
                <ProgressBar now={progressBarsFilled ? 99 : 0}/>
              </div>
              <div className="mb-10">
                <p className="d-flex justify-content-between mb-4">
                  Enjoyed our events
                  <span>90%</span>
                </p>
                <ProgressBar now={progressBarsFilled ? 90 : 0}/>
              </div>
              <div className="mb-10">
                <p className="d-flex justify-content-between mb-4">
                  Knowledge gained from events
                  <span>95%</span>
                </p>
                <ProgressBar now={progressBarsFilled ? 95 : 0}/>
              </div>
              <div>
                <p className="d-flex justify-content-between mb-4">
                  Would attend another event
                  <span>93%</span>
                </p>
                <ProgressBar now={progressBarsFilled ? 93 : 0}/>
              </div>
            </div> 
            {/* Left End */}
          </div> 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default Progress; 
