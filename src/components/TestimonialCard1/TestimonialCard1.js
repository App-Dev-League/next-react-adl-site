import React from "react";

const Card = ({ options }) => {
  return (
    <div className="bg-white border rounded-10 pt-9 pl-10 pr-10 pb-8 mr-5 mr-lg-9">
      <div className="">
        <p className="font-size-5 line-height-28 text-dark-cloud mr-xl-5">
          {options.content}
        </p>
        <h4 className="font-size-6 mb-0 text-dark-cloud">{options.userlink}</h4>
        <p>{options.grade}</p>
      </div>
    </div>
  );
};

export default Card;
