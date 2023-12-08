import { useState, useEffect } from "react";
import { db } from "../../credentials";
import { collection, getDocs } from "firebase/firestore";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MostPopular.css"; // Asegúrate de importar tu hoja de estilos
import { Link } from "react-router-dom";

export const MostPopular = () => {
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
      <div>
        <section className="bg-white mx-24 md:mx-20 rounded-xl mt-4 md:mt-10 z-0 above-all">
          <div className="px-4 md:px-20 py-4 md:py-10">
            <h2 className="uppercase text-xl md:text-2xl font-medium lemon-milk text-center md:text-left">
              Most Popular Movies
            </h2>
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
                <div className="bg-white p-8 rounded-md w-3/5 h-fit">
                  <div>
                    <img
                      className="mt-5 w-full h-72 object-cover rounded-md"
                      src={selectedMovie.img_url}
                      alt={selectedMovie.titulo}
                    />

                    <p className="mt-4 text-gray-700">
                      <span className="font-bold">Título:</span>{" "}
                      {selectedMovie.titulo}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Género:</span>{" "}
                      {selectedMovie.generos ? selectedMovie.generos : "N/A"}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Horarios:</span>{" "}
                      {selectedMovie.horario}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Duración:</span>{" "}
                      {selectedMovie.duracion} min
                    </p>
                    <div className="mt-2 text-gray-700">
                      <span className="font-bold text-justify">Sinopsis:</span>{" "}
                      {selectedMovie.sinopsis ? selectedMovie.sinopsis : "N/A"}
                    </div>
                    <div>
                      <button className="mt-4 bg-[var(--navy-pink)] text-white px-4 py-2 rounded-md bg-black transition-colors duration-300">
                        <Link to="/movies">Agendar boletos</Link>{" "}
                      </button>
                    </div>

                    <button
                      className="mt-4 bg-[var(--navy-pink)] text-black px-4 py-2 rounded-md hover:bg-[var(--navy-pink)-dark] transition-colors duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        closeDetailedView();
                      }}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
