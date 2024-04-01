import React from 'react';
import './TravelBlog.css';

function TravelBlog(props) {
  return (
    <div className="travel-blog">
      <h1>{props.heading}</h1>
      <div className="images">
        <img src={props.img1} alt="first"></img>
        <img src={props.img2} alt="second"></img>
        <img src={props.img3} alt="third"></img>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default TravelBlog;