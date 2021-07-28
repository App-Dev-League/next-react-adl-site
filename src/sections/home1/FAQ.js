import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import imageOne from "../../assets/why-us.png";

const FAQ = ({ className, ...rest }) => {
  return (
    <div className="pt-10 pt-lg-20 pb-8 pb-lg-16" {...rest}>
      <div className="container">
        <div className="row"> 
          <div className="col-xs-12">
            <div
              className="section-title"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <h2 className="font-size-11 mb-8 mb-sm-16">
                FAQ
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-xs-12">
            <div
              className="mt-lg-0"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <Accordion defaultActiveKey="0" className="shadow-2 rounded-lg">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="font-size-7 d-flex bg-polar cursor-pointer">
                    <span className="text-blue mr-4">01</span>
                    <span className="heading-default-color">How can I sign up for your free events?</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      We will constantly update our events page with details about our upcoming events. All our events will be free, and you can view more information about them by clicking the "read more" button under each event.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1" className="font-size-7 d-flex bg-polar cursor-pointer">
                    <span className="text-blue mr-4">02</span>
                    <span className="heading-default-color">What types of events do you offer year round?</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      App Dev League strives to serve the underprivileged community through a variety of educational events, such as our signature Appathon event, workshops, courses, and camps. More info can be found on the events page. You can also contact us if you have more questions regarding the content of these events.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2" className="font-size-7 d-flex bg-polar cursor-pointer">
                    <span className="text-blue mr-4">03</span>
                    <span className="heading-default-color">What skills will I acquire from attending your events?</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Through our courses and camps, you will not only learn how to build websites and apps, but you will also have a chance to delve into other CS disciplines such as AI and Game Development. Our competitive events like the Appathon and AppDev bowl will provide you with real-life applicable CS and entrepreneurship skills.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3" className="font-size-7 d-flex bg-polar cursor-pointer">
                    <span className="text-blue mr-4">04</span>
                    <span className="heading-default-color">What makes this program unique?</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      During this COVID pandemic, many free resources have been created to provide free CS education. However, most of these resources lack 1 v 1 oversight and beginner-friendly content. Our goal is to provide free education in not only an accessible but also interactive manner to underprivileged children.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
          {/* End Right Image */}
          <div className="col-xl-5 offset-lg-1 col-lg-6 col-md-8 mt-10 mt-lg-0">
            <img
              className="w-100"
              src={imageOne}
              alt=""
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={300}
              data-aos-once="true" data-aos-duration={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
