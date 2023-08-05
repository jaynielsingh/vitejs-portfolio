
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import NavBar from "./components/navbar/navbar.component";
import Skills from "./components/skills/skills.component";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function App()
{
  useEffect(() =>
  {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
