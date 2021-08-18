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
                    <strong className="font-size-8 mb-3 d-block">Personalized Guidance</strong>
                    <p>This program will allow you to focus on your skills, not others. Unlike large-sized classes, you will receive personalized attention to the areas you need to approve on with no time being wasted.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Relatable Mentors</strong>
                    <p>The mentors are fellow high schoolers (qualified) and can more easily resolve any difficulties you might come across. They will be able to relate better, as they have gone through a similar experience as you.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Free Service</strong>
                    <p>And last but not least, this is a free program. Students will not provide anything in return except their willingness to attend all sessions and participate.</p>
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
