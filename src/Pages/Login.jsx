import axios from "axios";
import React, { useContext, useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../Styles/Login.css"
const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post( 
          "https://healthcarebackend.onrender.com/api/v1/user/login",
          { email, password,  role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
        
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section>
    <ToastContainer position="top-center" />
      <div className="container form-component login-form">
      <h3 className="dt-title rv">
          <span>Sign In</span>
        </h3>
        <p className="signp">Please Login To Continue</p>
        <p className="info-card-descriptions signd">
        Welcome to HealthCare Plus, India's most trusted healthcare partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{marginBottom: 0,alignItems: "center", fontSize:"21px"  }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{  textDecoration: "none", color: "#271776ca",fontWeight:"600", alignItems: "center", fontSize:"21px"}}
            >
              Register Now
            </Link>
          </div>
          <div  style={{ justifyContent: "center", alignItems: "center"  }} >
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;