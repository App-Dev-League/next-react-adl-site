import React from "react";

import TeamMemberCard from "../../components/TeamMemberCard";
import img3 from "../../assets/directors/kamil.png";
import img5 from "../../assets/outreach/jack.png";
import img7 from "../../assets/instructors/Pranav.png";
import img10 from "../../assets/outreach/amit.png";
import img12 from "../../assets/instructors/harsh.png";
import img15 from "../../assets/instructors/vishnu.png";
import img16 from "../../assets/instructors/kenneth.png";
import img17 from "../../assets/instructors/athreya.png";
import img20 from "../../assets/outreach/suden.png";
import img22 from "../../assets/instructors/nolan.png";
import img24 from "../../assets/outreach/raisa.png";
import img25 from "../../assets/outreach/Isha.png";
import img26 from "../../assets/instructors/aarav.png";
import img27 from "../../assets/instructors/chiling.png";
import img28 from "../../assets/instructors/aarush.png";
import img29 from "../../assets/instructors/lester.png";
import img30 from "../../assets/outreach/rashu.png";
import img32 from "../../assets/outreach/nyna.png";
import img33 from "../../assets/directors/aniketh.png";
import img35 from "../../assets/directors/desiree.jpg";
import img36 from "../../assets/directors/ishnu.png";
import img37 from "../../assets/directors/huzaifa.png";

const instructors = [
  
  {
    image: img29,
    name: "Lester Heredia-Gopar",
    title: "Basic Web Dev Instructor",
  },
  {
    image: img28,
    name: "Aarush Vailaya",
    title: "Web Dev Mentor",
  },
  {
    image: img7,
    name: "Pranav Gunhal",
    title: "Web Dev Instructor",
  },
  {
    image: img37,
    name: "Huzaifa Azhar",
    title: "Web Dev Instructor",
  },
  // {
  //   image: img27,
  //   name: "Chiling Han",
  //   title: "Advanced AI Instructor",
  // },
  {
    image: img17,
    name: "Athreya Daniel",
    title: "Basic AI Instructor",
  },
  {
    image: img22,
    name: "Nolan Dagum",
    title: "Advanced AI Mentor",
  },
  {
    image: img12,
    name: "Harsh Nagouda",
    title: "Advanced AI Instructor",
  },
  {
    image: img15,
    name: "Vishnu Mangipudi",
    title: "AI Instructor",
  },
  {
    image: img36,
    name: "Ishnu",
    title: "AI Instructor",
  },
  {
    image: img16,
    name: "Kenneth Choi",
    title: "CAMP Lead",
  },
  {
    image: img26,
    name: "Aarav Borthakur",
    title: "Devnetic Lead",
  },
  {
    image: img3,
    name: "Kamil Pawlak",
    title: "Website Dev",
  },
];

const outreach = [
  {
    image: img33,
    name: "Aniketh Tummala",
    title: "Mentorship Manager",
  },
  {
    image: img32,
    name: "Nyna Pinnamaraju",
    title: "Schools Coordinator",
  },
  {
    image: img30,
    name: "Rashu Sharda",
    title: "Chapter Program Manager",
  },
  {
    image: img5,
    name: "Jack Guarnery",
    title: "Sponsorship Coordinator",
  },
  {
    image: img20,
    name: "Suden Prashar",
    title: "Workshop Coordinator",
  },
  {
    image: img25,
    name: "Isha Kotalwar",
    title: "Partnership Manager",
  },
  // {
  //   image: img35,
  //   name: "Desiree Luo",
  //   title: "Social Media Designer",
  // },
  {
    image: img10,
    name: "Amit Karoshi",
    title: "Video Editor",
  },
  {
    image: img24,
    name: "Raisa Nirjhar",
    title: "Blog Writer",
  },
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
