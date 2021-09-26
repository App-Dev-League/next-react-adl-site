import React from "react";
import Image from "next/image"
import img1 from "../../assets/camp-program/site1.jpg"
import img2 from "../../assets/camp-program/site2.jpg"

const sitesData = [
  {
    title: "ADL Appathon 2021",
    image: img1,
  },
  {
    title: "ADL Website",
    image: img2,
  }
];

const Examples = () => {
  return (
    <div className="bg-adl-1 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-24">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="mb-12"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Example Sites
              </h2>
            </div>
          </div>
        </div>
        <div
          className="row my-n5 justify-content-center"
          id="mission"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={500}
        >
          {sitesData.map((site, index) => {
            return (
              <div
                className="col-lg-6 my-5"
                key={index}
              >
                <Image src={site.image} width={600} height={335} className="next-image-cover rounded-lg" />
                <p className="mt-4 heading-default-color font-size-7 font-weight-bold">{site.title}</p>
              </div>
            )
          })}
          <div className="col-12">
            <p className="text-center mt-10 font-size-7">More coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
