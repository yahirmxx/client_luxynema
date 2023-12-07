import { useState, useEffect } from "react";
import { db } from "../../credentials";
import { collection, getDocs } from "firebase/firestore";

export const MostPopular = () => {
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

  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [isExtendedVisible, setIsExtendedVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
                  onClick={() => handleEventClick(event)}
                >
                  <img
                    className="bg-black w-48 md:w-56 lg:h-96 md:h-72 mx-auto md:mx-0"
                    alt={pelicula.title}
                    src={pelicula.img_url}
                  />
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
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
                  isExtendedVisible ? "opacity-100" : "opacity-0"
                } ${isAnimating ? "transition-opacity duration-300" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  closeDetailedView();
                  return false;
                }}
              >
                <div
                  className="bg-white p-8 rounded-md relative w-5/12"
                  onClick={(e) => {
                    e.stopPropagation();
                    return false;
                  }}
                >
                  <button
                    className="absolute top-2 right-2 p-2 cursor-pointer text-gray-600 hover:text-[var(--navy-pink)] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      closeDetailedView();
                      return false;
                    }}
                  >
                    <i className="fas fa-times fa-2x"></i>
                  </button>
                  <div>
                    <img
                      className="mt-5 w-full h-48 object-cover rounded-md"
                      src={selectedMovie.image}
                      alt={selectedMovie.title}
                    />
                    <p className="font-bold text-2xl uppercase text-[var(--navy-pink)] mt-4">
                      {selectedMovie.title}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Autor:</span>{" "}
                      {selectedMovie.author}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Locación:</span>{" "}
                      {selectedMovie.location}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Fecha:</span>{" "}
                      {new Date(selectedMovie.date).toLocaleDateString(
                        "en-US",
                        {
                          month: "2-digit",
                          day: "2-digit",
                          year: "2-digit",
                        }
                      )}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">Descripción:</span>{" "}
                      {selectedMovie.description}
                    </p>
                    <div className="mt-2 text-gray-700">
                      <span className="font-bold text-justify">Detalles:</span>{" "}
                      {selectedMovie.text}
                    </div>
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
