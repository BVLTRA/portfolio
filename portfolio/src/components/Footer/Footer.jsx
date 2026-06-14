import React from "react";
import "./Footer.css";
import footerImage from "../../assets/images/footer-image.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bvltra-footer">
      {/* Single Image Space */}
      <div className="footer-image-slot">
        <img src={footerImage} alt="Footer Image" />
      </div>

      {/* Top Section: The Split Data Group */}
      <div className="footer-data-group">
        {/* Left Side: Navigation */}
        <div className="data-column align-left">
          <ul className="data-list align-left">
            <li>
              <a href="#home">[ ] HOME</a>
            </li>
            <li>
              <a href="#work">[ ] WORK</a>
            </li>
            <li>
              <a href="#process">[ ] PROCESS</a>
            </li>
            <li>
              <a href="#contact">[ ] CONTACT</a>
            </li>
          </ul>
        </div>

        {/* Right Side Wrapper */}
        <div className="right-columns-wrapper">
          {/* Column 2: External Links */}
          <div className="data-column align-right">
            <ul className="data-list align-right">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GITHUB [ ]
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LINKEDIN [ ]
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Matrix */}
          <div className="data-column contact-matrix">
            <div className="matrix-row">
              <span className="matrix-val text-muted">Not provided</span>
              <span className="matrix-key">A</span>
            </div>
            <div className="matrix-row">
              <span className="matrix-val text-muted">Not provided</span>
              <span className="matrix-key">P</span>
            </div>
            <div className="matrix-row">
              <a href="mailto:Hello@bvltra.com" className="matrix-val">
                Hello@bvltra.com
              </a>
              <span className="matrix-key">E</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography & Badges */}
      <div className="footer-bottom-layer">
        {/* Massive Brand Mark */}
        <div className="huge-brand-mark">
          <span className="mark-sans">B</span>
          <span className="mark-serif">p</span>
        </div>

        {/* Legal & System Links (Now in a row) */}
        <div className="system-links">
          <span>&copy; {currentYear} BVLTRA</span>
          <a href="#privacy">Privacy Policy</a>
          <span className="text-muted">Translate [ Coming soon ]</span>
        </div>

        {/* Open Window Logo Slot */}
        <div className="badge-container">
          <p className="ow-description text-muted">
            Course information sourced from...
          </p>
          <svg
            viewBox="35 0 500 80"
            className="ow-logo-slot"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              class="st0"
              d="M193.3,32.4c-9.1,0-16.4,7.4-16.4,15.9c0,9.7,6.8,15.8,16.4,15.8c9.7,0,16.4-6.7,16.4-16.4
		C209.7,39.2,202.3,32.4,193.3,32.4z M193.3,57.2c-5.1,0-9-4.2-9-9.5c0-4.5,4.2-8.5,9-8.5c4.8,0,9,4,9,8.5
		C202.3,53,198.3,57.2,193.3,57.2z"
            ></path>
            <path
              class="st0"
              d="M228.1,33.4h-11.7V63h7.1V52.9h4.9c7,0,10.4-3.2,10.4-9.9C238.8,36.8,235,33.4,228.1,33.4z M225.2,47.4h-1.7
		V39h1.7c3,0,6.1,0,6.1,4.3C231.4,47.4,228.1,47.4,225.2,47.4z"
            ></path>
            <polygon
              class="st0"
              points="261.2,39.3 261.2,33.4 244.7,33.4 244.7,63 261.2,63 261.2,57.2 251.8,57.2 251.8,51.1 260.7,51.1 
		260.7,45.2 251.8,45.2 251.8,39.3 	"
            ></polygon>
            <polygon
              class="st0"
              points="276.4,44.5 290.8,63 298.1,63 298.1,33.4 291,33.4 291,52 290.4,52 290.2,51.9 275.8,33.4 268.5,33.4 
		268.5,63 275.6,63 275.6,44.4 276.2,44.4 	"
            ></polygon>
            <polygon
              class="st0"
              points="355.3,33.4 349.6,53.1 349,53.1 348.8,52.8 342.9,33.4 337.2,33.4 330.8,53.1 330.2,53.1 330,52.8 
		324.8,33.4 317.5,33.4 326.3,63 333.7,63 339.7,45.4 340.3,45.4 340.5,45.7 345.8,63 353.2,63 362.7,33.4 	"
            ></polygon>
            <rect
              x="369.1"
              y="33.4"
              class="st0"
              width="7.1"
              height="29.6"
            ></rect>
            <polygon
              class="st0"
              points="391.1,44.5 405.4,63 412.7,63 412.7,33.4 405.7,33.4 405.7,52 405,52 404.8,51.9 390.4,33.4 
		383.1,33.4 383.1,63 390.2,63 390.2,44.4 390.9,44.4 	"
            ></polygon>
            <path
              class="st0"
              d="M431.8,33.4h-10.8V63h10.8c8.3,0,15.1-6.6,15.1-14.8C446.8,40.1,440.1,33.4,431.8,33.4z M430.2,57.2H428V39.3
		h2.3c5.5,0,9.1,3.5,9.1,8.9C439.4,54.8,434.7,57.2,430.2,57.2z"
            ></path>
            <path
              class="st0"
              d="M467.8,32.4c-9.1,0-16.4,6.8-16.4,15.3c0,9.7,6.8,16.4,16.4,16.4c9.7,0,16.4-6.7,16.4-16.4
		C484.3,39.2,476.9,32.4,467.8,32.4z M467.8,57.2c-5.1,0-9-4.2-9-9.5c0-4.5,4.2-8.5,9-8.5c4.8,0,9,4,9,8.5
		C476.8,53,472.9,57.2,467.8,57.2z"
            ></path>
            <polygon
              class="st0"
              points="525.2,33.4 519.4,53.1 518.8,53.1 518.6,52.8 512.7,33.4 507,33.4 500.7,53.1 500,53.1 499.9,52.8 
		494.7,33.4 487.3,33.4 496.1,63 503.6,63 509.6,45.4 510.2,45.4 510.3,45.7 515.6,63 523,63 532.5,33.4 	"
            ></polygon>
            <polygon
              class="st0"
              points="145.7,82.4 149.8,82.4 162.5,10.1 158.5,10.1 	"
            ></polygon>
            <path
              class="st0"
              d="M101.8,16.5l0.7,0.1L98,6.8l-4.5,9.8l0.7-0.1C96.7,16.2,99.3,16.2,101.8,16.5"
            ></path>
            <path
              class="st0"
              d="M121.8,27.5l0.4,0.6l3.7-10.2l-10.1,3.8l0.6,0.4C118.5,23.7,120.3,25.5,121.8,27.5"
            ></path>
            <path
              class="st0"
              d="M128.2,41.9c0.3,2.5,0.3,5.1,0,7.6l-0.1,0.7l9.9-4.6l-9.8-4.5L128.2,41.9z"
            ></path>
            <path
              class="st0"
              d="M122.6,64.2c-1.6,2-3.4,3.8-5.4,5.4l-0.6,0.4l10.2,3.7L123,63.6L122.6,64.2z"
            ></path>
            <path
              class="st0"
              d="M95.2,75.9l-0.7-0.1l4.6,9.9l4.5-9.8l-0.7,0.1C100.3,76.2,97.7,76.2,95.2,75.9"
            ></path>
            <path
              class="st0"
              d="M75.2,64.9l-0.4-0.6L71,74.5l10.1-3.8l-0.6-0.4C78.5,68.7,76.7,66.9,75.2,64.9"
            ></path>
            <path
              class="st0"
              d="M68.8,50.5c-0.3-2.5-0.3-5.1,0-7.6l0.1-0.7L59,46.8l9.8,4.5L68.8,50.5z"
            ></path>
            <path
              class="st0"
              d="M74.4,28.3c1.6-2,3.4-3.8,5.4-5.4l0.6-0.4l-10.2-3.7L74,28.8L74.4,28.3z"
            ></path>
            <path
              class="st0"
              d="M90.9,17.3l-8-7.4l-0.4,10.8l0.6-0.4c2.2-1.3,4.6-2.2,7-2.9L90.9,17.3z"
            ></path>
            <path
              class="st0"
              d="M113.5,20.4l-0.4-10.9l-7.9,7.4l0.7,0.2c2.4,0.7,4.8,1.7,7,2.9L113.5,20.4z"
            ></path>
            <path
              class="st0"
              d="M124.3,30.9c1.3,2.2,2.2,4.6,2.9,7l0.2,0.7l7.4-8l-10.8-0.4L124.3,30.9z"
            ></path>
            <path
              class="st0"
              d="M127.6,53.6c-0.7,2.4-1.7,4.8-2.9,7l-0.4,0.6l10.9-0.4l-7.4-7.9L127.6,53.6z"
            ></path>
            <path
              class="st0"
              d="M106.8,74.9l-0.7,0.2l8,7.4l0.4-10.8l-0.6,0.4C111.6,73.3,109.3,74.3,106.8,74.9"
            ></path>
            <path
              class="st0"
              d="M84.1,72.4L83.5,72l0.4,10.9l7.9-7.4l-0.7-0.2C88.7,74.6,86.3,73.7,84.1,72.4"
            ></path>
            <path
              class="st0"
              d="M72.7,61.6c-1.3-2.2-2.2-4.6-2.9-7l-0.2-0.7l-7.4,8l10.8,0.4L72.7,61.6z"
            ></path>
            <path
              class="st0"
              d="M69.4,38.8c0.7-2.4,1.6-4.8,2.9-7l0.4-0.6l-10.9,0.4l7.4,7.9L69.4,38.8z"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
