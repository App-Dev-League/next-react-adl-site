import React from "react";

const Overview = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            {/* Left */}
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <p className="font-size-5 font-weight-bold text-uppercase mb-1 text-gray" style={{letterSpacing: "3px"}}>Overview</p>
              <h2 className="font-size-9 mb-12">
              Student Teacher Academic Resources
              </h2>
              <p>
              The STAR program is an opportunity for Title 1 (underprivileged) schools and low-income centers to utilize our free CS resources. These resources will be used in an ADL sponsored after-school program for your school. If an existing after-school CS program or class already exists, you are still allowed to join the STAR program.
              </p>
            </div>
            {/* Left End */}
            {/* Right */}
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true" data-aos-duration={1000}
            >
              <ul className="p-0 m-0 list-disc">
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-59 bg-gray-3 mr-7 font-size-8">
                    <i className="fa fa-book-open" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Curriculum Hub</strong>
                    <p>Our team has compiled numerous 8-week (16 hours) sets of curated content on emerging CS topics like Intro to Programming, Website Development, Artificial Intelligence, and Mobile App Development. Teachers are welcome to use this content in their classes or an after school ADL computer science program.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-59 bg-gray-3 mr-7 font-size-8">
                    <i className="fa fa-laptop-code" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Devnetic</strong>
                    <p>On their own time, students at these schools will also get a chance to freely learn about CS through an interactive, gamified teaching app. This app is pending to be published on the App store.</p>
                  </div>
                </li>
                <li className="position-relative heading-default-color pl-0 d-flex mb-7">
                  <div className="circle-59 bg-gray-3 mr-7 font-size-8">
                    <i className="fa fa-donate" />
                  </div>
                  <div className="mt-2">
                    <strong className="font-size-8 mb-3 d-block">Donations</strong>
                    <p>ADL completely understands that some students in low-income areas may not have access to computers and high-speed internet, so we will also provide the necessary tech infrastructure and monetary contributions to make programs/classes at these schools run effectively.</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
