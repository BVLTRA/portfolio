import React from "react";
import "./Home.css";
import bgImage from "../../assets/images/bg-image.jpg";
import Expertise from "../../components/Expertise/Expertise";

const Home = () => {
  return (
    <main className="bvltra-main">
      <section id="home" className="hero-section">
        <div className="image-background">
          <img src={bgImage} alt="Background" className="bg-image-layer" />
          <div className="dark-overlay"></div>
          <div className="noise-overlay"></div>
        </div>

        {/* --- THE NEW SPINNING SHAPE --- */}
        <div className="hero-spinning-wrapper">
          <div className="hero-spinning-element">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{
                width: "100%",
                height: "100%",
                color: "rgba(255,255,255,0.05)",
              }}
            >
              <path d="M50 0 C55 40 60 45 100 50 C60 55 55 60 50 100 C45 60 40 55 0 50 C40 45 45 40 50 0 Z" />
            </svg>
          </div>
        </div>

        {/* Text content wrapped */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-row">
              <span className="title-sans uppercase">Student</span>
              <span className="title-serif-small"></span>
            </span>
            <span className="title-serif lowercase">full-stack developer</span>
          </h1>

          <p className="hero-subtitle">
            Currently shaping the intersection of software and physical systems
            as a student at the Open Window Institute, double majoring in
            Interactive Development and Industrial Design.
          </p>
        </div>

        {/*Footer Data */}
        <div className="hero-footer-data">
          <span>[ ***** ] 5/5 (12)</span>
          <div className="middle-stats">
            <span>50+ [ PROJECTS ]</span>
            <span>8Y [ EXPERIENCE ]</span>
            <span>0% [ FAILED PROJECTS ]</span>
          </div>
          <span>SEE WORK</span>
        </div>
      </section>

      {/* EXPERTISE SECTION: */}
      <Expertise />
    </main>
  );
};

export default Home;
