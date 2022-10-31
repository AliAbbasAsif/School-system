import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../Pages/AdminControls/Admin";
import AdminQuiz from "../Pages/AdminControls/AdminQuiz";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import QuizApp from "../Pages/QuizApp";
import RegistrationForm from "../Pages/RegistrationForm";
import SignUp from "../Pages/SignUp";

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home:id" element={<Home />} />
          <Route path="/registrationform" element={<RegistrationForm />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path='/adminquiz' element={<AdminQuiz/>}/>
          <Route path="/quiz" element={<QuizApp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
