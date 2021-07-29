import React from "react";

import TeamMemberCard from "../../components/TeamMemberCard";
import img1 from "../../assets/instructors/Matthew.jpg";
import img2 from "../../assets/instructors/arcade.png";
import img3 from "../../assets/instructors/Kunal.png";
import img4 from "../../assets/instructors/vishnu.png";
import img5 from "../../assets/instructors/pavan.png";
import img6 from "../../assets/outreach/desiree.png";
import img7 from "../../assets/outreach/Pranav.png";
import img8 from "../../assets/outreach/Zara.png";
import img9 from "../../assets/outreach/KrishM.png";
import img10 from "../../assets/outreach/Amit.png";
import img11 from "../../assets/outreach/Isha.png";


const instructors = [
  {
    image: img1,
    name: "Matthew Lau",
    title: "Basic Web Dev Instructor",
  },
  {
    image: img2,
    name: "Arcade Wise",
    title: "Advanced Web Dev Instructor",
  },
  {
    image: img3,
    name: "Kunal Jain",
    title: "Mobile App Dev Instructor",
  },
  {
    image: img4,
    name: "Vishnu Mangipudi",
    title: "Deep Learning Instructor",
  },
  {
    image: img5,
    name: "Pavan Yeddanapudi",
    title: "Competitive Coding Instructor",
  }
];

const outreach = [
  {
    image: img6,
    name: "Desiree Luo",
    title: "Social Media Coordinator",
  },
  {
    image: img7,
    name: "Pranav Gunhal",
    title: "Contact List Coordinator",
  },
  {
    image: img8,
    name: "Zara Siddiqui",
    title: "Sponsorship/Grant Coordinator",
  },
  {
    image: img9,
    name: "Krish Mendapara",
    title: "Sponsorship Scouter",
  },
  {
    image: img10,
    name: "Amit Karoshi",
    title: "Video Editor",
  },
  {
    image: img11,
    name: "Isha Kotalwar",
    title: "Outreach Activity Coordinator",
  }
];

const Officers = () => {
  return (
    <div className="pb-15 pb-md-19 pb-lg-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div
              className="text-center mb-9 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 mb-0">Officer Team</h2>
            </div>
          </div>
        </div>
        {/* Teammember card */}
        <h3 className="mb-8">Instructor Team</h3>
        <div className="row justify-content-center mb-6">
          {instructors.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-xs-9"
              data-aos="zoom-in"
              data-aos-duration={800}
              key={index}
            >
              <TeamMemberCard options={item} />
            </div>
          ))}
        </div>
        {/* Teammember card */}
        {/* Teammember card */}
        <h3 className="mb-8">Outreach Team</h3>
        <div className="row justify-content-center">
          {outreach.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-xs-9"
              data-aos="zoom-in"
              data-aos-duration={800}
              key={index}
            >
              <TeamMemberCard options={item} />
            </div>
          ))}
        </div>
        {/* Teammember card */}
      </div>
    </div>
  );
};

export default Officers;
