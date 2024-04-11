import "../app.scss";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/section/Section";
const Home = () => {
  return (
    <div>
      <div>
      <section id="Homepage">
        <Hero />
      </section>
      <section id="Section">
        <Parallax type="section" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      </div>
    </div>
  );
};

export default Home;
