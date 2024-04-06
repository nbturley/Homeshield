import "./TaskPage.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { VerifiedBadge, TopRatedBadge } from "../../Images";

const TaskPage = () => {
  return (
    <>
      <div className="arrow-div">
        <Link to={"/Dashboard"}>
          <button className="task-back-arrow">
            <FaArrowLeft />
          </button>
        </Link>
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

      <div className="left-div">Left Side</div>
    </>
  );
};
export default TaskPage;
