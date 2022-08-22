import React from "react";
import Image from "next/image";
import img1 from "../../assets/events_background.png";
import img2 from "../../assets/devnetic.webp";
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
                data-aos-once="true"
                data-aos-duration={1000}
              >
                <h2 className="font-size-11 mb-12">Technical help</h2>
              </div>
            </div>
          </div>
          <div className="row my-n5">
            <div
              className="col-lg-6 my-5"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
              data-aos-duration={1000}
            >
              <Card className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200">
                <Card.Title className="my-7 px-7">
                  Mentorship Program
                </Card.Title>
                <hr className="mx-12 my-2" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <p>
                    App Dev League’s mentorship program is a tutoring program
                    where students can learn Computer Science 1-on-1.
                  </p>
                  <ul>
                    <li className="text-default-color">
                      <strong>Flexible -</strong> Litany of topics and
                      adjustable course agenda
                    </li>
                    <li>
                      <strong>Interactive -</strong> Engaging lesson slides,
                      kahoots, and fun quizzes
                    </li>
                    <li>
                      <strong>Hands On -</strong> Numerous projects along the
                      course
                    </li>
                    <li>
                      <strong>Personalized Help -</strong> 1 v 1 sessions with
                      personalized content
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center mt-8">
                    <Image
                      src={img1}
                      alt=""
                      className="d-block mx-auto rounded-lg"
                      width={375}
                      height={248}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div
              className="col-lg-6 my-5"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true"
              data-aos-duration={1000}
            >
              <Card className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200">
                <Card.Title className="my-7 px-7">Devnetic App</Card.Title>
                <hr className="mx-12 my-2" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <p>
                    Devnetic is an interactive teaching app developed by App Dev
                    League for students looking to learn about Application
                    Development and AI in the form of multiple choice questions,
                    an integrated code editor, project-oriented curriculum, and
                    a gamified leveling up system.
                  </p>
                  <a
                    href="https://devnetic.appdevleague.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dodger-blue-2 btn-3 rounded-5 mr-6 mb-6 align-self-start"
                  >
                    Learn More
                  </a>
                  <div className="d-flex justify-content-center">
                    <Image
                      src={img2}
                      alt=""
                      className="d-block mx-auto rounded-lg"
                      width={314}
                      height={248}
                    />
                  </div>
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
