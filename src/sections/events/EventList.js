import React from "react";
import Image from "next/image"
import Link from "next/link"
import { Card } from "react-bootstrap";

import eventImage1 from "../../assets/events/hero-bg.jpg"
import eventImage2 from "../../assets/events/introductory-application-development-course-june-2021.jpeg"
import eventImage3 from "../../assets/events/game-development-course-june-2021.jpeg"
import eventImage4 from "../../assets/events/advanced-multi-disciplinary-cs-course-june-2021.png"
import eventImage5 from "../../assets/events/CodeArt_Fest_2021_-_Hopin_Banner.jpg"
import eventImage6 from "../../assets/events/december-camp-dec-2020.jpeg"
import eventImage7 from "../../assets/events/learn-to-code-workshop-nov-2020.jpg"
import eventImage8 from "../../assets/events/app-dev-webinar-sep-2020.png"
import eventImage9 from "../../assets/events/ai-webinar-sep-2020.jpg"
import eventImage10 from "../../assets/events/intro-to-programming-course-jul-2020.jpg"
import eventImage11 from "../../assets/events/basic-web-dev-course-jul-2020.jpg"
import eventImage12 from "../../assets/events/basic-app-dev-course-jul-2020.jpg"

const pastEvents = [
  {
    name: "ADL Appathon 2021",
    image: eventImage1,
    date: "August 2021",
    description: "The Appathon is a unique opportunity for students of all backgrounds to learn how to use AppDev and AI for making a societal impact in their communities. As part of this event, students will get to hear from world-renowned speakers like the Director of USACO and Damian Musk, as well as compete in a competition with prizes totaling $20k.",
    learnMoreLink: {
      href: "https://appathon.appdevleague.org/",
      isExternal: true
    }
  },
  {
    name: "App Development Course",
    image: eventImage2,
    date: "June 2021",
    description: "Interested in learning how to make apps? Well then this 5-week long course is for you. Students will learn how to construct websites using HTML/CSS/JS, as well as build mobile apps with MIT app inventor. No prior programming experience required.",
    learnMoreLink: {
      href: "/events/intro-ad-june-2021"
    }
  },
  {
    name: "Game Development Course",
    image: eventImage3,
    date: "June 2021",
    description: "Do you enjoy playing games? Channel your passion for gaming in an educational manner by attending this 5-week long course. Students will learn how to create interactive video games with Pygame and Unity. Limited programming experience recommended.",
    learnMoreLink: {
      href: "/events/game-dev-june-2021"
    }
  },
  {
    name: "Advanced CS Course",
    image: eventImage4,
    date: "June 2021",
    description: "Do you already have a strong CS foundation? In this course, we will explore advanced topics in Website Development, Machine Learning, and Competitive Programming. Highly recommended for students with 1-3 years or programming experience.",
    learnMoreLink: {
      href: "/events/adv-md-cs-june-2021"
    }
  },
  {
    name: "Code/Art Speaker Event",
    image: eventImage5,
    date: "March 2021",
    learnMoreLink: {
      href: "/events/code-art-speaker-mar-2021"
    }
  },
  {
    name: "CS Winter Bootcamp",
    image: eventImage6,
    date: "December 2020",
    learnMoreLink: {
      href: "/events/december-camp-dec-2020"
    }
  },
  {
    name: "Learn to Code Webinar",
    image: eventImage7,
    date: "November 2020",
    learnMoreLink: {
      href: "/events/learn-to-code-workshop-nov-2020"
    }
  },
  {
    name: "App Dev Webinar",
    image: eventImage8,
    date: "September 2020",
    learnMoreLink: {
      href: "/events/app-dev-webinar-sep-2020"
    }
  },
  {
    name: "AI Webinar",
    image: eventImage9,
    date: "September 2020",
    learnMoreLink: {
      href: "/events/ai-webinar-sep-2020"
    }
  },
  {
    name: "Intro to Programming",
    image: eventImage10,
    date: "July 2020",
    learnMoreLink: {
      href: "/events/intro-to-programming-course-jul-2020"
    }
  },
  {
    name: "Basic Web Dev",
    image: eventImage11,
    date: "July 2020",
    learnMoreLink: {
      href: "/events/basic-web-dev-course-jul-2020"
    }
  },
  {
    name: "Basic App Dev",
    image: eventImage12,
    date: "July 2020",
    learnMoreLink: {
      href: "/events/basic-app-dev-course-jul-2020"
    }
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
              <p className="font-size-6 font-weight-light mb-0 px-md-5 px-lg-0">
                Due to COVID restrictions, all events will be hosted online virtually through Zoom. Regardless of the circumstances, App Dev League strives to provide free and accessible education for all students, especially underprivileged children. If you would like to see some of our past events, please scroll below.
              </p>
              <div className="bg-white d-inline-block p-6 border rounded mx-auto mt-8">
                <p className="m-0">No upcoming events right now.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-n5 justify-content-center" id="mission">
          {/*<div
            className="col-lg-6 my-5"
          >
            <Card
              className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
              style={{borderTop: '10px solid var(--pink)'}}
            >
              <div style={{position: "relative", width: "100%", height: "250px", borderRadius: "0.625rem 0.625rem 0 0", overflow: "hidden"}}>
                <Image src={event1Image} layout="fill" className="next-image-cover" />
                <div style={{position: "absolute", bottom: "1.5rem"}} className="w-100 d-flex justify-content-center">
                  <a class="btn btn-sm btn-primary rounded-5 border border-blue border" href="/#">Sign Up</a>
                </div>
              </div>
              <Card.Title className="my-7 px-7">
                ADL Appathon 2021
                <span className="d-block text-gray font-weight-normal mt-2 font-size-6">August 2021</span>
              </Card.Title>
              <hr className="mx-12 my-2" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <p>
                  The Appathon works to educate the next generation of technologists, innovators, and leaders. From researchers to entrepreneurship trailblazers, this conference is a unique opportunity to interact with the leaders in the fields of AI and application development through workshops and panels. As part of this event, students will also have the chance to compete in a competition (ideathon), where they can submit business pitches and/or prototypes for an app that can have a real-world impact.
                </p>
                <a class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border" href="/#">Learn More</a>
              </Card.Body>
            </Card>
          </div>*/}
        </div>
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
          {pastEvents.map((eventData, index) => {
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
                    <div style={{position: "absolute", bottom: "1.5rem"}} className="w-100 d-flex justify-content-center">
                      <div class="btn-sm btn-info rounded-5 border border-blue border">Completed</div>
                    </div>
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
                      <Link href={eventData.learnMoreLink.href}>
                        <a class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border">Learn More</a>
                      </Link>
                    )}
                    {eventData.learnMoreLink.isExternal && (
                      <a href={eventData.learnMoreLink.href} class="btn btn-dodger-blue-2 btn-sm rounded-5 border border-blue border" target="_blank" rel="noopener noreferrer">Learn More</a>
                    )}
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default EventList;
