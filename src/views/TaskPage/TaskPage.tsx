import "./TaskPage.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { VerifiedBadge, TopRatedBadge } from "../../Images";
import YouTubePlayer from "./VideoPlayer";

const TaskPage: React.FC = () => {

  return (
    <>
      <div className="arrow-div">
        <Link to={"/Dashboard"}>
          <button className="task-back-arrow">
            <FaArrowLeft />
          </button>
        </Link>
      </div>

      <div className="left-div">
        <div className="video-box">
            <h1>Task Name</h1>
            <YouTubePlayer videoId="ED3bfesbE_Y?si=ZzZMnRKjT4g-8iYo" />
        </div>
      </div>

      <div className="right-div">
        <div className="right-header">
          <h1 className="help">Need Help?</h1>
          <p className="help-para">Find trusted Pros near you</p>
        </div>

        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge"/>
            <img src={TopRatedBadge} className="topRatedBadge" />
          </div>
        </div>
      </div>

    </>
  );
};
export default TaskPage;
