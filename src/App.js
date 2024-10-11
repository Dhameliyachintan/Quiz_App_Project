import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./container/pages/Home";
import English from "./component/English";
import Reactjs from "./component/Reactjs";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/english" element={<English />} />
          <Route path="/react" element={<Reactjs />} />
        </Routes>
      </SnackbarProvider>
    </div>
  );
}

export default App;
