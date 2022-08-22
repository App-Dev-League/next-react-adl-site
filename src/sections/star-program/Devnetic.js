import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import imageOne from "../../assets/details-photo1.jpg";

const Devnetic = ({ className, ...rest }) => {
  const [activeKey, setActiveKey] = useState(0);
  const handleCardHeaderClick = (cardKey) => {
    if (activeKey === cardKey) setActiveKey(undefined);
    else setActiveKey(cardKey);
  };

  return (
    <div className="pt-10 pt-lg-20 pb-8 pb-lg-16" {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="section-title col-xs-12"
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-duration={1000}
          >
            <p
              className="font-size-5 font-weight-bold text-uppercase mb-1"
              style={{ letterSpacing: "3px" }}
            >
              For students
            </p>
            <h2 className="font-size-9 mb-6">
              A fun, easy to use learning app
            </h2>
          </div>

          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-xs-12">
            <p>
              Students will be able to freely learn computer science through an
              interactive, gamified teaching app. A combination of engaging,
              easy to understand slides and questions in lessons provide an
              enriching approach to learning
            </p>
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
                    <span className="heading-default-color">
                      Artificial Intelligence
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
                      Students will be skilled in topics such as tree AI,
                      regression, SVM, neural networks, computer vision, NLP,
                      and unsupervised learning. Python is primarily used.
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
                    <span className="heading-default-color">
                      Computer Science
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
                      Students will be able to demonstrate loops, functions,
                      classes, and more in their Python code. They will be able
                      to solve USACO-style problems with these tools.
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
                    <span className="heading-default-color">
                      Web Development
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
                      By the end of the course, students will be very familiar
                      with languages HTML, CSS, JavaScript, Node.js, and have a
                      strong understanding of technologies like Express, JSX,
                      and React.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
          {/* End Right Image */}
          <div
            className="col-xl-5 offset-lg-1 col-lg-6 col-md-8 mt-10 mt-lg-0"
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
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devnetic;
