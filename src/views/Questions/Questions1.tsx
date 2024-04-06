import "./Questions.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Questions1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    homeType: "",
    washer: false,
    dryer: false,
    dishwasher: false,
    carpet: false,
    yard: false,
    disposal: false,
  });

  // Error message state
  const [question1Error, setQuestion1Error] = useState(false);

  // Load cached form data if available
  useEffect(() => {
    const cachedFormData = JSON.parse(localStorage.getItem("formData") || "{}");
    setFormData(cachedFormData);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type } = event.target;

    setFormData({
      ...formData,
      homeType: "house",
    });

    setFormData({
      ...formData,
      homeType: "condo",
    });

    setFormData({
      ...formData,
      homeType: "apartment",
    });

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData, "line 47");

    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // validate form input
    let isFormValid = false;

    if (
      formData.homeType === "house" ||
      formData.homeType === "condo" ||
      formData.homeType === "apartment"
    ) {
      isFormValid = true;
    } else {
      setQuestion1Error(true);
    }

    if (isFormValid) {
      //Form submission logic here
      alert("Form submitted successfully!");
      navigate("/dashboard", {state: {formData: formData}});
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
          <div className="property-type">
            <div className="home-type-container">
              <div className="input-row">
                <input
                  className="home-type"
                  type="radio"
                  id="house"
                  name="question1"
                  checked={formData.homeType === "house"}
                  onChange={() =>
                    setFormData({ ...formData, homeType: "house" })
                  }
                />
                <label className="question-labels">House</label>
                {question1Error && (
                  <div className="error-message">Answer is required.</div>
                )}
              </div>
              <div className="p-row">
                <p className="home-def">
                  Standalone home with a yard. You're responsible for all
                  upkeep.
                </p>
              </div>
            </div>

            <div className="home-type-container">
              <div className="input-row">
                <input
                  className="home-type"
                  type="radio"
                  id="condo"
                  name="question1"
                  checked={formData.homeType === "condo"}
                  onChange={() =>
                    setFormData({ ...formData, homeType: "condo" })
                  }
                />
                <label className="question-labels">Condo</label>
                {question1Error && (
                  <div className="error-message">Answer is required.</div>
                )}
              </div>
              <div className="p-row">
                <p className="home-def">
                  Own your unit, share common areas with neighbors.
                </p>
              </div>
            </div>

            <div className="home-type-container">
              <div className="input-row">
                <input
                  className="home-type"
                  type="radio"
                  id="apartment"
                  name="question1"
                  checked={formData.homeType === "apartment"}
                  onChange={() =>
                    setFormData({ ...formData, homeType: "apartment" })
                  }
                />
                <label className="question-labels">Apartment</label>
                {question1Error && (
                  <div className="error-message">Answer is required.</div>
                )}
              </div>
              <div className="p-row">
                <p className="home-def">
                  Rented unit, landlord handles most maintenance.
                </p>
              </div>
            </div>
          </div>

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
          <label className="question-labels">
            Do you have outdoor areas to maintain?
            <div className="switch">
              <input
                type="checkbox"
                name="yard"
                checked={formData.yard}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </div>
          </label>

          <br></br>
          <label className="question-labels">
            Do you have a garbage disposal?
            <div className="switch">
              <input
                type="checkbox"
                name="disposal"
                checked={formData.disposal}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </div>
          </label>

          <button type="submit" className="form-btn">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Questions1;
