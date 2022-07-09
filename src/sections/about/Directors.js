import React from "react";
import Image from "next/image"

import memberImage3 from "../../assets/execs/kabir.png";
import memberImage6 from "../../assets/directors/sarthak.png";
import memberImage8 from "../../assets/instructors/joshua.png";
import memberImage9 from "../../assets/directors/desiree.png";
import memberImage10 from "../../assets/directors/Zara.png";
import memberImage11 from "../../assets/execs/ishir.png";

const DirectorCard = ({ image, name, position, ...rest }) => {
  return (
    <>
      {/* Single Team */}
      <div className="text-center mb-10 mb-lg-15">
        <div className="mb-8 rounded-10">
          <Image className="w-50 w-md-75" src={image} alt="" width={262} height={262} />
        </div>
        <div className="content">
          <h4 className="font-size-7 mb-1">{name}</h4>
          <p className="font-size-5 font-weight-normal mb-0">{position}</p>
        </div>
      </div>
      {/* Single Team */}
    </>
  );
};
const Directors = ({ className, ...rest }) => {
  const DirectorsData = [
    {
      image: memberImage10,
      name: "Zara Siddiqui",
      position: "Director of Onboarding",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage3,
      name: "Kabir Ramzan",
      position: "Director of Curriculum",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage6,
      name: "Sarthak Dayal",
      position: "Director of Initiatives",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    /*{
      image: memberImage7,
      name: "Luis Varona",
      position: "Director of Expansion",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },*/
    {
      image: memberImage8,
      name: "Joshua Zou",
      position: "Director of Development",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage9,
      name: "Desiree Luo",
      position: "Director of Marketing",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: memberImage11,
      name: "Ishir Lakhani",
      position: "Director of Partnerships",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
  ];
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* section title */}
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-once="true" data-aos-duration={1000}
        >
          <div className="col-12">
            <div className="text-center mb-12 mb-lg-19">
              <h2 className="font-size-10 mb-8 letter-spacing-n83">
                Directors
              </h2>
            </div>
          </div>
        </div>
        {/* section title */}
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-once="true" data-aos-duration={1000}
        >
          {DirectorsData.map(({ image, name, position }, index) => {
            return (
              <div
                className="col-lg-4 col-sm-6 col-xs-8"
                key={index}
              >
                <DirectorCard image={image} name={name} position={position} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Directors;

// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={500}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-2.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Raymond Baker</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Content writer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={800}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-3.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Amy sanderson</h4>
//       <p className="font-size-5 font-weight-normal mb-0">UX Designer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={300}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-4.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Ryan kingsley</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Software engineer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={500}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-5.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Jane Austen</h4>
//       <p className="font-size-5 font-weight-normal mb-0">HR &amp; Support</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={800}
//     data-aos-once="true" data-aos-duration={1000}
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-6.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Trevor Flemming</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Founder &amp; CEO</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
