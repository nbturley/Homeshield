// import Nav from "../../Components/Nav/Nav";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

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
      {/* <Nav /> */}
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
          src="src\Images\HandyMan.jpg"
          alt="handy man holding a tool box"
        />
      </div>

      {/* Map Section */}
      <div className="map-container">
        <img className="US-map" src="src\Images\USMap.png" alt="US map" />

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
          src="src/Images/HandyLady.mp4"
          muted
          loop
          playsInline
          controls
        />
      </div>

      {/* Budget Section */}
      <div className="budget-container">
        <div className="iPad">
          <img className="iPad-img" src="src/Images/iPad Air Portrait.png" alt="iPad" />
          <img
            src="src/Images/Ellipse (1).png"
            className="ellipse1"
          />
          <img
            src="src/Images/Ellipse copy.png"
            className="ellipseCopy"
          />
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
    </>
  );
};
export default Homepage;
