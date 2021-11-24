import React from "react"; 

const Apply = ({ className, ...rest }) => {
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
              <p className="font-size-5 font-weight-bold text-uppercase mb-1 text-gray" style={{letterSpacing: "3px"}}>Apply</p>
              <h2 className="font-size-10 mb-10">
                Join the <br /> <span className="text-primary">App Dev League</span>
              </h2>
              <p className="font-size-7 heading-default-color">
              <strong>Passionate about what we do? </strong>Want to join an international team of leaders, creators, and app dev enthusiasts? Learn how to apply in the application packet.
              </p>
              <p className="font-size-7 heading-default-color">
              Knowledge of app dev isn’t required for every position, and all are welcome to apply. Applications are on a rolling basis, so apply as soon as you can!
              </p>
            </div> 
            {/* Right */} 
            {/* Left */} 
            <div 
              className="col-lg-6 col-md-7 col-xs-12 mt-8 lg:mt-0" 
              data-aos="fade-left" 
              data-aos-delay={500} 
              data-aos-once="true" data-aos-duration={1000}
            >
              <div>
                <div className="d-flex align-items-center mb-8">
                  <div className="circle-60 bg-bluewood mr-6 mr-sm-8 font-size-8 text-white">
                    <i className="fa fa-copy"></i>
                  </div>
                  <p className="font-size-7 heading-default-color mb-0">Read the <a href="https://docs.google.com/document/u/2/d/1ZqExx6XgUdbDkFHi502d_eY3gW3uHf5oojaJoBAp4Rs/edit" target="__blank" rel="noopener noreferrer">application packet</a></p>
                </div>
                <div className="d-flex align-items-center mb-8">
                  <div className="circle-60 bg-bluewood mr-6 mr-sm-8 font-size-8 text-white">
                    <i className="fa fa-marker"></i>
                  </div>
                  <p className="font-size-7 heading-default-color mb-0">Fill out the <a href="https://tiny.cc/teamapplicantADL" target="__blank" rel="noopener noreferrer">leadership application</a></p>
                </div>
                <div className="d-flex align-items-center mb-8">
                  <div className="circle-60 bg-bluewood mr-6 mr-sm-8 font-size-8 text-white">
                    <i className="fa fa-envelope-open-text"></i>
                  </div>
                  <p className="font-size-7 heading-default-color mb-0">Email contact@appdevleague.org stating you have submitted an application</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="circle-60 bg-green mr-6 mr-sm-8 font-size-8 text-white">
                    <i className="fa fa-check"></i>
                  </div>
                  <p className="font-size-7 heading-default-color mb-0">We'll get back to you as soon as possible</p>
                </div>
              </div>
            </div> 
            {/* Left End */}
          </div> 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default Apply; 
