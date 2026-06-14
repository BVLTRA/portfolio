import React from "react";
import "./Expertise.css";
import placeholderImg from "../../assets/images/profile.png";

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      {/* Top Header Row */}
      <div className="expertise-header">
        <div className="header-meta">
          <span>DESCRIPTION</span>
          <span className="muted-text">[ CAREER ]</span>
        </div>
        <h2 className="header-title">
          <span className="title-sans uppercase">The </span>
          <span className="title-serif lowercase italic text-primary">
            {" "}
            intersection{" "}
          </span>
          <span className="title-sans uppercase">of interactive code,</span>
          <br />
          <span className="title-sans uppercase"> physical form &</span>
          <span className="title-serif lowercase italic text-primary">
            {" "}
            more.{" "}
          </span>
        </h2>
      </div>

      {/* The 2-Column Grid */}
      <div className="expertise-grid">
        {/* Left Column: Hover Accordion List */}
        <div className="expertise-list">
          <div className="expertise-item">
            <div className="item-header">
              <h3>ABOUT ME</h3>
              <span className="item-number">[ 1 ]</span>
            </div>
            <div className="item-content">
              <p>
                Second-year Creative Technologies student at Open Window. I
                don't just want to know what happens; I look for the mechanisms
                underneath and how things work down to the atom.
              </p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="item-header">
              <h3>BACHELOR OF CREATIVE TECHNOLOGIES</h3>
              <span className="item-number">[ 2 ]</span>
            </div>
            <div className="item-content">
              <p>
                The Bachelor of Creative Technologies degree at Open Window is
                the first of its kind locally, offering innovative study in the
                diverse and rapidly evolving fields focusing on user-centred
                design principles with a specialisation in User Experience
                Design, Interactive Development or Industrial Design. This
                degree provides the graduate with a sustainable career in these
                dynamic and emerging fields, by providing specialisation in a
                discipline of choice, while still allowing for significant
                exposure in a range of related skills across the design and
                development industries. Graduates are equipped with strong
                problem-solving and research skills in order to craft meaningful
                experiences through digital and physical products and services.
              </p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="item-header">
              <h3>INTERACTIVE DEVELOPMENT</h3>
              <span className="item-number">[ 3 ]</span>
            </div>
            <div className="item-content">
              <p>
                This specialisation introduces students to a vast range of web
                and mobile languages that allows them to programme and develop
                functional digital solutions that include websites and mobile
                applications. The course covers both front-end and back-end
                technologies. The ultimate aim is to provide students with a
                professional and multi-faceted development skillset that allows
                them to solve real-world problems and create intuitive,
                human-centred systems in any product team.
              </p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="item-header">
              <h3>INDUSTRIAL DESIGN</h3>
              <span className="item-number">[ 4 ]</span>
            </div>
            <div className="item-content">
              <p>
                The physical objects that surround us directly influence how we
                navigate and perceive the world. This specialisation guides
                students through the process of researching, imagining,
                modelling and creating the physical objects that people truly
                love. Students are given hands-on experience in using different
                materials and manufacturing methods to create a broad range of
                products from once-off items to mass-produced goods. Ultimately,
                the main focus is understanding how people use products and how
                to give them the best possible experience.
              </p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="item-header">
              <h3>OW CARES</h3>
              <span className="item-number">[ 5 ]</span>
            </div>
            <div className="item-content">
              <p>
                Team Lead for 2026. Aiding in managing projects like the Blanket
                Drive and Clubs Activations because human connection matters
                more than conventions. The OW Cares Clubs’ initiatives encourage
                empathy, understanding, and appreciation within the Open Window
                and to the communities at large through wellness initiatives,
                fundraising, and volunteer work.
              </p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="item-header">
              <h3>MANIFESTO</h3>
              <span className="item-number">[ 6 ]</span>
            </div>
            <div className="item-content">
              <p>
                Truth and clarity over agreement. Depth over speed. I treat my
                own mind—and the systems I build—as spaces to be explored rather
                than fixed.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image Frame */}
        <div className="expertise-visual">
          <div className="visual-frame">
            <img src={placeholderImg} alt="Expertise Visualization" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
