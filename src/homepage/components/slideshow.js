import React from "react";
import { Slide } from "react-slideshow-image";

import pic1 from "../images/myself.jpg";
import pic2 from "../images/Dragoncraft.png";
import pic3 from "../images/symbol.png";

const slideImages = [pic1, pic2, pic3];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div>
          
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>About Me</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>My Hobbies</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>My Book</span>
            </div>
          </div>
        </Slide>
      </div>
   
  );
};

export default Slideshow;
