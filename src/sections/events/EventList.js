import React from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";

import eventImage1 from "../../assets/events/hero-bg.jpg";
import eventImage2 from "../../assets/events/introductory-application-development-course-june-2021.jpeg";
import eventImage3 from "../../assets/events/game-development-course-june-2021.jpeg";
import eventImage4 from "../../assets/events/advanced-multi-disciplinary-cs-course-june-2021.png";
import eventImage5 from "../../assets/events/CodeArt_Fest_2021_-_Hopin_Banner.jpg";
import eventImage6 from "../../assets/events/december-camp-dec-2020.jpeg";
import eventImage7 from "../../assets/events/learn-to-code-workshop-nov-2020.jpg";
import eventImage8 from "../../assets/events/app-dev-webinar-sep-2020.png";
import eventImage9 from "../../assets/events/ai-webinar-sep-2020.jpg";
import eventImage10 from "../../assets/events/intro-to-programming-course-jul-2020.jpg";
import eventImage11 from "../../assets/events/basic-web-dev-course-jul-2020.jpg";
import eventImage12 from "../../assets/events/basic-app-dev-course-jul-2020.jpg";

const upcomingEvents = [];

const pastEvents = [
  {
    name: "ADL Appathon 2022",
    image: eventImage1,
    date: "August 2022",
    description:
      "The Appathon is a unique opportunity for students of all backgrounds to learn how to use AppDev and AI for making a societal impact in their communities. As part of this event, students will get to hear from world-renowned speakers like the Director of USACO and Damian Musk, as well as compete in a competition with prizes totaling $20k.",
    learnMoreLink: {
      href: "https://appathon.appdevleague.org/",
      isExternal: true,
    },
  },
  {
    name: "StartOnAI",
    image: eventImage9,
    date: "November 2021",
    description:
      "Are you a student who wants to learn the basics of Artificial Intelligence? Well then this event is for you! App Dev League will host this 1-day workshop in partnership with StartOnAI on November 6th.",
    learnMoreLink: {
      href: "/events/startonai-november-2021",
    },
    signUpLink: {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSd03Dzuwlaojjk3HTlS7qPOcN8UT9jq0k0YZFoprFMyur-9zw/viewform",
    },
  },
  {
    name: "App Developer Workshop",
    image: eventImage2,
    date: "October 2021",
    description:
      "Are you interested in learning how to make mobile and web applications? Look no further to our 2-day interactive workshop with YapaKids. Students will learn how to develop mobile apps by using MIT App Inventor and create websites  using HTML, CSS, and Javascript. No prior programming experience is required.",
    learnMoreLink: {
      href: "/events/yapa-kids-october-2021",
    },
  },
  {
    name: "ADL Appathon 2021",
    image: eventImage1,
    date: "August 2021",
    description:
      "The Appathon is a unique opportunity for students of all backgrounds to learn how to use AppDev and AI for making a societal impact in their communities. As part of this event, students will get to hear from world-renowned speakers like the Director of USACO and Damian Musk, as well as compete in a competition with prizes totaling $20k.",
    learnMoreLink: {
      href: "https://appathon.appdevleague.org/",
      isExternal: true,
    },
  },
  {
    name: "App Development Course",
    image: eventImage2,
    date: "June 2021",
    description:
      "Interested in learning how to make apps? Well then this 5-week long course is for you. Students will learn how to construct websites using HTML/CSS/JS, as well as build mobile apps with MIT app inventor. No prior programming experience required.",
    learnMoreLink: {
      href: "/events/intro-ad-june-2021",
    },
  },
  {
    name: "Game Development Course",
    image: eventImage3,
    date: "June 2021",
    description:
      "Do you enjoy playing games? Channel your passion for gaming in an educational manner by attending this 5-week long course. Students will learn how to create interactive video games with Pygame and Unity. Limited programming experience recommended.",
    learnMoreLink: {
      href: "/events/game-dev-june-2021",
    },
  },
  {
    name: "Advanced CS Course",
    image: eventImage4,
    date: "June 2021",
    description:
      "Do you already have a strong CS foundation? In this course, we will explore advanced topics in Website Development, Machine Learning, and Competitive Programming. Highly recommended for students with 1-3 years or programming experience.",
    learnMoreLink: {
      href: "/events/adv-md-cs-june-2021",
    },
  },
  {
    name: "Code/Art Speaker Event",
    image: eventImage5,
    date: "March 2021",
    description:
      "App Dev League will be giving a workshop at the Code/Art Festival on application development with MIT app inventor!",
    learnMoreLink: {
      href: "/events/code-art-speaker-mar-2021",
    },
  },
  {
    name: "CS Winter Bootcamp",
    image: eventImage6,
    date: "December 2020",
    description:
      "This CS Winter Boot Camp is geared towards students with some programming experience in grades 5-12. We will cover topics ranging from web dev to artificial intelligence in an interactive and hands-on manner, and you will have the necessary skills to do the impossible!",
    learnMoreLink: {
      href: "/events/december-camp-dec-2020",
    },
  },
  {
    name: "Learn to Code Webinar",
    image: eventImage7,
    date: "November 2020",
    description:
      "App Dev League will be giving a workshop at the Code/Art Festival on application development with MIT app inventor!",
    learnMoreLink: {
      href: "/events/learn-to-code-workshop-nov-2020",
    },
  },
  {
    name: "App Dev Webinar",
    image: eventImage8,
    date: "September 2020",
    learnMoreLink: {
      href: "/events/app-dev-webinar-sep-2020",
    },
  },
  {
    name: "AI Webinar",
    image: eventImage9,
    date: "September 2020",
    learnMoreLink: {
      href: "/events/ai-webinar-sep-2020",
    },
  },
  {
    name: "Intro to Programming",
    image: eventImage10,
    date: "July 2020",
    learnMoreLink: {
      href: "/events/intro-to-programming-course-jul-2020",
    },
  },
  {
    name: "Basic Web Dev",
    image: eventImage11,
    date: "July 2020",
    learnMoreLink: {
      href: "/events/basic-web-dev-course-jul-2020",
    },
  },
  {
    name: "Basic App Dev",
    image: eventImage12,
    date: "July 2020",
    learnMoreLink: {
      href: "/events/basic-app-dev-course-jul-2020",
    },
  },
];

