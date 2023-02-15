import Home from "./components/home";
import Navbar from "./components/navbar";
import SocialLink from "./components/socialLinks";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
// import Portfolio from "./components/portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Experience />
      <Contact />
      <SocialLink />
    </div>
  );
}
export default App;
