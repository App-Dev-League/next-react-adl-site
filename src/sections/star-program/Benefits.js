import React from "react"; 
 
import imgM from "../../assets/star-program/benefits.jpg"; 
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
                    <strong className="font-size-8 mb-3 d-block">Free Content</strong>
                    <p>No need to spend hours creating content to teach your CS students. With our experience of organizing over 15 CS events and teaching thousands of students, you can trust that our content is reliable and accurate.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Community</strong>
                    <p>By joining the STAR program, your school will be able to access not only all the free benefits we provide but also our community of students, allowing you to expand your school presence.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-event large mr-7 text-white">
                    <i className="fa fa-check" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">CS reputation</strong>
                    <p>In this day and age, CS is applied everywhere. Joining the STAR program will allow your Title 1 school or low-income center to develop your reputation as a CS school with the improved tech infrastructure (laptops, internet, etc..) and valuable content that we provide.</p>
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
