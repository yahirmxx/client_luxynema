import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { auth } from "../../credentials";
import "./Account.css";
import { Navbar } from "../Navbar/Navbar";

export const Account = () => {
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [usuario, setUsuario] = useState(null); // Estado para almacenar la información del usuario
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setSesionIniciada(false);
      console.log("Logout clicked");
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleBackHome = () => {
    navigate("/home"); // Redirige a la página de inicio
  };

  useEffect(() => {
    const verificarSesion = () => {
      const usuarioActual = auth.currentUser;
      if (usuarioActual) {
        setSesionIniciada(true);
        setUsuario({
          correo: usuarioActual.email,
        });
      } else {
        setSesionIniciada(false);
        setUsuario(null);
      }
    };

    verificarSesion();
  }, []);

  useEffect(() => {
    if (!sesionIniciada) {
      navigate("/account");
    }
  }, [sesionIniciada, navigate]);

  if (!sesionIniciada || !usuario) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="background-image mt-10">
        <div className="w-1/4 p-8 h-3/4 relative">
          <div className="user-container rounded-2xl">
            <div className="w-60 h-60 bg-slate-900 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-300 text-9xl mb-2"
              />
            </div>
            <br />

            <label>Email</label>
            <p className="text-black font-bold text-5sm mb-8">
              {usuario.correo}
            </p>

            <button
              className="bg-transparent text-black text-md font-bold py-2"
              onClick={handleLogout}
            >
              LOG OUT
            </button>
          </div>
          <br />
          <button
            className="text-white bg-transparent text-center font-bold text-lg"
            onClick={handleBackHome}
          >
            BACK HOME
          </button>
        </div>
        <div className="w-1/2 p-4 mt-8 h-3/4">
          <div className="user-container2 rounded-xl">

            
          </div>
        </div>
      </div>
    </>
  );
};
