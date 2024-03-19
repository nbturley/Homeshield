import "./Questions.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

const Questions2 = () => {
  const [formData, setFormData] = useState({
    question5: "",
    question6: "",
    question7: "",
    question8: "",
  });

   // Creating different state variables for the error instead of and object
   const [question5Error, setQuestion5Error] = useState(false);
   const [question6Error, setQuestion6Error] = useState(false);
   const [question7Error, setQuestion7Error] = useState(false);
   const [question8Error, setQuestion8Error] = useState(false);

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

    if (!formData.question5) {
      isFormValid = false;
      setQuestion5Error(true);
    }

    if (!formData.question6) {
      isFormValid = false;
      setQuestion6Error(true);
    }

    if (!formData.question7) {
      isFormValid = false;
      setQuestion7Error(true);
    }

    if (!formData.question8) {
      isFormValid = false;
      setQuestion8Error(true);
    }

    if (isFormValid) {
      //Form submission logic here
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed. Please fill in all required fields.");
    }
    setFormData({
      question5: "",
      question6: "",
      question7: "",
      question8: "",
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
          <label className="question-labels">Question 5:</label>
          <input
            type="text"
            name="question5"
            value={formData.question5}
            onChange={handleChange}
          />
          {question5Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 6:</label>
          <input
            type="text"
            name="question6"
            value={formData.question6}
            onChange={handleChange}
          />
          {question6Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 7:</label>
          <input
            type="text"
            name="question7"
            value={formData.question7}
            onChange={handleChange}
          />
          { question7Error && <div className="error-message">Answer is required.</div>}

          <label className="question-labels">Question 8:</label>
          <input
            type="text"
            name="question8"
            value={formData.question8}
            onChange={handleChange}
          />
          {question8Error && <div className="error-message">Answer is required.</div>
}
          <button className="form-btn">Next</button>
        </form>
      </div>
      </>
  )
}
export default Questions2