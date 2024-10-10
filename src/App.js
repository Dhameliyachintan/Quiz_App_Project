import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./container/pages/Home";
import English from "./component/English";
import Reactjs from "./component/Reactjs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/react" element={<Reactjs />} />
      </Routes>
    </div>
  );
}

export default App;
