import "./TaskPage.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { VerifiedBadge, TopRatedBadge } from "../../Images";
import YouTubePlayer from "./VideoPlayer";
import { Task } from "../../Components/types";
// import { BeginnerBadge, intermediateBadge, AdvanceBadge } from "../../Images";


interface TaskPageProps {
  task: Task;
}

const TaskPage: React.FC<TaskPageProps> = ({ task }) => {
const navigate = useNavigate();

const handleBackToDashboard = () => {
  navigate("/Dashboard");
};

  return (
    <>
      <div className="arrow-div">
          <button className="task-back-arrow" onClick={handleBackToDashboard}>
            <FaArrowLeft />
          </button>
      </div>

      <div className="left-div">
        <div className="video-box">
            <h1 className="learn-how">Learn How: {task && task.TaskName}</h1>
            {/* <p className="DIY-badge"> DIY level:   
              {task.TaskLevel === "Beginner" && <img src={BeginnerBadge} alt={task.TaskLevel} />}
              
              {task.TaskLevel === "Intermediate" && <img src={intermediateBadge} alt={task.TaskLevel} />}

              {task.TaskLevel === "Advanced" && <img src={AdvanceBadge} alt={task.TaskLevel} />}</p> */}

            <YouTubePlayer videoId="ED3bfesbE_Y?si=ZzZMnRKjT4g-8iYo" />
        </div>

        <div>
          <h1 className="what-you-need">Everything you'll need</h1>
          <form action="checklist">
            <input type="checkbox" id="tools-needed" name="tools" value="needs"/>
            <label htmlFor="tools">New filter that fits your furnace</label>

            <input type="checkbox" id="tools-needed" name="tools" value="needs"/>
            <label htmlFor="tools">Sharpie marker</label>

            <input type="checkbox" id="tools-needed" name="tools" value="needs"/>
            <label htmlFor="tools">Screwdriver or pliers
</label>
          </form>
        </div>

        <div>
          <h1 className="DIY-or-pro">Should you DIY or Hire a pro?</h1>
          <p className="decision">We know trying a new service out can be scary. We break down the factors to consider for the best decision for your home.</p>
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
