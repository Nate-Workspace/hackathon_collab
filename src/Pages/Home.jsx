<<<<<<< HEAD
import React from "react";
import Header from "../components/Home/Header";
import SavedEvents from "../components/Home/SavedEvents";
import TopProducts from "../components/Home/TopProducts";

const Home = () => {
  return (
    <div>
      <Header/>
      <SavedEvents title='Saved Events Reminder'/>
      <TopProducts title='Discover Products' smallTitle='Products'/>
      <SavedEvents title='Book upcoming events'/>
      <TopProducts title='Top Services' smallTitle='Services'/>
      <Header/>
      <SavedEvents title='Saved Events Reminder'/>
      <TopProducts title='Discover Products' smallTitle='Products'/>
      <SavedEvents title='Book upcoming events'/>
      <TopProducts title='Top Services' smallTitle='Services'/>
=======
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
>>>>>>> e8b3d9d0653fa1eb08bd97ab20114b068cb387ce
    </div>
  );
};

export default Home;
