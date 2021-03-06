import React from "react"; 
 
import imgM from "../../assets/krish.jpg"; 
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";

import Image from "next/image"

const OurCEO = ({ className, ...rest }) => {
  return ( 
    <> 
      <div className={className} {...rest} id="team"> 
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
                  Our Founder/CEO
                </h2>
                <h3 className="font-size-7 text-default-color mb-12">
                  Krish Maniar
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
                  <Image className="w-100 rounded-lg" src={imgM} alt="" width={475} height={633} /> 
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
            >
              <p className="font-size-7 mb-0 pr-xs-15 pr-md-0 pl-xl-2 mt-7 mt-lg-0 pr-lg-18">
                Krish Maniar is a junior at the Harker school. As the Founder and CEO of App Dev League, he hopes to impart free and readily available education to students who do not have access to many computer science resources and opportunities. He leads a national team of 30 students to organize frequent events and develop free resources for children and schools. Recognizing the lack of beginner-friendly content online, Krish believes App Dev League is one of the first steps towards a bright future for underprivileged children.
              </p>
            </div> 
            {/* Left End */}
          </div> 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default OurCEO; 
