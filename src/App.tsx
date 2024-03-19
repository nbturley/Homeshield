import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import Homepage from "./views/Homepage/Homepage";
import Questions1 from "./views/Questions/Questions1";
import Questions2 from "./views/Questions/Questions2";
import Questions3 from "./views/Questions/Questions3";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questions1" element={<Questions1 />} />
      <Route path="/questions2" element={<Questions2 />} />
      <Route path="/questions3" element={<Questions3 />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
);
}

export default App;
