import "./Questions.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

const Questions3 = () => {
  const [formData, setFormData] = useState({
    question9: "",
    question10: "",
  });

   // Creating different state variables for the error instead of and object
   const [question9Error, setQuestion9Error] = useState(false);
   const [question10Error, setQuestion10Error] = useState(false);

   useEffect(() => {
    // Load cached form data if available
    const cachedFormData = JSON.parse(localStorage.getItem("formData") || "{}");
    setFormData(cachedFormData);
  }, []);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);

    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // validate form input
    let isFormValid = true;

    if (!formData.question9) {
      isFormValid = false;
      setQuestion9Error(true);
    }

    if (!formData.question10) {
      isFormValid = false;
      setQuestion10Error(true);
    }

    if (isFormValid) {
      //Form submission logic here
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed. Please fill in all required fields.");
    }
    setFormData({
      question9: "",
      question10: "",
    });
    };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(({ ...formData, [name]: value }));
  };
  
    
  return (
    <>
    <div className="form-container">
      <h4>Please tell us about your home</h4>
        <form onSubmit={handleFormSubmit}>
          <label className="question-labels">Questions 1:</label>
          <input
            type="text"
            name="question1"
            value={formData.question9}
            onChange={handleChange}
          />
         {question9Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 2:</label>
          <input
            type="text"
            name="question2"
            value={formData.question10}
            onChange={handleChange}
          />
{question10Error && <div className="error-message">Answer is required.</div>}

      
          <button type="submit" className="form-btn">Submit</button>
        </form>
      </div>
      </>
  )
}
export default Questions3