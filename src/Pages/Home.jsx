import "../app.scss";

import Hero from "../components/hero/Hero";
import Display from "../components/Display/display";
import Portfolio from "../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <div>
        <section id="Homepage">
          <Hero />
        </section>

        <section>
          <Portfolio />
        </section>
        <section>
          <Display />
        </section>
      </div>
    </div>
  );
};

export default Home;
