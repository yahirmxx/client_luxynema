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
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

  return (
    <div className="background-image flex flex-col md:flex-row items-center">
      <div className="container flex flex-col-reverse md:flex-row items-center w-full md:w-1/2">
        <div className="text-container md:w-full p-8 md:p-0 text-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-8xl text-white galarama mb-4">
            LUXYNEMA
          </h1>
          <p className="text-2xl text-white">THE THEATER FOR YOU</p>
        </div>
      </div>

      <main className="w-full md:w-1/2 p-8 login-container">
        <div className="text-container">
          <h1 className="text-2xl text-white font-bold mb-8">SING IN!</h1>
          <h1 className="text-2xl text-white font-bold mb-8">
            READY FOR THE SHOW! LOG IN NOW.
          </h1>
        </div>

        <div className="mb-8 w-full items-center">
          <input
            className="input-field w-full py-4 px-6 text-xl"
            id="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-8 w-full ">
          <input
            className="input-field w-full py-4 px-6 text-xl"
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button className="w-full bg-white rounded-xl py-4 px-6 galarama cursor-pointer mb-4"
        onClick={handleRegister}>
          <span className="button-text text-xl">Sign In</span>
        </button>

        <div className="flex">
          <p className="text-xl text-white">Don't have an account?</p>
          <Link
            to="/register"
            element={<Register />}
            className="text-xl text-white pl-2 underline cursor-pointer hover:text-[color:var(--azul)] transition-all duration-1500"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  );
};
