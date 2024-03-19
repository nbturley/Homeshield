import "./Questions.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

const Questions1 = () => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

   // Creating different state variables for the error instead of and object
   const [question1Error, setQuestion1Error] = useState(false);
   const [question2Error, setQuestion2Error] = useState(false);
   const [question3Error, setQuestion3Error] = useState(false);
   const [question4Error, setQuestion4Error] = useState(false);

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

    if (!formData.question1) {
      isFormValid = false;
      setQuestion1Error(true);
    }

    if (!formData.question2) {
      isFormValid = false;
      setQuestion2Error(true);
    }

    if (!formData.question3) {
      isFormValid = false;
      setQuestion3Error(true);
    }

    if (!formData.question4) {
      isFormValid = false;
      setQuestion4Error(true);
    }


    if (isFormValid) {
      //Form submission logic here
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed. Please fill in all required fields.");
    }
    setFormData({
      question1: "",
      question2: "",
      question3: "",
      question4: "",
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
            value={formData.question1}
            onChange={handleChange}
          />
         {question1Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 2:</label>
          <input
            type="text"
            name="question2"
            value={formData.question2}
            onChange={handleChange}
          />
{question2Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 3:</label>
          <input
            type="text"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
          />
          { question3Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 4:</label>
          <input
            type="text"
            name="question4"
            value={formData.question4}
            onChange={handleChange}
          />
          {question4Error && <div className="error-message">Answer is required.</div>}
          
          <button className="form-btn">Next</button>
        </form>
      </div>
      </>
  )
}
export default Questions1