const EventList = () => {
  return (
    <div className="bg-default-3 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-26">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="text-center mb-10"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Upcoming Events
              </h2>
              <div className="bg-white d-inline-block p-6 border rounded mx-auto mt-8">
                <p className="m-0">
                  Several in-person events upcoming for Fall 2022!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<div
          className="row my-n5 justify-content-center"
          id="mission"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={500}
        >
          {upcomingEvents.map((eventData, index) => {
            return (
              <div
                className="col-lg-4 my-5"
              >
                <Card
                  className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
                  style={{borderTop: '10px solid var(--pink)'}}
                  key={index}
                >
                  <div style={{position: "relative", width: "100%", height: "250px", borderRadius: "0.625rem 0.625rem 0 0", overflow: "hidden"}}>
                    <Image src={eventData.image} layout="fill" className="next-image-cover" />
                    {eventData.signUpLink && (
                      <div style={{position: "absolute", bottom: "1.5rem"}} className="w-100 d-flex justify-content-center">
                        <a href={eventData.signUpLink.href} class="btn-sm btn-info rounded-5 border border-blue border" target="blank" rel="noopener noreferrer">Sign Up</a>
                      </div>
                    )}
                  </div>
                  <Card.Title className="my-7 px-7">
                    {eventData.name}
                    <span className="d-block text-gray font-weight-normal mt-2 font-size-6">{eventData.date}</span>
                  </Card.Title>
                  <hr className="mx-12 my-2" />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <p>
                      {eventData.description}
                    </p>
                    {!eventData.learnMoreLink.isExternal && (
                      <a href={eventData.learnMoreLink.href} class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border" target="_blank" rel="noopener noreferrer">Learn More</a>
                    )}
                    {eventData.learnMoreLink.isExternal && (
                      <a href={eventData.learnMoreLink.href} class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border" target="_blank" rel="noopener noreferrer">Learn More</a>
                    )}
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>*/}
        {/* section title */}
        <div className="row justify-content-center mt-12">
          <div className="col-md-10">
            <div
              className="text-center mb-10"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Past Events
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
          <div className="col-lg-4 my-5">
            <Card
              className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
              style={{ borderTop: "10px solid var(--pink)" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  borderRadius: "0.625rem 0.625rem 0 0",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={eventImage9}
                  layout="fill"
                  className="next-image-cover"
                />
                <div
                  style={{ position: "absolute", bottom: "1.5rem" }}
                  className="w-100 d-flex justify-content-center"
                >
                  <div class="btn-sm btn-info rounded-5 border border-blue border">
                    Completed
                  </div>
                </div>
              </div>
              <Card.Title className="my-7 px-7">
                External Workshops
                <span className="d-block text-gray font-weight-normal mt-2 font-size-6">
                  Full 2022
                </span>
              </Card.Title>
              <hr className="mx-12 my-2" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <p>
                  NeoHacks 2.0 - Intro to React <br /> HackMerced VII - ReactJS
                  TODO
                  <br />
                  App LancerHacks - Intro to AI
                  <br /> RecessHacks - Intro to AI
                  <br />
                  NeoHacks 1.0 - Intro to AI
                  <br /> NeoHacks 1.0 - MIT App Inventor
                </p>
              </Card.Body>
            </Card>
          </div>
          {pastEvents.map((eventData, index) => {
            return (
              <div className="col-lg-4 my-5">
                <Card
                  className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
                  style={{ borderTop: "10px solid var(--pink)" }}
                  key={index}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "250px",
                      borderRadius: "0.625rem 0.625rem 0 0",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={eventData.image}
                      layout="fill"
                      className="next-image-cover"
                    />
                    <div
                      style={{ position: "absolute", bottom: "1.5rem" }}
                      className="w-100 d-flex justify-content-center"
                    >
                      <div class="btn-sm btn-info rounded-5 border border-blue border">
                        Completed
                      </div>
                    </div>
                  </div>
                  <Card.Title className="my-7 px-7">
                    {eventData.name}
                    <span className="d-block text-gray font-weight-normal mt-2 font-size-6">
                      {eventData.date}
                    </span>
                  </Card.Title>
                  <hr className="mx-12 my-2" />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <p>{eventData.description}</p>
                    {!eventData.learnMoreLink.isExternal && (
                      <a
                        href={eventData.learnMoreLink.href}
                        class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    )}
                    {eventData.learnMoreLink.isExternal && (
                      <a
                        href={eventData.learnMoreLink.href}
                        class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventList;
