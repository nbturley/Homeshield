// import Nav from "../../Components/Nav/Nav";
import "./Homepage.css";
import {HandyMan, USMap, HandyLady, iPadAir, EllipsesBig, EllipsesSmall, TasksCards, TasksCards2} from "../../Images";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Nav from "../../Components/Nav/Nav";

const Homepage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px", // Set rootMargin to a valid value
      threshold: 0.5, // Trigger when 50% of the video is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if videoRef.current is not null
          if (videoRef.current !== null) {
            // Play the video when it becomes visible
            (videoRef.current as HTMLVideoElement).play();
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (videoRef.current !== null) {
      observer.observe(videoRef.current); // Pass a valid DOM element to observe
    }

    return () => {
      observer.disconnect(); // Clean up the observer when component unmounts
    };
  }, []);

  return (
    <>
      <Nav />
      {/* Top Section */}
      <div className="top-container">
        <div className="text-box">
          <h6>BECOME A CONFIDENT HOMEOWNER</h6>
          <h1>Take charge of your home maintenance</h1>
          <p>
            Get your free personalized checklist and feel confident your home is
            in great shape.
          </p>
          <Link to={"/questions1"} className="linkCTA">
            <button className="CTA">Get to-do list</button>
          </Link>
        </div>

        <img
          className="handy-man"
          src={HandyMan}
          alt="handy man holding a tool box"
        />
      </div>

      {/* Map Section */}
      <div className="map-container">
        <img className="US-map" src={USMap} alt="US map" />

        <div className="map-text-box">
          <h1>Get the right maintenance advice for where you live</h1>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Climate-Smart Schedules:</strong> No more guessing when to
            winterize or prep for hurricane season – we adapt tasks based on
            your location.
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Local Resources:</strong> Our pro network understands the
            unique challenges of your area (think heavy snowfall, coastal
            weather, etc.).
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Peace of Mind:</strong> Whether you're in a sunny suburb or
            a bustling city, we'll guide you through home upkeep specific to
            your needs.
          </p>

          <p className="map-footer">
            Our app takes the complexity out of home maintenance by delivering a
            personalized plan based on your exact location.
          </p>
        </div>
      </div>

      {/* DIY Section  */}
      <div className="DIY-container">
        <div className="DIY-text-box">
          <h1>DIY made easy, no matter your skill level</h1>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Confidence Builder:</strong> Our videos are tailored to your
            chosen difficulty level, from total beginner to experienced DIYer.
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>No More Frustration:</strong> Clear, step-by-step
            instructions with proven techniques to ensure your project is a
            success.
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Prepared and Organized:</strong> Every video includes a
            complete materials list, so you're not scrambling mid-project.
          </p>

          <p className="DIY-footer">
            Learn how to tackle home maintenance like a pro with our library of
            instructional videos designed to support you every step of the way.
          </p>
        </div>

        <video
          ref={videoRef}
          className="handy-lady"
          src={HandyLady}
          muted
          loop
          playsInline
          controls
        />
      </div>

      {/* Budget Section */}
      <div className="budget-container">
        <div className="iPad">
          <img
            className="iPad-img"
            src={iPadAir}
            alt="iPad"
          />
          <div>
            <img src={EllipsesBig} className="ellipse1" />
          </div>
          <div>
            {" "}
            <img src={EllipsesSmall} className="ellipseCopy" />
          </div>
        </div>

        <div className="budget-text-box">
          <h1>Smart budgeting for home maintenance</h1>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Know Before You Start:</strong> Get detailed cost estimates
            for each task, including materials and potential labor expenses.
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Informed Decisions:</strong> Compare DIY costs with prices
            from vetted contractors in your area.
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 13.5L9 17.5L19 7.5"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <strong>Control Your Spending:</strong> See where you can save money
            by tackling projects yourself, and know when hiring a pro is the
            wiser choice.
          </p>

          <p className="budget-footer">
            Take the guesswork out of home maintenance costs and make confident
            budgeting decisions with our comprehensive cost estimator.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="CTA-container">
        <div className="CTA-text-box">
          <h1 className="CTA-header">Stress-Free Home? Yes, Please!</h1>
          <p className="CTA-paragraph">
            Let us guide you through essential upkeep, so you can relax and
            enjoy your home.
          </p>
          <Link to={"/questions1"} className="linkCTA">
            <button className="CTA">Show Me How</button>
          </Link>
        </div>
      </div>

      {/* Popular Task Section */}
      <div className="popular-task">
        <h1 className="pop-task">Popular Task:</h1>
        <div className="task-list">
          <img src={TasksCards}/>
          <img src={TasksCards2}/>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="bottom-container">
        <div className="bottom-text-box">
          <h1 className="bottom-header">
            Looking for something more specific?
          </h1>
          <p className="bottom-paragraph">
            Get a clear plan of what to do and when, customized just for you.
          </p>
          <Link to={"/questions1"} className="linkCTA">
            <button className="CTA">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Footer  */}
      <div className="footer">
        <ul>
          <li>
            <Link to={"/Homepage"} className="footer-header">
              Homeshield
            </Link>
          </li>

          <li className="links">About us</li>
          <li className="links">Contact</li>
          <li className="links">Data Policy</li>
          <li className="links">Terms</li>
          <li className="links">Privacy</li>

          <li className="rights">© 2024 HomeShield. All rights reserved.</li>
        </ul>
      </div>
    </>
  );
};
export default Homepage;
