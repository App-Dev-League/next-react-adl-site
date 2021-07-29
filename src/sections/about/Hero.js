import React from "react";
import { Card } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="pt-24 pt-md-26 pt-lg-30 pb-10 pb-lg-15 about-us-hero">
      <div className="container">
        {/* Section Padding */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center mb-11 mb-lg-24 dark-mode-texts"
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-5">About us</h2>
              <p className="font-size-7 mb-0">
                Largest Student-Run AppDev Non Profit
              </p>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
        <div className="row my-n5" id="mission">
          <div
            className="col-lg-4 my-5"
            data-aos="fade-right"
            data-aos-delay={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <Card
              className="bg-white shadow-2 border-right-0 border-bottom-0 border-left-0 h-100 gr-hover-2 transition-200"
              style={{borderTop: '10px solid var(--pink)'}}
            >
              <Card.Title className="my-7 px-7">What we stand for</Card.Title>
              <hr className="mx-12 my-2" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <p>
                  Founded in 2019, we are a group of students devoted to bringing modern web and app development opportunities to underrepresented students. We strive to increase diversity in the technology workforce and empower students, regardless of their socioeconomic status or racial background, to make a social impact through full-stack development. We hope the knowledge we impart through our program will make a difference starting on a small scale to eventually a global scale.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-lg-4 my-5"
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <Card
              className="bg-white shadow-2 border-right-0 border-bottom-0 border-left-0 h-100 gr-hover-2 transition-200"
              style={{borderTop: '10px solid var(--teal)'}}
            >
              <Card.Title className="my-7 px-7">Equal Playing Field</Card.Title>
              <hr className="mx-12 my-2" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <p>
                  Through our educational workshops and Appathon, we hope we can equalize the playing field between students of all backgrounds. We bring these events to low-income centers, housing authorities, and Title 1 underrepresented schools. Everyone deserves a chance at a high-quality Computer Science education, and we hope that our services and programs will provide that to underrepresented students.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-lg-4 my-5"
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-once="true" data-aos-duration={1000}
          >
            <Card
              className="bg-white shadow-2 border-right-0 border-bottom-0 border-left-0 h-100 gr-hover-2 transition-200"
              style={{borderTop: '10px solid var(--dodger-blue-1)'}}
            >
              <Card.Title className="my-7 px-7">Project-Based Learning</Card.Title>
              <hr className="mx-12 my-2" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <p>
                  Rather than explaining concepts in a theoretical or overly complex fashion like many organizations, App Dev League focuses on creating a project-based, practical set of workshops and events. By the end of any of our events, students will have actually learned the real-life application and will have built numerous projects.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
