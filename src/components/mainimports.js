import { Fragment } from "react";
import Home from "./home";
import SocialLinks from "./socialLinks";
import Experience from "./experience";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";
const mainimports = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Experience />
      <Contact />
      <SocialLinks />
    </Fragment>
  );
};

export default mainimports;
