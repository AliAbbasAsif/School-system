import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../Pages/AdminControls/Admin";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import QuizApp from "../Pages/QuizApp";
import RegistrationForm from "../Pages/RegistrationForm";
import Results from "../Pages/Results";
import SignUp from "../Pages/SignUp";
import Trainer from "../Pages/Trainer";

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home:id" element={<Home />} />
          <Route path="/" element={<RegistrationForm />} />
          <Route path="admin/*" element={<Admin/>}/>
          <Route path="/quiz" element={<QuizApp/>}/>
          <Route path="/result" element={<Results/>}/>
          <Route path="/trainer" element={<Trainer/>}/>
          <Route path="/course" element={<Courses/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
