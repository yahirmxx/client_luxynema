import React from "react";
import "./Movies.css";
export const Movies = () => {
  return (
  <div>

      <section className="flex justify-center align-center sm:flex-wrap md:flex-wrap  md:p-0  bg-white mx-40 xl:mx-40 rounded-xl mt-40 ">
        <div className="border-8 flex   p-0">
        <div className="justify-between align-center ">
        <img className="justify-self-center self-center mt-10 mb-10 h-96 border-8 w-96 " src="../src/assets/arrival.jpg" />
        </div>
          <div className="contenido justify-between ">
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
            <div className="flex flex-wrap ">           

            <div className="body">
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
                                  You have selected <span id="count">0</span> seats for a price of $<span
                                    id="total"
                                    >0</span>
                                </p>
                        
                      </div>

                      


          
            <div className="contenidoCheckOut w-fit h-fit flex-wrap bg-gray-300  rounded-xl mt-4">
              <div className="innerCheckOut flex flex-wrap ">
                <img
                  className="moviePictureCheckOut w-40 p-2"
                  src="../src/assets/arrival.jpg"
                />
                <div className="box  ">
                  <h3 className="uppercase text-2xl font-medium lemon-milk mt-20">
                    CheckOut
                  </h3>
                  <p>total:  $</p>
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
