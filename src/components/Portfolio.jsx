import Navbar from "./Navbar"; import Hero from "./Hero"; import About from "./About"; import Skills from "./Skills";
import Projects from "./Projects"; import DevOps from "./DevOps"; import Cloud from "./Cloud"; import Architecture from "./Architecture";
import Monitoring from "./Monitoring"; import Experience from "./Experience"; import GitHub from "./GitHub"; import Contact from "./Contact"; import Footer from "./Footer";
export default function Portfolio() {
  return (<><a className="skip" href="#about">Skip to content</a><Navbar /><main><Hero /><About /><Skills /><Projects /><DevOps /><Cloud /><Architecture /><Monitoring /><Experience /><GitHub /><Contact /></main><Footer /></>);
}
