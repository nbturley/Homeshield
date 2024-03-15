import "./App.css";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// import Homepage from "./views/Homepage/Homepage";
// import Questions from "./views/Questions/Questions";
// import { Route, Routes } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
  });

  // Creating different state variables for the error instead of and object
  const [question1Error, setQuestion1Error] = useState(false);
  const [question2Error, setQuestion2Error] = useState(false);
  const [question3Error, setQuestion3Error] = useState(false);
  const [question4Error, setQuestion4Error] = useState(false);
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
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",});
      // setQuestion1Error(false);
      // setQuestion2Error(false);
      // setQuestion3Error(false);
      // setQuestion4Error(false);
      // setQuestion5Error(false);
      // setQuestion6Error(false);
      // setQuestion7Error(false);
      // setQuestion8Error(false);
    };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(({ ...formData, [name]: value }));
  };

  return (
    <>
      {/* <Routes>
      <Route>
      <Route path='/' element={<Homepage />}/>
      <Route path='/' element={<Questions />}/>
      </Route>
    </Routes> */}
      <h1>Welcome to Homeshield!</h1>

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
          <button type="submit" className="form-btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
