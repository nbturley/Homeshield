// import "./Questions.css";
// import { useState, ChangeEvent, FormEvent } from "react";

// const Questions = () => {
//   const [formData, setFormData] = useState({
//     question1: "",
//     question2: "",
//     question3: "",
//     question4: "",
//     question5: "",
//     question6: "",
//     question7: "",
//     question8: "",
//     question9: "",
//     question10: "",
//   });

//   const handleFormSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   const handleChange = (event: ChangeEvent) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };
//   return (
//     <>
//       <div className="form-container">
//         <form onSubmit={handleFormSubmit}>
//           <label className="question-labels">Questions 1:</label>
//           <input
//             type="text"
//             name="question1"
//             value={formData.question1}
//             onChange={handleChange}
//           />

//           <label className="question-labels">Question 2:</label>
//           <input
//             type="text"
//             name="question2"
//             value={formData.question2}
//             onChange={handleChange}
//           />

//           <label className="question-labels">Question 3:</label>

//           <label className="question-labels">Question 4:</label>

//           <label className="question-labels">Question 5:</label>

//           <label className="question-labels">Question 6:</label>

//           <label className="question-labels">Question 7:</label>

//           <label className="question-labels">Question 8:</label>

//           <label className="question-labels">Question 9:</label>

//           <label className="question-labels">Question 10:</label>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Questions;
