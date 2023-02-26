/** @format */

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const CurriculumPage = (props) => {
  let [article, setArticle] = useState("");
  useEffect(() => {
    fetch(props.filePath)
      .then((res) => res.text())
      .then((txt) => setArticle(txt));
  });

  return (
    <>
      <div className='pt-30 pb-20 events-hero'>
        <div className='container'>
          {/* Section Padding */}
          <div className='row justify-content-center align-items-center dark-mode-texts'>
            <div className='col-xl-7 col-lg-8 col-md-11'>
              <div
                className='text-center'
                data-aos='zoom-in'
                data-aos-duration={1000}
                data-aos-delay={500}>
                <h2 className='font-size-11 mb-5'>{props.title}</h2>
                <p class='font-size-6 font-weight-light mb-0 px-md-5 px-lg-0'>
                  {props.description}
                </p>
              </div>
            </div>
          </div>
          {/* End Section Padding */}
        </div>
      </div>
      <div className='pt-lg-22 col align-items-center'>
        <ReactMarkdown children={article} className='col' />
      </div>
    </>
  );
};

export default CurriculumPage;
