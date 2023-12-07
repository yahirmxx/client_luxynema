import React, { useState, useNavigate } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Login } from "../Login/Login";
import { Input, Typography } from "@material-tailwind/react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../credentials";

export const Register = () => {
  const user = auth.currentUser;

  if (user) {
    window.location.href = "/login";
  } else {
    console.log("Usuario no iniciado");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };



  return (
    <div className="background-image flex items-center justify-center h-screen">
      <main className="register-container">
        <div className="text-container mb-8 text-center">
          <Typography variant="h4" color="white">
            Sign Up
          </Typography>
          <Typography variant="h6" color="white">
            Sign up to enjoy the latest release
          </Typography>
        </div>
        <div className="register-form">
          <div className="w-72">
            <Input
              type="email"
              placeholder="Email Address"
              className="!border !border-gray-300 text-white-900 shadow-lg shadow-white-900/5"
              color="white"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <br />
          <div className="w-72">
            <Input
              type="password"
              placeholder="Password"
              className="!border !border-gray-300 text-white-900 shadow-lg shadow-white-900/5"
              color="white"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <br />
          <div className="form-group mb-6">
            <button
              size="lg"
              color="white"
              className="galarama"
              onClick={handleRegister}
            >
              Create account
            </button>
          </div>
        </div>
        <div className="flex mt-6">
          <p className="text-xl text-white">Already have an account?</p>
          <Link
            to="/login"
            element={<Login />}
            className="text-xl text-white pl-2 underline cursor-pointer hover:text-[color:var(--azul)] transition-all duration-1500"
          >
            Log In
          </Link>
        </div>
      </main>
    </div>
  );
};
