import React from "react";

export const Movies = () => {
  return (
  <div>

      <section className="sm: flex-wrap bg-white mx-20 rounded-xl mt-40 ">
        <div className="sm: Contenedor flex flex-wrap "> 
          <img className="moviePicture w-72  p-4 my-6" src="../src/assets/arrival.jpg" />
          <div className="contenido ">
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
            <h3 >asientos</h3>
          
            <div className="contenidoCheckOut flex-wrap bg-gray-300  rounded-xl mt-4">
              <div className="innerCheckOut flex flex-wrap ">
                <img
                  className="moviePictureCheckOut w-40 p-2"
                  src="../src/assets/arrival.jpg"
                />
                <div className="box  ">
                  <h3 className="uppercase text-2xl font-medium lemon-milk">
                    CheckOut
                  </h3>
                  <p>total: 0.00.0.0$</p>
                  <p>hora: 00:00:00:00</p>
                  <p>asientos: A0,B0,C0</p>
                </div>
              </div>
              <div className="ml-10">
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
        <a
          className="trailer"
          href="https://www.youtube.com/watch?v=uWs5lsWXLbo&ab_channel=SonyPicturesEspa%C3%B1a"
        >
          watch trailer
        </a>
      </section>

  </div>);
};
