import "./Dashboard.css"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import  { carpet_cleaning, change_hvac_filters }  from "../../Images";

interface Task {
  TaskImageURL: string;
  TaskName: string;
  TaskLevel: string;
  CostDiff: number;
  MaintenanceType: string;
  Frequency: string;
};

// const ImageNames: { [key: string]: string } = {
//   "/src/Images/carpet_cleaning.jpg": carpet_cleaning,
//   "/src/Images/change_hvac_filters.jpg": change_hvac_filters,
// };

console.log(carpet_cleaning);

const Dashboard = () => {
 const location = useLocation();
 const [tasks, setTasks] = useState<Task[]>([]);

useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://homeshield-flask.onrender.com/api/list', {
          method: 'POST',
          body: JSON.stringify(location.state.formData),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        setTasks(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (location.state && location.state.formData) {
    getData();
    }
  }, [location.state]);

  return (
 <>
  <div className="form-header">
        <Link to={"/Questions1"}>
          <button className="back-arrow">
            <FaArrowLeft />
          </button>
        </Link>
      </div>
 <div className="Welcome-container">
  <h1 className="Welcome">Welcome!</h1>
  <p className="Personal-Plan">Your personalized home plan is ready</p>
 <button className="PDF-Download"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3 13.5L3 14.375C3 15.8248 4.17525 17 5.625 17L14.375 17C15.8247 17 17 15.8248 17 14.375L17 13.5M13.5 10L10 13.5M10 13.5L6.5 10M10 13.5L10 3.00003" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
</div>

<div className="card-container">
    {tasks.map((task, index) => (
      
          <div key={index} className="card">
          {task.TaskImageURL === 'change_hvac_filters.jpg' && <img src={change_hvac_filters} alt={task.TaskName} className="card-img" />}
            {task.TaskImageURL === 'roof_inspection.jpg' && <img src={carpet_cleaning} alt={task.TaskName} className="card-img" />}
            
            <div className="card-details">
              <h2>{task.TaskName}</h2>
              <p className="DIY-badge"> DIY level: {task.TaskLevel}</p>
              <p className="DIY-badge"> Category: {task.MaintenanceType}</p>
              <p className="DIY-badge"> Repeat: {task.Frequency}</p>
            </div>
          </div>
        ))}
</div>

 </>
  )
}
export default Dashboard