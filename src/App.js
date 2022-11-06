import { Route, Routes } from "react-router-dom";
import "./App.css";
import Prompt from "./components/Prompt";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Prompt />}/>
        <Route path="/quiz" element={<Quiz />}/>
      </Routes>
      
    </div>
  );
}

export default App;
