import React, { useState } from "react";
import Link from "next/link";

const GlobalContext = React.createContext();

export const themeConfigDefault = {
  bodyDark: false,
  headerDark: false,
  footerDark: false,
  headerStyle: "style1", //style2, style3
  headerFluid: true,
  headerButton: (
    <>
      <Link href="/get-involved">
        <a className="btn btn-blue-3 font-size-5 rounded-5 ml-4">
          Get Involved
        </a>
      </Link>
    </>
  ),
  headerClassName: "site-header--menu-logo-middle",
  headerSocial: false,
  headerLogoClassName: "",
  footerStyle: "style1",
  footerClassName: "",
};

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const changeTheme = (themeConfig = themeConfigDefault) => {
    setTheme({
      ...theme,
      ...themeConfig,
    });
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        changeTheme,
        videoModalVisible,
        toggleVideoModal,
        visibleOffCanvas,
        toggleOffCanvas,
        closeOffCanvas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
