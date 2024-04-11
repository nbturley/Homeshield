import "./TaskPage.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { VerifiedBadge, TopRatedBadge } from "../../Images";
import YouTubePlayer from "./VideoPlayer";
// import { Task } from "../../Components/types";
import { CT1, CT2, CT3, CT4 } from "../../Images";
import { FiPhone } from "react-icons/fi";

// interface TaskPageProps {
//   task: Task;
// }

const TaskPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <div className="left-div">
      <div className="arrow-div">
        <button className="task-back-arrow" onClick={handleBackToDashboard}>
          <FaArrowLeft />
        </button>
      </div>
        <div className="video-box">
          <h1 className="learn-how">
            Learn How: Change Furnace Filter 
            {/* {task && task.TaskName} */}
          </h1>
          <YouTubePlayer videoId="ED3bfesbE_Y?si=ZzZMnRKjT4g-8iYo" />
        </div>
<div className="add-button-div">
        <button className="add-task">Add to My task</button>
        </div>

        <div className="needs-div">
          <h1 className="what-you-need">Everything you'll need</h1>
          <form action="checklist">
            <div className="input-container">
              <input
                type="checkbox"
                id="tools-needed"
                name="tools"
                value="needs"
              />
              <label htmlFor="tools" className="tools-list">
                New filter that fits your furnace
              </label>
            </div>

            <div className="input-container">
              <input
                type="checkbox"
                id="tools-needed"
                name="tools"
                value="needs"
              />
              <label htmlFor="tools" className="tools-list">
                Sharpie marker
              </label>
            </div>

            <div className="input-container">
              <input
                type="checkbox"
                id="tools-needed"
                name="tools"
                value="needs"
              />
              <label htmlFor="tools" className="tools-list">
                Screwdriver or pliers
              </label>
            </div>
          </form>
        </div>

        <div className="pro">
          <h1 className="DIY-or-pro">Should you DIY or Hire a pro?</h1>
          <p className="decision">
            We know trying a new service out can be scary. We break down the
            factors to consider for the best decision for your home.
          </p>
        </div>

        <div>
          <table>
            <thead>
            <tr>
              <th>Feature</th>
              <th>DIY</th>
              <th>Hire a Pro</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Materials</td>
              <td>
                New filter that fits your furnace, sharpie marker, screwdriver
                or pliers
              </td>
              <td>Contractor provides all materials</td>
            </tr>
            <tr>
              <td>Estimated Time</td>
              <td>5-10 Minutes</td>
              <td>Varies, typically faster than DIY</td>
            </tr>
            <tr>
              <td>Cost</td>
              <td>$10-$30 (materials only)</td>
              <td>$50 to $150 per hour</td>
            </tr>
            <tr>
              <td>Skill Level</td>
              <td>Beginner to Intermediate</td>
              <td>Assumed professional expertise</td>
            </tr>
            <tr>
              <td>Additional Considerations</td>
              <td>Mess potential, time commitment</td>
              <td>
                Access to specialized tools, potential for faster completion
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT SIDE OF PAGE */}
      <div className="right-div">
        <div className="right-header">
          <h1 className="help">Need Help?</h1>
          <p className="help-para">Find trusted Pros near you</p>
        </div>

        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge" />
            <img src={TopRatedBadge} className="topRatedBadge badge" />
          </div>

          <div className="image-and-company">
            <div className="image-div">
              <img
                src={CT1}
                alt="contractor-image"
                className="contractor-img"
              />
            </div>
            <h1 className="company-name">ABC Windows & Doors</h1>
          </div>

          <p className="company-info">
            Window/door specialists, 15+ years experience.
          </p>

          <p className="company-price">Price starts from: $75 per window</p>
          <div className="button-container">
            <button className="contractor-btn">
              <FiPhone /> Contact
            </button>
          </div>
        </div>

        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge" />
            <img src={TopRatedBadge} className="topRatedBadge badge" />
          </div>

          <div className="image-and-company">
            <div className="image-div">
              <img
                src={CT2}
                alt="contractor-image"
                className="contractor-img"
              />
            </div>
            <h1 className="company-name">Smith's Caulking & Sealing</h1>
          </div>

          <p className="company-info">
            20+ years specializing in weatherproofing and draft prevention.
          </p>

          <p className="company-price">Price starts from: $65 per window</p>
          <div className="button-container">
            <button className="contractor-btn">
              <FiPhone /> Contact
            </button>
          </div>
        </div>

        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge" />
          </div>

          <div className="image-and-company">
            <div className="image-div">
              <img
                src={CT3}
                alt="contractor-image"
                className="contractor-img"
              />
            </div>
            <h1 className="company-name">The Detail Doctor</h1>
          </div>

          <p className="company-info">
            Meticulous handyman services, focused on energy-saving upgrades.
          </p>

          <p className="company-price">Price starts from: $50 per window</p>
          <div className="button-container">
            <button className="contractor-btn">
              <FiPhone /> Contact
            </button>
          </div>
        </div>

        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge" />
          </div>

          <div className="image-and-company">
            <div className="image-div">
              <img
                src={CT4}
                alt="contractor-image"
                className="contractor-img"
              />
            </div>
            <h1 className="company-name">Coastal Home Pros</h1>
          </div>

          <p className="company-info">
            Experts in sealing homes in humid, salt-air environments.
          </p>

          <p className="company-price">Price starts from: $80 per window</p>
          <div className="button-container">
            <button className="contractor-btn">
              <FiPhone /> Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskPage;
