import React from "react"; 
 
import imgM from "../../assets/star-program/curr3.png"; 
import Image from "next/image"
import { Dropdown } from "react-bootstrap";

const PreviewOfContent3 = ({ className, ...rest }) => {

  return ( 
    <> 
      <div className={className} {...rest}> 
        <div className="container"> 
          <div className="row"> 
            {/* Right */} 
            <div 
              className="col-lg-7 col-xs-12 d-flex flex-column justify-content-center pr-lg-10 pb-10 pb-lg-0" 
              data-aos="fade-right" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000} 
            > 
              <div className="w-100 h-100 position-relative" style={{maxHeight: "360px", paddingTop: "60%"}}>
                <Image src={imgM} alt="" layout="fill" className="next-image-cover rounded-lg" />
              </div> 
            </div> 
            {/* Right */} 
            {/* Left */} 
            <div 
              className="col-lg-5 col-xs-12 pl-lg-12" 
              data-aos="fade-left" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000}
            >
              <span className="bg-dodger-blue-2-op1 circle-60 font-size-7 mb-7">
                <i className="fa fa-laptop text-dodger-blue-2"></i>
              </span>
              <h2 className="font-size-9">
                Artificial Intelligence
              </h2>
              <h3 className="font-size-7 mb-7 mb-lg-12 text-gray">
                8-week curriculum
              </h3>
              <p className="mb-8">
                In this day and age, CS is applied everywhere. Joining the STAR program will allow your Title 1 school or low-income center to develop your reputation as a CS school with the improved tech infrastructure (laptops, internet, etc..) and valuable content that we provide. 
              </p>
              <Dropdown>
                <Dropdown.Toggle variant="" className="rounded-lg btn-sm btn-dodger-blue-2 px-8">
                  View Chapter 1
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="https://docs.google.com/presentation/d/12-pga5KFPTasfs4ak5nw5YF8KC9xoMELivYk4OqZP2U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Slides</Dropdown.Item>
                  <Dropdown.Item href="https://docs.google.com/presentation/d/1j-pWpUuGu7YxMSdcNIsksiQ0MfotIdwPcrJUjSGiCo0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Practice</Dropdown.Item>
                  <Dropdown.Item href="https://docs.google.com/document/d/1QcQ9uB1PPza7d1XkSqIgexgrH5KYRuhNLlEFGtOYydk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Review</Dropdown.Item>
                  <Dropdown.Item href="https://create.kahoot.it/share/ai-chapter-1-intro-to-python/2708a530-7753-4d7a-84aa-d02ae563549f" target="_blank" rel="noopener noreferrer">Kahoot</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> 
            {/* Left End */}
          </div> 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default PreviewOfContent3; 
