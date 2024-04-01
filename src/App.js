import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import data from "./TravelData";

class App extends Component {
  render() {
    const travelInfo = data.map((item) => {
      return (
        <TravelBlog
          key={item.id}
          heading={item.placeHeading}
          img1={item.placeImg1}
          img2={item.placeImg2}
          img3={item.placeImg3}
          text={item.placeDescription}
        />
      );
    });

    return (
      <div className="App">
        <Hero />
        <section className="section-travel-info">{travelInfo}</section>
      </div>
    );
  }
}

export default App;
