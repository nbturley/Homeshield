import "./App.css";
import "./index.css"
import Homepage from "./views/Homepage/Homepage";
import Questions from "./views/Questions/Questions";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route>
      <Route path='/' element={<Homepage />}/>
      <Route path='/' element={<Questions />}/>
      </Route>
    </Routes>
      <h1>Welcome to Homeshield!</h1>
      <h2>
        Building tools to make home maintenance a little less of a headache!
      </h2>
      <h2>Created by:</h2>
      <h3>Product Manager: Kat King</h3>
      <h3>Designer: Polina Vinnikova</h3>
      <h3>Software Developer: Nathanael Turley</h3>
      <h3>Software Developer: Adrienne Daniels</h3> 
    </>
  );
}
export default App;
