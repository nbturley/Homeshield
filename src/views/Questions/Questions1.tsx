import "./Questions.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Questions1 = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    question1: "choice",
    washer: false,
    dryer: false,
    dishwasher: false,
    carpet: false,
    question3: false,
    question4: false,
  });

  // Error message state
  const [question1Error, setQuestion1Error] = useState(false);

  // Load cached form data if available
  useEffect(() => {
    const cachedFormData = JSON.parse(localStorage.getItem("formData") || "{}");
    setFormData(cachedFormData);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type, value } = event.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);

    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // validate form input
    let isFormValid = true;

    if (formData.question1 === "choice") {
      isFormValid = false;
      setQuestion1Error(true);
    }

    if (isFormValid) {
      //Form submission logic here
      alert("Form submitted successfully!");
      navigate("/dashboard")
    } else {
      alert("Form submission failed. Please fill in all required fields.");
    }
  
  };


  return (
    <>
      <div className="form-header">
        <Link to={"/"}>
          <button className="back-arrow">
            <FaArrowLeft />
          </button>
        </Link>
        <h1>HomeShield</h1>
        <p>
          Let us know about your living space and we'll personalize your plan
          accordingly.
        </p>
      </div>

      {/* Questions Form */}
      <div className="form-container">
        <h2>Type of property</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            className="home-type"
            type="radio"
            id="house"
            name="question1"
            checked={formData.question1 === "house"}
            onChange={() => setFormData({ ...formData, question1: "house" })}
          />
          <label className="question-labels">House</label>
          {question1Error && (
            <div className="error-message">Answer is required.</div>
          )}
          <p className="home-def">
            Standalone home with a yard. You're responsible for all upkeep.
          </p>

          <input
            className="home-type"
            type="radio"
            id="condo"
            name="question1"
            checked={formData.question1 === "condo"}
            onChange={() => setFormData({ ...formData, question1: "condo" })}
          />
          <label className="question-labels">Condo</label>
          {question1Error && (
            <div className="error-message">Answer is required.</div>
          )}
          <p className="home-def">
            Own your unit, share common areas with neighbors.
          </p>

          <input
            className="home-type"
            type="radio"
            id="apartment"
            name="question1"
            checked={formData.question1 === "apartment"}
            onChange={() =>
              setFormData({ ...formData, question1: "apartment" })
            }
          />
          <label className="question-labels">Apartment</label>
          {question1Error && (
            <div className="error-message">Answer is required.</div>
          )}
          <p className="home-def">
            Rented unit, landlord handles most maintenance.
          </p>

          <h2>Amenities</h2>
          <input
            type="checkbox"
            name="washer"
            checked={formData.washer}
            onChange={handleChange}
          />
          <label className="question-labels">Washer</label>

          <br></br>

          <input
            type="checkbox"
            name="dryer"
            checked={formData.dryer}
            onChange={handleChange}
          />
          <label className="question-labels">Dryer</label>

          <br></br>

          <input
            type="checkbox"
            name="dishwasher"
            checked={formData.dishwasher}
            onChange={handleChange}
          />
          <label className="question-labels">Dishwasher</label>

          <br></br>
          <input
            type="checkbox"
            name="carpet"
            checked={formData.carpet}
            onChange={handleChange}
          />
          <label className="question-labels">Carpet</label>

          <h2>Special requirements</h2>
          <label className="question-labels" id="toggle-container">
            Do you have outdoor areas to maintain?
            <div className="toggle-switch">
              <div className="toggle-handle"></div>
            </div>
          </label>
          <input
            className="special-req"
            type="checkbox"
            name="question3"
            checked={formData.question3}
            onChange={handleChange}
          />

          <br></br>
          <label className="question-labels" id="toggle-container">
            Do you have a garbage disposal?
            <div className="toggle-switch">
              <div className="toggle-handle"></div>
            </div>
          </label>
          <input
            className="special-req"
            type="checkbox"
            name="question4"
            checked={formData.question4}
            onChange={handleChange}
          />

          <button type="submit" className="form-btn">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Questions1;
