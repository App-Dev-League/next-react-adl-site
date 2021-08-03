import React from "react";
import Image from "next/image"
import Link from "next/link"
import { Card } from "react-bootstrap";

import event1Image from "../../assets/events/hero-bg.jpg"

const pastEvents = [
  {
    name: "ADL Appathon 2021",
    image: event1Image,
    date: "August 2021",
    description: "The Appathon works to educate the next generation of technologists, innovators, and leaders. From researchers to entrepreneurship trailblazers, this conference is a unique opportunity to interact with the leaders in the fields of AI and application development through workshops and panels. As part of this event, students will also have the chance to compete in a competition (ideathon), where they can submit business pitches and/or prototypes for an app that can have a real-world impact.",
    learnMoreLink: {
      href: "https://appathon.appdevleague.org/",
      isExternal: true
    }
  }
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
              data-aos-duration={600}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Upcoming Events
              </h2>
              <p className="font-size-6 font-weight-light mb-0 px-md-5 px-lg-0">
                Due to COVID restrictions, all webinars and courses will be hosted online virtually through Zoom. <br /> Regardless of the circumstances, App Dev League strives to provide free and accessible education. <br/> Our next event is expected to be in May of 2021. More information will appear below closer to the date! <br/> If you would like to see some of our past events, please scroll below.
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
              data-aos-duration={600}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Past Events
              </h2>
            </div>
          </div>
        </div>
        <div className="row my-n5 justify-content-center" id="mission">
          {pastEvents.map((eventData, index) => {
            return (
              <div
                className="col-lg-6 my-5"
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
