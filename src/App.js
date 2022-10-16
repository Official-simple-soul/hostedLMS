import React from "react";
import { Routes, Route } from "react-router-dom"
import VerifyEmail from "./pages/login/VerifyEmail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;
