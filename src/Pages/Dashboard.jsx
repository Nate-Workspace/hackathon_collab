import React from "react";
import "../components/Dashboard/dashboard.css";
import Intro from "../components/Dashboard/Intro";
import SavedEvents from "../components/Saved/SavedEvents";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Intro />
      <div className="wholeBlock">
        <SavedEvents />
        <SavedEvents />
        <SavedEvents />
      </div>
    </div>
  );
};

export default Dashboard;
