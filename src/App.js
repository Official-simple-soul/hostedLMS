import React from "react";
import "./App.css"
import Routes from "./routes/Routes";
import ForgetPassword from './pages/authentication/ForgetPassword'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ForgetPassword /> 
      <Routes />
    </div>
  );
}

export default App;


