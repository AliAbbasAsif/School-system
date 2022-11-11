import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../Pages/AdminControls/Admin";
import Courses from "../Pages/Courses";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
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
          {/* <Route path="/home:id" element={<Home />} /> */}
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="admin/*" element={<Admin/>}/>
          <Route path="/admin" element={<Login/>}/>
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
