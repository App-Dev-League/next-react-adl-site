import React from "react"; 
 
import imgM from "../../assets/star-program/benefits.jpg"; 
import Image from "next/image"
import { Dropdown } from "react-bootstrap";

const PreviewOfContent = ({ className, ...rest }) => {

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
              <div className="w-100">
                <Image src={imgM} alt="" layout="fill" className="next-image-cover rounded-lg" />
              </div> 
            </div> 
            {/* Right */} 
            {/* Left */} 
            <div 
              className="col-lg-6 offset-lg-1 col-xs-12" 
              data-aos="fade-left" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000}
            >
              <span className="bg-dodger-blue-2-op1 circle-60 font-size-7 mb-7 mx-auto mx-md-0">
                <i className="fa fa-laptop text-dodger-blue-2"></i>
              </span>
              <h2 className="font-size-9 mb-12">
                Website Development <br/>
                Chapter 1 Curriculum
              </h2>
              <p className="mb-8">
                In this day and age, CS is applied everywhere. Joining the STAR program will allow your Title 1 school or low-income center to develop your reputation as a CS school with the improved tech infrastructure (laptops, internet, etc..) and valuable content that we provide. 
              </p>
              <Dropdown>
                <Dropdown.Toggle variant="success" className="rounded-lg btn-sm px-8">
                  View Chapter 1
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Slides</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Content Review</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kahoot</Dropdown.Item>
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
 
export default PreviewOfContent; 
