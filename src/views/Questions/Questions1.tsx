import "./Questions.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Questions1 = () => {
  const [formData, setFormData] = useState({
    question1: "choice",
    washer: false,
    dryer: false,
    dishwasher: false,
    carpet: false,
    question3: false,
    question4: false,
  });

  // Creating different state variables for the error instead of an object
  const [question1Error, setQuestion1Error] = useState(false);

  useEffect(() => {
    // Load cached form data if available
    const cachedFormData = JSON.parse(localStorage.getItem("formData") || "{}");
    setFormData(cachedFormData);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : event.target.value,
    });
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
          <label className="question-labels">House</label>
          <input
            className="home-type"
            type="radio"
            id="house"
            name="question1"
            checked={formData.question1 === "house"}
            onChange={() => setFormData({ ...formData, question1: "house" })}
          />
          {question1Error && (
            <div className="error-message">Answer is required.</div>
          )}
          <p>Standalone home with a yard. You're responsible for all upkeep.</p>

          <label className="question-labels">Condo</label>
          <input
            className="home-type"
            type="radio"
            id="condo"
            name="question1"
            checked={formData.question1 === "condo"}
            onChange={() => setFormData({ ...formData, question1: "condo" })}
          />
          {question1Error && (
            <div className="error-message">Answer is required.</div>
          )}
          <p>Own your unit, share common areas with neighbors.</p>

          <label className="question-labels">Apartment</label>
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
          {question1Error && (
            <div className="error-message">Answer is required.</div>
          )}
          <p>Rented unit, landlord handles most maintenance.</p>

          <h2>Amenities</h2>
          <label className="question-labels">Washer:</label>
          <input
            type="checkbox"
            name="washer"
            checked={formData.washer}
            onChange={handleChange}
          />
          <label className="question-labels">Dryer:</label>
          <input
            type="checkbox"
            name="dryer"
            checked={formData.dryer}
            onChange={handleChange}
          />
          <label className="question-labels">Dishwasher:</label>
          <input
            type="checkbox"
            name="dishwasher"
            checked={formData.dishwasher}
            onChange={handleChange}
          />
          <label className="question-labels">Carpet:</label>
          <input
            type="checkbox"
            name="carpet"
            checked={formData.carpet}
            onChange={handleChange}
          />
          <h2>Special requirements</h2>
          <label className="question-labels">
            Do you have outdoor areas to maintain?
          </label>
          <input
            type="checkbox"
            name="question3"
            checked={formData.question3}
            onChange={handleChange}
          />
          <label className="question-labels">
            Do you have a garbage disposal?
          </label>
          <input
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
