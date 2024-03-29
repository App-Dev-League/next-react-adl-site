import React from "react";

import TeamMemberCard from "../../components/TeamMemberCard";
import img1 from "../../assets/chapters/ashwika.png";
import img2 from "../../assets/chapters/nadia.png";
import img3 from "../../assets/chapters/oguntunde.png";
import img4 from "../../assets/chapters/angela.png";
import img5 from "../../assets/chapters/vaishnavi.png";
import img6 from "../../assets/chapters/sahana.png";
import img7 from "../../assets/directors/sarthak.png";
import img8 from "../../assets/chapters/huzaifa.png";
import img9 from "../../assets/chapters/kabith.png";

const members = [
  {
    image: img1,
    name: "Ashwika Sharma",
    title: "Washington Chapter Leader",
  },
  {
    image: img2,
    name: "Nadia Michael",
    title: "Ontario Chapter Leader",
  },
  {
    image: img3,
    name: "Oguntunde Caleb",
    title: "Nigeria Chapter Leader",
  },
  {
    image: img4,
    name: "Angela Yang",
    title: "Los Angeles Chapter Leader",
  },
  {
    image: img5,
    name: "Vaishnavi Kale",
    title: "Pune Chapter Leader",
  },
  {
    image: img6,
    name: "Sahana Sundar",
    title: "New York Chapter Leader",
  },
  {
    image: img7,
    name: "Sarthak Dayal",
    title: "Texas Chapter Leader",
  },
  {
    image: img9,
    name: "Kabith Kuber",
    title: "Brampton Chapter Leader",
  },
];

const Chapters = () => {
  return (
    <div className="pb-15 pb-md-19" id="chapters">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <h2 className="font-size-9 mb-0">
                International Chapter Leaders
              </h2>
              <p className="mt-8 mb-10">
                <strong>Passionate about what we do? </strong>Want to join an
                international team of leaders, creators, and app dev
                enthusiasts?{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSczBe_2sbRhR5QK0Ek-KrZa7JCNlvVBQZHlEHBNbLwqRcl3ug/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here.
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Teammember card */}
        <div
          className="row justify-content-center mb-6"
          data-aos="zoom-in"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          {members.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-xs-9" key={index}>
              <TeamMemberCard options={item} />
            </div>
          ))}
          <div className="col-lg-4 col-md-6 col-xs-9">
            <div className="bg-white border rounded-10 mb-9 px-8 py-14">
              <div className="d-flex align-items-center">
                <div className="mb-0">
                  <h4 className="font-size-7 line-height-reset text-dark-cloud mb-0 text-center">
                  Announcing our other chapters soon!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
