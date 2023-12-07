import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Register } from "../Register/Register";
import chevronRight from "../../assets/Flechas_login.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../credentials";

export const Login = () => {
  const user = auth.currentUser;

  if (user) {
    window.location.href = "/home";
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

  const handleRegister = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center background-image">
      <div className="flex flex-col">
        <div className="container flex flex-col-reverse md:flex-row items-center w-full md:w-1/2">
          <div className="text-container md:w-full md:p-0 text-center mt-4">
            <h1 className="text-2xl md:text-4xl text-white galarama">
              LUXYNEMA
            </h1>
            <p className="text-lg text-white">THE THEATER FOR YOU</p>
          </div>
        </div>

        <main className="w-full md:w-1/2 p-8 login-container">
          <div className="text-container">
            <h1 className="text-2xl text-white font-bold mb-2">SING IN!</h1>
          </div>
          <div className="w-72 mb-4">
            <input
              className="input-field w-full py-4 px-6 text-sm color-white lemon-milk"
              id="email"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="w-72 mb-4">
            <input
              className="input-field w-full py-4 px-6 text-sm color-white lemon-milk"
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            size="lg"
            color="white"
            className="galarama cursor-pointer rounded-xl py-4 px-6 hover:bg-[color:var(--azul)] hover:text-[color:var(--blanco)] duration-300 mb-4"
            onClick={handleRegister}
          >
            <span className="button-text text-xl">Sign In</span>
          </button>
          <div className="flex">
            <p className="text-xl text-white">{"Don't have an account?"}</p>
            <Link
              to="/register"
              element={<Register />}
              className="text-xl text-white pl-2 underline cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              Register
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
