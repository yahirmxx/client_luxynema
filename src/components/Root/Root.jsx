import React from "react";
import "./Root.css";
import chevronRight from "../../assets/Flechas_login.png";
import { Link } from "react-router-dom";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

export const Root = () => {
  return (
    <div className="background-image">
      <main className="flex-1">
        <h1 className="pl-44 pt-44 text-8xl text-white galarama">LUXYNEMA</h1>
        <p className="text-2xl text-white pl-44">
          Crea una cuenta de Luxynema y ten acceso
        </p>
        <p className="text-2xl text-white pl-44">a los mejores estrenos</p>
        <ul>
          <li className="pl-44 pt-12">
            <Link
              to="/register"
              element={<Register />}
              className="rounded-xl bg-white py-4 px-44 text-2xl uppercase galarama cursor-pointer hover:bg-[color:var(--azul)] hover:text-[color:var(--blanco)] transition-all duration-1500"
            >
              Crear Cuenta
            </Link>
          </li>
          <li className="flex">
            <p className="text-2xl text-white pl-64 pt-10">
              Ya tienes una cuenta?
            </p>
            <Link
              to="/login"
              element={<Login />}
              className="text-2xl text-white pl-2 underline pt-10 cursor-pointer hover:text-[color:var(--azul)] transition-all duration-1500"
            >
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </main>
      <aside className="absolute top-64 right-28  items-center">
        <img
          className="w-auto h-80"
          src={chevronRight}
          alt="Barras apuntando hacia la derecha"
        />
      </aside>
    </div>
  );
};
