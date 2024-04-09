import "./Dashboard.css"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import  { carpet_cleaning, change_hvac_filters, clean_dryer_vents, dishwasher_maintenance, electrical_system_check, exterior_painting, fire_safety_inspection, garbage_disposal, gutter_cleaning, lawn_garden_maintenance, pest_control, plumbing_repairs, pressureWash, roof_inspection, washing_machine, water_heater_flush, BeginnerBadge, HVACBadge, SafetyBadge, ExteriorBadge, IndoorBadge, ApplianceBadge, intermediateBadge, AdvanceBadge, ThreeMonthsBadge, SixMonthsBadge, YearBadge, FiveYearBadge  }  from "../../Images";

// Unused badges
// ThreeMonthsBadge, SixMonthsBadge, YearBadge, FiveYearBadge, SeasonalBadge,

interface Task {
  TaskImageURL: string;
  TaskName: string;
  TaskLevel: string;
  CostDiff: number;
  MaintenanceType: string;
  Frequency: string;
};

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
            {task.TaskImageURL === 'carpet_cleaning.jpg' && <img src={carpet_cleaning} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'clean_dryer_vents.jpg' && <img src={clean_dryer_vents} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'dishwasher_maintenance.jpg' && <img src={dishwasher_maintenance} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'electrical_system_check.jpg' && <img src={electrical_system_check} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'exterior_painting.jpg' && <img src={exterior_painting} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'fire_safety_inspection.jpg' && <img src={fire_safety_inspection} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'garbage_disposal.jpg' && <img src={garbage_disposal} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'gutter_cleaning.jpg' && <img src={gutter_cleaning} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'lawn_garden_maintenance.jpg' && <img src={lawn_garden_maintenance} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'pest_control.jpg' && <img src={pest_control} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'pluming_repairs.jpg' && <img src={plumbing_repairs} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'pressureWash.jpg' && <img src={pressureWash} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'roof_inspection.jpg' && <img src={roof_inspection} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'washing_machine.jpg' && <img src={washing_machine} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'water_heater_flush.jpg' && <img src={water_heater_flush} alt={task.TaskName} className="card-img" />}

            {task.TaskImageURL === 'plumbing_repairs.jpg' && <img src={plumbing_repairs} alt={task.TaskName} className="card-img" />}

           
            <div className="card-details">
              <h2>{task.TaskName}</h2>
              <p className="DIY-badge"> DIY level:   
              {task.TaskLevel === "Beginner" && <img src={BeginnerBadge} alt={task.TaskLevel} />}
              
              {task.TaskLevel === "Intermediate" && <img src={intermediateBadge} alt={task.TaskLevel} />}

              {task.TaskLevel === "Advanced" && <img src={AdvanceBadge} alt={task.TaskLevel} />}</p>
        

              <p className="DIY-badge"> Category: {task.MaintenanceType === "HVAC" && <img src={HVACBadge} alt={task.MaintenanceType} />}

              {task.MaintenanceType === "Interior" && <img src={IndoorBadge} alt={task.MaintenanceType} />}

              {task.MaintenanceType === "Plumbing" && <img src={IndoorBadge} alt={task.MaintenanceType} />}

              {task.MaintenanceType === "Electrical" && <img src={IndoorBadge} alt={task.MaintenanceType} />}

              {task.MaintenanceType === "Appliance" && <img src={ApplianceBadge} alt={task.MaintenanceType} />}

              {task.MaintenanceType === "Exterior" && <img src={ExteriorBadge} alt={task.MaintenanceType} />}
              
              {task.MaintenanceType === "Pest Control" && <img src={IndoorBadge} alt={task.MaintenanceType} />}

              {task.MaintenanceType === "Safety" && <img src={SafetyBadge} alt={task.MaintenanceType} />}
              
              </p>


              <p className="DIY-badge"> Repeat: {task.Frequency}
              
              {task.MaintenanceType === "Every 3 Months" && <img src={ThreeMonthsBadge} alt={task.Frequency} />}

              {task.MaintenanceType === "Every Year" && <img src={YearBadge} alt={task.Frequency} />}
           

              {task.MaintenanceType === "Every 6 Months" && <img src={SixMonthsBadge} alt={task.Frequency} />}

              {/* {task.MaintenanceType === "Every 2 Weeks" && <img src={} alt={task.Frequency} />} */}

              {task.MaintenanceType === "Every 6-12 Months" && <img src={SixMonthsBadge} alt={task.Frequency} />}


              {task.MaintenanceType === "Every 5-10 Years" && <img src={FiveYearBadge} alt={task.Frequency} />}
{/* 
              {task.MaintenanceType === "Every Month" && <img src={} alt={task.Frequency} />} */}
      
              </p>
            </div>
          </div>
        ))}
</div>

 </>
  )
}
export default Dashboard