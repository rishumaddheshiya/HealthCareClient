import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homemy";
import Appointment from "./Pages/AppointmentFormnew";
import About from "./components/About";
import  Doctors from "./components/Doctors";
import  Location from "./components/Location";
import  MessageForm from "./components/MessageForm";
import Register from "./Pages/Registernew";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Notification from "./Pages/Notification";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser,isAppointmented, setIsAppointmented} =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://healthcarebackend.onrender.com/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://healthcarebackend.onrender.com/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/MessageForm" element={<MessageForm/>} />
          <Route path="/Location" element={<Location/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;