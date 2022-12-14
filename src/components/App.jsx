import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Women from "./views/Women";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
