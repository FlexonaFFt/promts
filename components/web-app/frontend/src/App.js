import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./templates/Login";
import Signup from "./templates/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
