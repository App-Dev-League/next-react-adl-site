import React from "react";

import img1 from "../../assets/events_background.png";
import img2 from "../../assets/devnetic.png";
import { Card } from "react-bootstrap";

const TechHelp = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div
                className="section-title"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true" data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-12">
                  Technical help
                </h2>
              </div>
            </div>
          </div>
          <div className="row my-n5">
            <div
              className="col-lg-6 my-5"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <Card
                className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
              >
                <Card.Title className="my-7 px-7">Mentorship Program</Card.Title>
                <hr className="mx-12 my-2" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <p>
                    App Dev League’s mentorship program is a tutoring program where students can learn Computer Science 1-on-1.
                  </p>
                  <ul>
                    <li className="text-default-color"><strong>Flexible -</strong> Litany of topics and adjustable course agenda</li>
                    <li><strong>Interactive -</strong> Engaging lesson slides, kahoots, and fun quizzes</li>
                    <li><strong>Hands On -</strong> Numerous projects along the course</li>
                    <li><strong>Personalized Help -</strong> 1 v 1 sessions with personalized content</li>
                  </ul>
                  <img src={img1} alt="" className="d-block w-75 mx-auto mt-8 rounded-lg"/>
                </Card.Body>
              </Card>
            </div>
            <div
              className="col-lg-6 my-5"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <Card
                className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
              >
                <Card.Title className="my-7 px-7">Devnetic App</Card.Title>
                <hr className="mx-12 my-2" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <p>
                    App Dev League is launching an interactive teaching app for students to learn about Application Development and AI through a series of interactive multiple choice questions, videos, as well as a gamified leveling up system.
                  </p>
                  <img src={img2} alt="" className="d-block w-75 mx-auto rounded-lg"/>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechHelp;
