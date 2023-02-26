/** @format */

import React, { useEffect, useState } from "react";
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

const sections = [
  {
    title: "Web Development",
    articles: [
      {
        name: "Basic Website Tutorial",
        image: eventImage1,
        description: "Make your first basic website using HTML and CSS",
        learnMoreLink: {
          href: "/curriculum/webdev/BasicWebsite",
          isExternal: false,
        },
      },
      {
        name: "Advanced CSS Tutorial",
        image: eventImage1,
        description: "Learn more advanced concepts in CSS",
        learnMoreLink: {
          href: "/curriculum/webdev/AdvancedCSS",
          isExternal: false,
        },
      },
      {
        name: "BMI Calculator",
        image: eventImage1,
        description: "Learn how to make your own BMI calculator using Flutter!",
        learnMoreLink: {
          href: "/curriculum/webdev/BMICalculator",
          isExternal: false,
        },
      },
      {
        name: "Calculator App",
        image: eventImage1,
        description: "Learn how to make a basic calculator using HTML and CSS!",
        learnMoreLink: {
          href: "/curriculum/webdev/Calculator",
          isExternal: false,
        },
      },
      {
        name: "Intro to JavaScript",
        image: eventImage1,
        description:
          "Learn the basics of Javascript, the language that powers the web",
        learnMoreLink: {
          href: "/curriculum/webdev/IntroToJs",
          isExternal: false,
        },
      },
      {
        name: "Intro to Node",
        image: eventImage1,
        description:
          "Learn the basics of Node.js, a development tool that allows you to write JavaScript on many platforms",
        learnMoreLink: {
          href: "/curriculum/webdev/IntroToNode",
          isExternal: false,
        },
      },
      {
        name: "Random Number Generator",
        image: eventImage1,
        description: "Make a random number generator using HTML and PHP",
        learnMoreLink: {
          href: "/curriculum/webdev/RandomNumberGenerator",
          isExternal: false,
        },
      },
      {
        name: "React Todo App Tutorial",
        image: eventImage1,
        description: "Make a todo application using React.js",
        learnMoreLink: {
          href: "/curriculum/webdev/ReactToDo",
          isExternal: false,
        },
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    articles: [
      {
        name: "AI Ethics",
        image: eventImage1,
        description:
          "Understanding the ethical principles underlying Artificial Intelligence systems",
        learnMoreLink: {
          href: "/curriculum/ai/AIEthics",
          isExternal: false,
        },
      },
      {
        name: "CNN Explanation",
        image: eventImage1,
        description:
          "Learn about Convolutional Neural Networks and Computer Vision",
        learnMoreLink: {
          href: "/curriculum/ai/CNNExplanation",
          isExternal: false,
        },
      },
      {
        name: "CNN Walkthrough",
        image: eventImage1,
        description:
          "Implement a digit recognition program using Convolutional Neural Networks in Python!",
        learnMoreLink: {
          href: "/curriculum/ai/CNNWalkthrough",
          isExternal: false,
        },
      },
      {
        name: "Intro to GANs",
        image: eventImage1,
        description: "Learn about AI art and General Adversarial Networks",
        learnMoreLink: {
          href: "/curriculum/ai/IntroToGANS",
          isExternal: false,
        },
      },
      {
        name: "Intro to Numpy",
        image: eventImage1,
        description:
          "Learn about the library that powers almost all of data science with Python",
        learnMoreLink: {
          href: "/curriculum/ai/IntroToNumpy",
          isExternal: false,
        },
      },
      {
        name: "Intro to RNNs",
        image: eventImage1,
        description:
          "Learn about Recurrent Neural Networks and their applications in AI",
        learnMoreLink: {
          href: "/curriculum/ai/IntroToRnn",
          isExternal: false,
        },
      },
      {
        name: "Linear Regression",
        image: eventImage1,
        description:
          "Learn about one of the most fundamental methods in machine learning",
        learnMoreLink: {
          href: "/curriculum/ai/LinReg",
          isExternal: false,
        },
      },
      {
        name: "Creating A Machine Learning Model using Swift and CreateML",
        image: eventImage1,
        description: "Learn How To Create A Dog vs Cat Classifier",
        learnMoreLink: {
          href: "/curriculum/ai/MLSwiftCreateML",
          isExternal: false,
        },
      },
      {
        name: "Natural Language Processing and the BERT Model",
        image: eventImage1,
        description: "Learn how computers process human language",
        learnMoreLink: {
          href: "/curriculum/ai/NLPBert",
          isExternal: false,
        },
      },
      {
        name: "Object Recognition",
        image: eventImage1,
        description:
          "Learn about Object recognition as it applies to AI and Computer Vision",
        learnMoreLink: {
          href: "/curriculum/ai/ObjectRecognition",
          isExternal: false,
        },
      },
      {
        name: "Data Manipulation with Python and Pandas",
        image: eventImage1,
        description: "Learn data manipulation in Python using Pandas!",
        learnMoreLink: {
          href: "/curriculum/ai/PyPandasDataManipulation",
          isExternal: false,
        },
      },
      {
        name: "Reinforcement Learning with Open AI Gym",
        image: eventImage1,
        description: "Learn reinforcement learning methods using Open AI Gym!",
        learnMoreLink: {
          href: "/curriculum/ai/ReinforcementLearning",
          isExternal: false,
        },
      },
      {
        name: "RNN Code Walkthrough",
        image: eventImage1,
        description:
          "Learn how to implement a project using Recurrent Neural Networks",
        learnMoreLink: {
          href: "/curriculum/ai/RNNWalkthrough",
          isExternal: false,
        },
      },
      {
        name: "Teachable Machine",
        image: eventImage1,
        description:
          "Learn how to use teachable machine to create basic ML models",
        learnMoreLink: {
          href: "/curriculum/ai/TeachableMachine",
          isExternal: false,
        },
      },
      {
        name: "Transfer Learning",
        image: eventImage1,
        description:
          "Learn how to use pre-existing models to perform transfer learning",
        learnMoreLink: {
          href: "/curriculum/ai/TransferLearning",
          isExternal: false,
        },
      },
    ],
  },
  {
    title: "Competitive Coding",
    articles: [
      {
        name: "Introduction to Competitive Coding",
        image: eventImage1,
        description: "Learn about the USA Computing Olympiad!",
        learnMoreLink: {
          href: "/curriculum/ai/IntroToUsaco",
          isExternal: false,
        },
      },
      {
        name: "Introduction to Competitive Coding, Part 2",
        image: eventImage1,
        description: "Learn how to solve Adhoc problems on USACO!",
        learnMoreLink: {
          href: "/curriculum/ai/IntroToUsaco2",
          isExternal: false,
        },
      },
    ],
  },
];

const CurriculumList = () => {
  return sections.map((sectionData, index) => {
    {
      return (
        <div
          key={index}
          className='bg-default-3 pt-12 pb-md-19 pb-15 pt-lg-22 col align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col'>
                <div
                  className='text-center mb-10'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={500}>
                  <h2 className='font-size-10 mb-7 letter-spacing-n83'>
                    {sectionData.title}
                  </h2>
                </div>
              </div>
            </div>
            <div
              className='row my-n5 justify-content-center'
              id='mission'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={500}>
              {sectionData["articles"].map((articleData, index) => {
                return (
                  <div className='col-lg-4 my-5'>
                    <Card
                      className='bg-white shadow-2 border-0 h-100 gr-hover-2 transition-200'
                      style={{ borderTop: "10px solid var(--pink)" }}
                      key={index}>
                      <a href={articleData.learnMoreLink.href}>
                        <Card.Title className='my-7 px-7'>
                          {articleData.name}
                          <span className='d-block text-gray font-weight-normal mt-2 font-size-6'>
                            {articleData.description}
                          </span>
                        </Card.Title>
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "250px",
                            borderRadius: "0 0 0.625rem 0.625rem",
                            overflow: "hidden",
                          }}>
                          <Image
                            src={articleData.image}
                            layout='fill'
                            className='next-image-cover'
                          />
                        </div>
                      </a>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  });
};

export default CurriculumList;
