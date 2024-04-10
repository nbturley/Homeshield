import "./TaskPage.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { VerifiedBadge, TopRatedBadge } from "../../Images";
import YouTubePlayer from "./VideoPlayer";
import { Task } from "../../Components/types";
// import { BeginnerBadge, intermediateBadge, AdvanceBadge } from "../../Images";
import { Caulk } from "../../Images";
import { FiPhone } from "react-icons/fi";


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
            <h1 className="learn-how">Learn How: Change Furnace Filter {task && task.TaskName}</h1>
            {/* <p className="DIY-badge"> DIY level:   
              {task.TaskLevel === "Beginner" && <img src={BeginnerBadge} alt={task.TaskLevel} />}
              
              {task.TaskLevel === "Intermediate" && <img src={intermediateBadge} alt={task.TaskLevel} />}

              {task.TaskLevel === "Advanced" && <img src={AdvanceBadge} alt={task.TaskLevel} />}</p> */}

            <YouTubePlayer videoId="ED3bfesbE_Y?si=ZzZMnRKjT4g-8iYo" />
        </div>

        <div className="needs-viv">
          <h1 className="what-you-need">Everything you'll need</h1>
          <form action="checklist">
            <div className="input-container">
            <input type="checkbox" id="tools-needed" name="tools" value="needs"/>
            <label htmlFor="tools" className="tools-list">New filter that fits your furnace</label>
            </div>

            <div className="input-container">
            <input type="checkbox" id="tools-needed" name="tools" value="needs"/>
            <label htmlFor="tools" className="tools-list">Sharpie marker</label>
            </div>

<div className="input-container">
            <input type="checkbox" id="tools-needed" name="tools" value="needs"/>
            <label htmlFor="tools" className="tools-list">Screwdriver or pliers
</label>
</div>
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
            <img src={VerifiedBadge} className="verifiedBadge badge"/>
            <img src={TopRatedBadge} className="topRatedBadge badge" />
          </div>

<div className="image-and-company">
          <div className="image-div">
            <img src={Caulk} alt="contractor-image" className="contractor-img" />
          </div>
          <h1 className="company-name">ABC Windows & Doors</h1>
        </div>

        <p className="company-info">Window/door specialists, 15+ years experience.</p>

        <p className="company-price">Price starts from: $75 per window</p>
        <div className="button-container">
        <button className="contractor-btn"><FiPhone /> Contact</button>
        </div>
        </div>
        

        
        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge"/>
            <img src={TopRatedBadge} className="topRatedBadge badge" />
          </div>

<div className="image-and-company">
          <div className="image-div">
            <img src={Caulk} alt="contractor-image" className="contractor-img" />
          </div>
          <h1 className="company-name">Smith's Caulking & Sealing</h1>
        </div>

        <p className="company-info">20+ years specializing in weatherproofing and draft prevention.</p>

        <p className="company-price">Price starts from: $65 per window</p>
        <div className="button-container">
        <button className="contractor-btn"><FiPhone /> Contact</button>
        </div>
        </div>

        
        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge"/>
          </div>

<div className="image-and-company">
          <div className="image-div">
            <img src={Caulk} alt="contractor-image" className="contractor-img" />
          </div>
          <h1 className="company-name">The Detail Doctor</h1>
        </div>

        <p className="company-info">Meticulous handyman services, focused on energy-saving upgrades.</p>

        <p className="company-price">Price starts from: $50 per window</p>
        <div className="button-container">
        <button className="contractor-btn"><FiPhone /> Contact</button>
        </div>
        </div>

        
        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge"/>
          </div>

<div className="image-and-company">
          <div className="image-div">
            <img src={Caulk} alt="contractor-image" className="contractor-img" />
          </div>
          <h1 className="company-name">Coastal Home Pros</h1>
        </div>

        <p className="company-info">Experts in sealing homes in humid, salt-air environments.</p>

        <p className="company-price">Price starts from: $80 per window</p>
        <div className="button-container">
        <button className="contractor-btn"><FiPhone /> Contact</button>
        </div>
        </div>

        
        <div className="contractor-card">
          <div className="badge-div">
            <img src={VerifiedBadge} className="verifiedBadge badge"/>
          </div>

<div className="image-and-company">
          <div className="image-div">
            <img src={Caulk} alt="contractor-image" className="contractor-img" />
          </div>
          <h1 className="company-name">Joe's Handyman Services</h1>
        </div>

        <p className="company-info">Reliable, affordable help for basic weatherproofing tasks.</p>

        <p className="company-price">Price starts from: $45 per window</p>
        <div className="button-container">
        <button className="contractor-btn"><FiPhone /> Contact</button>
        </div>
        </div>
       
        
      </div>

    </>
  );
};
export default TaskPage;
