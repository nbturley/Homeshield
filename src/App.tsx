import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./views/Homepage/Homepage";
import Questions1 from "./views/Questions/Questions1";
import Dashboard from "./views/Dashboard/Dashboard";
import TaskPage from "./views/TaskPage/TaskPage";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questions1" element={<Questions1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/taskPage" element={<TaskPage />} />
       </Routes>
  </>
);
}

export default App;
