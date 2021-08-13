import React, { useEffect, useRef, useState } from "react"; 
 
import imgM from "../../assets/mentorship/benefits.jpg"; 
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png"; 
import Image from "next/image"

const Benefits = ({ className, ...rest }) => {

  return ( 
    <> 
      <div className={className} {...rest}> 
        <div className="container"> 
          <div className="row"> 
            {/* Right */} 
            <div 
              className="col-lg-5 col-xs-12 d-flex flex-column pr-lg-10" 
              data-aos="fade-right" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000} 
            > 
              <h2 className="font-size-10 mb-12">
                Program Benefits
              </h2>
              <p className="mb-6">
              EARN provides economics students with opportunities to real-world experiences as well as access to a valuable community.
              </p>
              <p className="mb-12">
              EARN provides economics students with opportunities to real-world experiences as well as access to a valuable community.
              </p>
              <div className="content-image-group-3 mt-auto mb-17 mb-lg-16"> 
                <div className="img-1"> 
                  <div className="w-100" style={{height: "19rem"}}>
                    <Image src={imgM} alt="" layout="fill" className="next-image-cover rounded-lg" />
                  </div> 
                  <div className="img-2"> 
                    <img className="w-100" src={imgDP} alt="" /> 
                  </div> 
                </div> 
              </div> 
            </div> 
            {/* Right */} 
            {/* Left */} 
            <div 
              className="col-lg-7 col-xs-12" 
              data-aos="fade-left" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000}
            >
              <ul className="p-0 m-0 list-disc">
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Efficient</strong>
                    <p>Think of EARN like a common application for economics internships. Instead of cold emailing hundreds of professors and companies, EARN applicants apply to dozens of internships at once through a single application.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Real-world experience</strong>
                    <p>EARN is one of the only programs that offer high schoolers the opportunity to gain real-world work experience, whether that’s assisting a professor with research at a world-class university or working as an intern at a top company.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Community</strong>
                    <p>By joining the EARN program, you’ll become part of a curated community of highly motivated economics students. EARN members will have the opportunity to expand their network by connecting with fellow economics enthusiasts, researchers, and interns.hink of EARN like a common application for economics internships. Instead of cold emailing hundreds of professors and companies, EARN applicants apply to dozens of internships at once through a single application.</p>
                  </div>
                </li>
              </ul>
            </div> 
            {/* Left End */}
          </div> 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default Benefits; 
