import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./views/Homepage/Homepage";
import Questions1 from "./views/Questions/Questions1";
import Dashboard from "./views/Dashboard/Dashboard";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questions1" element={<Questions1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
);
}

export default App;
