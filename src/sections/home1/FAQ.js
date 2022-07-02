import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import imageOne from "../../assets/why-us.png";

const FAQ = ({ className, ...rest }) => {
  const [activeKey, setActiveKey] = useState(0);
  const handleCardHeaderClick = (cardKey) => {
    if (activeKey === cardKey) setActiveKey(undefined);
    else setActiveKey(cardKey);
  };

  return (
    <div className="pt-10 pt-lg-20 pb-8 pb-lg-16" {...rest}>
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
              <h2 className="font-size-11 mb-8 mb-sm-16">FAQ</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Right Image */}
          <div className="col-xl-7 col-lg-5 col-xs-12">
            <div
              className="mt-lg-0"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
              data-aos-duration={1000}
            >
              <Accordion defaultActiveKey="0" className="shadow-2 rounded-lg">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="font-size-7 d-flex bg-polar cursor-pointer align-items-center"
                    onClick={() => handleCardHeaderClick(0)}
                  >
                    <span className="text-blue mr-4">01</span>
                    <span className="heading-default-color">
                      How can I sign up for your free initiatives?
                    </span>
                    {activeKey !== 0 && (
                      <i className="fa fa-chevron-down ml-auto"></i>
                    )}
                    {activeKey === 0 && (
                      <i className="fa fa-chevron-up ml-auto"></i>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      We will constantly update our initiatives page with
                      details about our upcoming initiatives. All our
                      initiatives will be free, and you can view more
                      information about them by clicking the "read more" button
                      under each initiative.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="1"
                    className="font-size-7 d-flex bg-polar cursor-pointer align-items-center"
                    onClick={() => handleCardHeaderClick(1)}
                  >
                    <span className="text-blue mr-4">02</span>
                    <span className="heading-default-color">
                      What types of initiatives do you offer year round?
                    </span>
                    {activeKey !== 1 && (
                      <i className="fa fa-chevron-down ml-auto"></i>
                    )}
                    {activeKey === 1 && (
                      <i className="fa fa-chevron-up ml-auto"></i>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      App Dev League strives to serve the underprivileged
                      community through a variety of educational initiatives,
                      such as our local Title 1 school program (STAR), our
                      signature Appathon event, and our free educational app
                      published on the App Store. More info can be found on the
                      initiatives page. You can also contact us if you have more
                      questions regarding the content of these initiatives and
                      events.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="2"
                    className="font-size-7 d-flex bg-polar cursor-pointer align-items-center"
                    onClick={() => handleCardHeaderClick(2)}
                  >
                    <span className="text-blue mr-4">03</span>
                    <span className="heading-default-color">
                      What skills will I acquire from attending your events?
                    </span>
                    {activeKey !== 2 && (
                      <i className="fa fa-chevron-down ml-auto"></i>
                    )}
                    {activeKey === 2 && (
                      <i className="fa fa-chevron-up ml-auto"></i>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Through our courses and camps, you will not only learn the
                      fundamentals of computer science, but you will learn
                      various topics such as AI, game development, and
                      algorithmic computing. These topics will prepare you for
                      our application development courses which integrate the
                      content you have learned into a project-oriented course
                      with numerous mobile apps and websites. Our competitive
                      events like the Appathon also introduce important topics
                      such as Ethics in Technology and allow students to apply
                      CS and entrepreneurship skills.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="3"
                    className="font-size-7 d-flex bg-polar cursor-pointer align-items-center"
                    onClick={() => handleCardHeaderClick(3)}
                  >
                    <span className="text-blue mr-4">04</span>
                    <span className="heading-default-color">
                      What makes this program unique?
                    </span>
                    {activeKey !== 3 && (
                      <i className="fa fa-chevron-down ml-auto"></i>
                    )}
                    {activeKey === 3 && (
                      <i className="fa fa-chevron-up ml-auto"></i>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      During this COVID pandemic, many resources have been
                      created to provide CS education. However, these courses
                      not only lack 1 v 1 oversight and beginner-friendly
                      content, but they also lack the project-oriented nature
                      and focus on application development that our events and
                      initiatives provide. We don't teach students how to code.
                      We teach students how to create impactful code.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
          {/* End Right Image */}
          <div
            className="col-xl-4 offset-lg-1 col-lg-6 col-md-8 mt-10 mt-lg-0"
            data-aos="fade-right"
            data-aos-duration={600}
            data-aos-delay={300}
            data-aos-once="true"
            data-aos-duration={1000}
          >
            <Image
              className="w-100"
              src={imageOne}
              alt=""
              width={350}
              height={262}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
