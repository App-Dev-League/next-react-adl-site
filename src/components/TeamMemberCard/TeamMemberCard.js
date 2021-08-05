import React from "react";

const FeatureCard = ({ options }) => {
  return (
    <div className="bg-white border rounded-10 mb-9 px-5 pl-xs-9 pr-xs-5 pl-lg-5 pr-lg-3 pl-xl-9 pr-xl-5 py-8">
      <div className="d-flex align-items-center">
        <div className="circle-88 mr-7">
          <img src={options.image} alt="" className="w-100 rounded-circle" />
        </div>
        <div className="mb-0">
          <h4 className="font-size-7 line-height-reset text-dark-cloud mb-0">
            {options.name}
          </h4>
          {options.title && <p className="font-size-5 mb-0 text-bali-gray mt-2">{options.title}</p>}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
