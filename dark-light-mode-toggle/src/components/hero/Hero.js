import React from "react";
import phone from "../../assets/phone.svg";
import "./Hero.css";

const Hero = ({ myTheme }) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container --flex-between">
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, error.
            Unde a neque, modi dolorum aliquid magni odio! Iste, totam
            voluptatem nesciunt delectus,
          </p>

          <div className="--flex-start">
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="--text-center">
          <img src={phone} alt="phone" width={600} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
