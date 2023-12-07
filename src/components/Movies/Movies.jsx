import React from "react";
import "./Movies.css";
export const Movies = () => {
  return (
    <div>
      <section className="flex justify-center align-center   md:p-0  bg-white sm:mx-40 md:mx-40 xl:mx-40 mx-2  rounded-xl mt-40 ">
        <div className=" flex   p-0 justify-center flex-wrap">
          <div className="justify-between align-center ">
            <img
              className=" mt-20 sm:w-56 md:w-64 xl:w-72 w-44 "
              src="../src/assets/arrival.jpg"
            />
          </div>
          <div className=" contenido  mt-6 m-10 ">
            <h2
              id="horarios"
              className="uppercase text-2xl font-medium lemon-milk"
            >
              Horarios
            </h2>
            <a
              id="btn"
              className="bg-[color:var(--azul)] text-black rounded-xl px-4 py-1 uppercase text-sm lemon-milk hover:bg-white hover:text-[color:var(--negro)] transition-all duration-1000"
              href=""
            >
              12pm
            </a>
            <a
              id="btn"
              className="bg-[color:var(--azul)] text-black rounded-xl px-4 py-1 uppercase text-sm lemon-milk hover:bg-white hover:text-[color:var(--negro)] transition-all duration-1000"
              href=""
            >
              12pm
            </a>
            <hr className="bg-[color:var(--negro)] w-100 h-1"></hr>
            <div className="flex flex-wrap">
              <div className="body p-6">
                <h1>asientos</h1>
                <div className="movie-container">
                  <label>Pick a movie:</label>
                  <select id="movie">
                    <option value="10">La llegada ($10)</option>
                    <option value="12">El Padrino ($12)</option>
                    <option value="8">Buenos Muchachos ($8)</option>
                    <option value="9">Bastardos sin gloria ($9)</option>
                  </select>
                </div>

                <ul className="showcase">
                  <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                  </li>
                  <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                  </li>
                  <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                  </li>
                </ul>

                <div className="container">
                  <div className="screen"></div>
                  <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                  </div>

                  <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                  </div>

                  <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                  </div>

                  <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                  </div>

                  <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                  </div>

                  <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                  </div>
                </div>

                <p className="text">
                  You have selected <span id="count">0</span> seats for a price
                  of $<span id="total">0</span>
                </p>
              </div>

              <div className="contenidoCheckOut  h-fit  bg-gray-300 rounded-xl mt-4 ">
                <div className="innerCheckOut  flex ">
                  <img
                    className="moviePictureCheckOut w-40 p-2"
                    src="../src/assets/arrival.jpg"
                  />
                  <div className="box ">
                    <h3 className="uppercase text-2xl font-medium  lemon-milk mt-20">
                      CheckOut
                    </h3>
                    <p>total: $</p>
                    <p>hora: 00:00:00:00</p>
                    <p>asientos: A0,B0,C0</p>
                  </div>
                </div>
                <div className="ml-4">
                  <p>Arrival</p>
                  <p>1h 56m</p>
                  <a
                    className="bg-[color:var(--negro)] text-white rounded-xl px-4 py-1 uppercase text-sm lemon-milk hover:bg-white hover:text-[color:var(--negro)] transition-all duration-1000"
                    href=""
                  >
                    Agregar boletos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
