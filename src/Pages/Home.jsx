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
    </div>
  );
};

export default Home;
