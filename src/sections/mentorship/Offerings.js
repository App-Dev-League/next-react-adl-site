import React from "react";
import { Card } from "react-bootstrap";

const offeringsData = [
  {
    title: "Intro to Computer Science",
    description: "App Dev League’s mentorship program is a tutoring program where students can learn Computer Science 1-on-1. We offer a variety of subjects, all split into different levels, and we further personalize our course to each and every student. In Intro to Computer Science, students will learn the very basics of programming as a whole. We’ll start at the very bottom and work our way up to the thought process involved in solving problems, culminating into figuring out how to write code to answer two instructor-given questions.",
  },
  {
    title: "Website Development with HTML, CSS, JS",
    description: "In Website Development with HTML, CSS, and JS, we’ll firstly over the basics of HTML, letting us create the bones of the website. We will then teach students CSS, helping them make their website look appealing. Finally, we’ll go over how to integrate JavaScript into their website, as well as the basics of programming. However, students are highly encouraged to have an ample understanding of the topic beforehand. The final project will involve students creating their own webpages.",
  },
  {
    title: "Mobile App Development with MIT App Inventor",
    description: "In Mobile App Development with MIT App Inventor, we’ll go through most of everything contained in the website, from images and videos to event handlers and layouts. We’ll also go through a brief recap of basic programming, but students are highly encouraged to have an ample understanding of the topic beforehand. The course will end with students creating their own, personalized apps.",
  },
  {
    title: "Advanced Website Development Frameworks (Frontend & Backend)",
    description: "In Advanced Web Development Frameworks (Frontend and Backend), we will go more in depth on the inner workings of a website, including how to request responses from form elements into a database and how to then use the database. The final project will again involve students making their own webpages, but the websites will feel far more professional (and hopefully the students too!).",
  },
  {
    title: "Basic Understanding of Artificial Intelligence and ML",
    description: "In Basic Understanding of Artificial Intelligence and Machine Learning, we will go into some of the early machine learning concepts such as linear and logistic regression, neural networks, computer vision models, and natural language processing. For our final project, students would come up with a problem they want to try and make it themselves (data would be provided by official libraries).",
  },
  {
    title: "Advanced Understanding of AI (TNNs, Reinforcement or Q Learning, Contrastive Learning)",
    description: "In Advanced Understanding of Artificial Intelligence, we would teach more complicated concepts, including but not limited to: ternary neural networks, q learning, and contrastive learning. The final project will involve solving a problem with AI, but the outcome will exemplify much more sophisticated code then in Basic Understanding of Artificial Intelligence and Machine Learning.",
  },
  {
    title: "Competitive Coding",
    description: "In Competitive Coding, we will go over some of the more advanced concepts in problem solving, from arrays and matrices to recursion and even graph theory. Students will be tasked at the end with solving two USACO bronze level problems, as this course should prepare you for USACO bronze and possibly even USACO silver.",
  }
];

const Offerings = () => {
  return (
    <div className="bg-default-3 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-26">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="mb-12"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Our Program Offerings
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
          {offeringsData.map((offering, index) => {
            return (
              <div
                className="col-lg-6 my-5"
                key={index}
              >
                <Card
                  className="bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200"
                >
                  <Card.Title className="my-7 px-7">{offering.title}</Card.Title>
                  <hr className="mx-12 my-2" />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div dangerouslySetInnerHTML={{__html: offering.description}} />
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

export default Offerings;
