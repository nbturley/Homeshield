// import Nav from "../../Components/Nav/Nav";
import "./Homepage.css";
import { FcCheckmark } from "react-icons/fc";

const Homepage = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="top-container">
        <div className="text-box">
          <h6>BECOME A CONFIDENT HOMEOWNER</h6>
          <h1>Take charge of your home maintenance</h1>
          <p>
            Get your free personalized checklist and feel confident your home is
            in great shape.
          </p>
          <button className="CTA">Get to-do list</button>
        </div>

        <img
          className="handy-man"
          src="src\Images\3e86420f31101548936a3397e833fdab.jpg"
          alt="handy man holding a tool box"
        />
      </div>

      <div className="map-container">
        <img
          className="US-map"
          src="src\Images\d955c2d4de3453676d8a85ec76cb2d31.png"
          alt="US map"
        />

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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <strong>Peace of Mind:</strong> Whether you're in a sunny suburb or a
            bustling city, we'll guide you through home upkeep specific to your
            needs.
          </p>

          <p className="map-footer">Our app takes the complexity out of home maintenance by delivering a personalized plan based on your exact location.</p>
        </div>
      </div>
    </>
  );
};
export default Homepage;
