import React from "react";
import Link from "next/link";

import logo from "../../assets/adl-logo.png";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link href="/#">
      <a className={`${className}`} {...rest}>
        <img src={logo} alt="" className="light-version-logo" />
        <img src={logo} alt="" className="dark-version-logo" />
        <span className="heading-default-color">ADL</span>
      </a>
    </Link>
  );
};

export default Logo;
