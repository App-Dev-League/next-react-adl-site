import React from "react";

const SingleBrand = ({image, darkBg}) => {
  return (
    <>
      {/* Single Brand */}
      <div className={`single-brand-logo mx-5 my-6 ${darkBg ? 'bg-black' : ''}`}>
        <img src={image} alt="" data-aos="fade-in" data-aos-once="true" data-aos-duration={1000} />
      </div>
      {/* Single Brand */}
    </>
  );
}

const Sponsors = ({ className, ...rest }) => {
  return (
    <>
      {/* Company Section */}
      <div className={className} {...rest} id="sponsors">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5 mb-lg-10 text-center text-lg-center">
                <h2 className="font-size-10 mb-6">Sponsors</h2>
                <p>Coming soon!</p>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
        {/*
          <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
            {images.map((brand, index) => (
              <SingleBrand image={brand} key={index} darkBg={index === 1} />
            ))}
          </div>
        */}
        </div>
      </div>
      {/* End Company Section */}
    </>
  );
};

export default Sponsors;
