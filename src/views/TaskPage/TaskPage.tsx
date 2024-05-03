import "./TaskPage.css";
// // import { useNavigate } from "react-router-dom";
// // import { FaArrowLeft } from "react-icons/fa6";
import { VerifiedBadge, TopRatedBadge } from "../../Images";
import YouTubePlayer from "./VideoPlayer";
// import { Task } from "../../Components/types";
import { CT1, CT2, CT3, CT4 } from "../../Images";
import { FiPhone } from "react-icons/fi";

// interface TaskPageProps {
//   task: Task;
// }
import { useLocation } from "react-router-dom";
// import YouTube from 'react-youtube';

const TaskPage: React.FC = ({}) => {
  const location = useLocation();
  const taskData = location.state && location.state.taskData;
  // const navigate = useNavigate();

  // // const handleBackToDashboard = () => {
  // //   navigate("/Dashboard");
  // // };
  // console.log("Selected Task in TaskPage:", task);

  if (!taskData) {
    return <div>No task data available</div>;
  }


  return (
    <>
      <div className="left-div">
      {/* <div className="arrow-div">
        <button className="task-back-arrow" onClick={handleBackToDashboard}>
          <FaArrowLeft />
        </button>
      </div> */}
        <div className="video-box">
          <h1 className="learn-how">
            Learn How: {taskData.TaskName}
          </h1>
               <YouTubePlayer videoId="ED3bfesbE_Y?si=ZzZMnRKjT4g-8iYo"  
          // videoId={taskData.DIYVideoLink}
          />
        </div>
        {/* <div className="add-button-div">
          <button className="add-task">Add to My task</button>
        </div> */}

        <div className="needs-div">
          <h1 className="what-you-need">
            Everything you'll need
          </h1>
          <form action="checklist">
            <div className="input-container">
              <input
                type="checkbox"
                id="tools-needed"
                name="tools"
                value="needs"
              />
              <label htmlFor="tools" className="tools-list">
                New filter that fits your HVAC system
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
                <td>${taskData.EstDIYCost} (materials only)</td>
                <td>${taskData.EstContractorCost}</td>
              </tr>
              <tr>
                <td>Skill Level</td>
                <td>{taskData.TaskLevel}</td>
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
            <h1 className="company-name">Cool Breeze Solutions</h1>
          </div>

          <p className="company-info">
          Experts in creating comfortable indoor environments in coastal areas.
          </p>

          <p className="company-price">Price starts from: $175 per unit.</p>
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
            <h1 className="company-name">Salt Air Comfort</h1>
          </div>

          <p className="company-info">
          Experienced in HVAC solutions for homes in humid and salt-air environments.
          </p>

          <p className="company-price">Price starts from: $140 per unit.</p>
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
            <h1 className="company-name">Sea Breeze HVAC</h1>
          </div>

          <p className="company-info">
            Dedicated to providing efficient HVAC services for coastal
            residences.
          </p>

          <p className="company-price">Price starts from: $50 per unit</p>
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
            <h1 className="company-name">Coastal Comfort Systems</h1>
          </div>

          <p className="company-info">
            Dedicated to providing efficient HVAC services for coastal homes.
          </p>

          <p className="company-price">Price starts from: $120 per unit.</p>
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
