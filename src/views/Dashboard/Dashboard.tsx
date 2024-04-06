import "./Dashboard.css"
import { HVAC, Caulk, SmokeDetector, BeginnerBadge, HVACBadge, SafetyBadge, ExteriorBadge } from "../../Images";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Dashboard = () => {
 const location = useLocation();
 const { formData } = location.state;

 useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('https://homeshield-flask.onrender.com/api/list', {
           method: 'POST',
           body: JSON.stringify(formData),
           headers: {
             'Content-Type': 'application/json'
           }
         });
 
         const data = await response.json();
         console.log(data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     fetchData();
   }, [formData]);

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
  <div className="card">
    <img src={HVAC} alt="Card Image" className="card-img"/>
    <div className="card-details">
      <h2>Change your HVAC air filters</h2>
      <p>Swap out dirty HVAC filters for improved indoor air quality, better airflow, and lower energy bills.</p>
      <p className="DIY-badge">DIY level: <img src={BeginnerBadge} className="badge-img"/></p>
      
      
      <p className="DIY-category">Category: <img src={HVACBadge} className="badge-img"/></p>
    </div>
  </div>

  <div className="card">
    <img src={Caulk} alt="Card Image" className="card-img"/>
    <div className="card-details">
      <h2>Caulk windows and doors to seal drafts</h2>
      <p>Prevent heat loss, lower your energy bills, and keep pests out by caulking gaps around windows and doors.</p>

      <p className="DIY-badge">DIY level: <img src={BeginnerBadge} className="badge-img"/></p>
      
      
      <p className="DIY-category">Category: <img src={SafetyBadge} className="badge-img"/></p>
    </div>
  </div>

  <div className="card">
    <img src={SmokeDetector} alt="Card Image" className="card-img" />
    <div className="card-details">
      <h2>Test your smoke and CO detectors</h2>
      <p>Test the batteries and functionality of your smoke and carbon monoxide detectors for peace of mind.</p>

      <p className="DIY-badge">DIY level: <img src={BeginnerBadge} className="badge-img"/></p>
      
      
      <p className="DIY-category">Category: <img src={ExteriorBadge} className="badge-img"/></p>
    </div>
  </div>
</div>

 </>
  )
}
export default Dashboard