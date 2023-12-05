import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

export const Hero = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/peliculas/last")
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const heroStyle = {
    backgroundImage: `
      url(${!loading && peliculas.length > 0 ? peliculas[0].img_hd : ""})
    `,
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <>
      <div style={heroStyle}>
        <div className="-mt-40">
          <section>
            {loading ? (
              <p>Cargando...</p>
            ) : (
              <>
                <h1 className="mt-10 sm:mt-24 md:mt-32 lg:mt-56 ml-4 sm:ml-8 md:ml-16 lg:ml-24 text-4xl sm:text-5xl lg:text-8xl uppercase lemon-milk text-white font-thin">
                  <a className="">{peliculas[0].titulo_original}</a>
                </h1>
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 ml-4 sm:ml-8 md:ml-16 lg:ml-24">
                  <p className="text-lg sm:text-xl lg:text-2xl text-white capitalize">
                    {" "}
                    {peliculas[0].generos.join(", ")}
                  </p>
                  <div className="mt-4">
                    <div className="your-container-class">
                      <a
                        href={peliculas[0].trailer}
                        className="cursor-pointer bg-[color:var(--negro)] text-white rounded-xl px-3 py-3 uppercase text-sm sm:text-base lemon-milk hover:bg-white hover:text-[color:var(--negro)] transition-all duration-2000"
                      >
                        Watch Trailer
                        <span className="ml-2 sm:ml-4 bg-[color:var(--blanco)] hover:bg-[color:var(--negro)] rounded-full px-2 py-1">
                          <FontAwesomeIcon
                            icon={faPlay}
                            className="text-black hover:text-[color:var(--blanco)]"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
};
