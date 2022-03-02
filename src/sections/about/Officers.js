import React from "react";

import TeamMemberCard from "../../components/TeamMemberCard";
import img1 from "../../assets/instructors/Matthew.jpg";
import img2 from "../../assets/instructors/joshua.png";
import img3 from "../../assets/instructors/Kunal.png";
import img5 from "../../assets/instructors/pavan.png";
import img7 from "../../assets/instructors/Pranav.png";
import img9 from "../../assets/outreach/KrishM.png";
import img10 from "../../assets/outreach/amit.png";
import img12 from "../../assets/instructors/harsh.png";
import img15 from "../../assets/instructors/reeva.png";
import img16 from "../../assets/instructors/kenneth.png";
import img17 from "../../assets/instructors/athreya.png";
import img20 from "../../assets/instructors/panth.png";
import img22 from "../../assets/instructors/nolan.png";
import img24 from "../../assets/outreach/raisa.png";
import img25 from "../../assets/outreach/claire-su.png";
import img26 from "../../assets/instructors/aarav.png";
import img27 from "../../assets/instructors/chiling.png";
import img28 from "../../assets/instructors/aarush.png";
import img29 from "../../assets/instructors/lester.png";
import img30 from "../../assets/outreach/rashu.png";
import img31 from "../../assets/outreach/srivibha.png";
import img32 from "../../assets/outreach/nyna.png";

const instructors = [
  {
    image: img1,
    name: "Matthew Lau",
    title: "Basic Web Dev Instructor",
  },
  {
    image: img2,
    name: "Joshua Zou",
    title: "Advanced Web Dev Instructor",
  },
  {
    image: img26,
    name: "Aarav Borthakur",
    title: "Advanced Web Dev Instructor",
  },
  {
    image: img28,
    name: "Aarush Vailaya",
    title: "Web Dev Mentor",
  },
  {
    image: img5,
    name: "Pavan Yeddanapudi",
    title: "Competitive Coding Instructor",
  },
  {
    image: img12,
    name: "Harsh Nagouda",
    title: "Advanced AI Instructor",
  },
  {
    image: img27,
    name: "Chiling Han",
    title: "Advanced AI Instructor",
  },
  {
    image: img15,
    name: "Reeva Khokar",
    title: "Intro to CS Mentor",
  },
  {
    image: img16,
    name: "Kenneth Choi",
    title: "Basic AI Mentor",
  },
  {
    image: img22,
    name: "Nolan Dagum",
    title: "Advanced AI Mentor",
  },
  {
    image: img17,
    name: "Athreya Daniel",
    title: "Basic AI Instructor",
  },
  {
    image: img29,
    name: "Lester Heredia-Gopar",
    title: "Basic Web Dev Instructor",
  },
];

const outreach = [
  {
    image: img9,
    name: "Krish Mendapara",
    title: "Grant Coordinator",
  },
  {
    image: img10,
    name: "Amit Karoshi",
    title: "Video Editor",
  },
  {
    image: img7,
    name: "Pranav Gunhal",
    title: "Event Coordinator",
  },
  {
    image: img20,
    name: "Panth Desai",
    title: "Sponsorship Coordinator",
  },
  {
    image: img25,
    name: "Claire Su",
    title: "Social Media Designer",
  },
  {
    image: img24,
    name: "Raisa Nirjhar",
    title: "Blog Writer",
  },
  {
    image: img30,
    name: "Rashu Sharda",
    title: "Onboarding Manager",
  },
  {
    image: img31,
    name: "Srivibha Madarapu",
    title: "Social Media Designer",
  },
  {
    image: img32,
    name: "Nyna Pinnamaraju",
    title: "Social Media Designer",
  }
];

const Officers = () => {
  return (
    <div className="pb-15 pb-md-19">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div
              className="text-center mb-9 mb-lg-15"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <h2 className="font-size-10 mb-0">Officer Team</h2>
            </div>
          </div>
        </div>
        {/* Teammember card */}
        <h3
          className="mb-8"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          Instructor Team
        </h3>
        <div
          className="row justify-content-center mb-6"
          data-aos="zoom-in"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          {instructors.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-xs-9"
              key={index}
            >
              <TeamMemberCard options={item} />
            </div>
          ))}
        </div>
        {/* Teammember card */}
        {/* Teammember card */}
        <h3
          className="mb-8"
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          Outreach Team
        </h3>
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          {outreach.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-xs-9"
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
