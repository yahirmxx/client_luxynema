import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { db } from "../../credentials";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./MoviesList.css";

export const MoviesList = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isExtendedVisible, setIsExtendedVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "peliculas"));
        const peliculasData = [];
        querySnapshot.forEach((doc) => {
          peliculasData.push({ id: doc.id, ...doc.data() });
        });
        setPeliculas(peliculasData);
        setLoading(false);
      } catch (error) {
        console.error("Error getting peliculas: ", error);
        setLoading(false);
      }
    };

    fetchPeliculas();
  }, []);

  useEffect(() => {
    const closeDetailedView = () => {
      setSelectedMovie(null);
    };

    setScrollDisabled(selectedMovie !== null);

    return () => {
      setScrollDisabled(false);
    };
  }, [selectedMovie]);

  const handleEventClick = (event) => {
    setSelectedMovie(event);
    setIsAnimating(true);

    setTimeout(() => {
      setIsExtendedVisible(true);
      setIsAnimating(false);
    }, 500);
  };

  const closeDetailedView = () => {
    setSelectedMovie(null);
  };
  return (
    <>
      <Navbar />
      <div className="div-container">
        <div>
          <section className="bg-white mx-10 md:mx-10 rounded-lg mt-16 md:mt-10 z-0">
            <div className="px-4 md:px-20 py-4 md:py-10">
              <h2 className="uppercase text-xl md:text-2xl font-medium lemon-milk text-center md:text-left sm:text-center">
                All Movies
              </h2>

              <h6 className="text-center md:text-left">
                Schedule your tickets
              </h6>
              <hr className="bg-[color:var(--azul-fuerte)] lg:w-72 w-40 md:w-56 h-2 mb-8 mx-auto md:mx-0 mt-4 md:mt-5"></hr>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-6 gap-y-6 mt-4 md:mt-5">
                {peliculas.map((pelicula) => (
                  <li
                    className="grid"
                    key={pelicula.id}
                    onClick={() => handleEventClick(pelicula)}
                  >
                    <div className="overlay-gradient">
                      <img
                        className="w-48 md:w-56 lg:h-96 md:h-72 mx-auto md:mx-0 cursor-pointer hover:opacity-80 duration-500 hover:scale-105"
                        alt={pelicula.titulo}
                        src={pelicula.img_url}
                      />
                    </div>
                    <h3 className="uppercase mt-2 sm:mt-4 font-medium lemon-milk text-center md:text-left">
                      {pelicula.titulo}
                    </h3>
                    <p className="mt-1 font-bold text-sm lemon-milk text-gray-600 text-center md:text-left">
                      {pelicula.duracion} min
                    </p>
                  </li>
                ))}
              </ul>

              {selectedMovie && (
                <div
                  className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                    isExtendedVisible ? "opacity-100" : "opacity-0"
                  } ${isAnimating ? "transition-opacity" : ""}`}
                >
                  <div className="bg-white p-8 rounded-md w-3/5 h-fit flex">
                    <div className="flex flex-col mr-10 ">
                      <img
                        className="mt-5 h-10 w-10 sm:w-96 sm:h-64 md:h-72 md:w-96 lg:h-72 lg:w-96 xl:w-96 xl:h-96 object-cover rounded-md"
                        src={selectedMovie.img_url}
                        alt={selectedMovie.titulo}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="mt-4 text-gray-700 mb-4">
                        <span className="font-bold text-3xl">
                          {selectedMovie.titulo}
                        </span>
                      </p>
                      <p className="mt-2 text-gray-700">
                        {selectedMovie.generos ? selectedMovie.generos : "N/A"}
                      </p>
                      <p className="mt-2 font-bold text-gray-700">
                        {selectedMovie.horario}
                      </p>
                      <p className="mt-2 font-bold text-gray-700">
                        {selectedMovie.duracion} min
                      </p>
                      <div className="mt-2 mt-12 text-gray-700">
                        {selectedMovie.sinopsis
                          ? selectedMovie.sinopsis
                          : "N/A"}
                      </div>
                      <div className="flex flex-end mt-16">
                        <button className="hover:bg-[var(--azul-fuerte)] transition duration-500 mt-4 bg-[var(--azul)] text-white px-4 py-2 text-black rounded-md bg-black transition-colors duration-300">
                          <Link to={`/mymovie?id=${selectedMovie.id}`}>
                            Agendar boletos
                          </Link>
                        </button>

                        <button
                          className="hover:bg-[var(--azul-claro)] transition duration-500 ml-2 mt-4 bg-[var(--navy-pink)] text-black px-4 py-2 rounded-md hover:bg-[var(--navy-pink)-dark] transition-colors duration-300"
                          onClick={(e) => {
                            e.preventDefault();
                            closeDetailedView();
                          }}
                        >
                          <span className="">Cerrar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>{" "}
      </div>
    </>
  );
};
