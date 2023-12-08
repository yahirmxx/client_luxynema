import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="above-all">
      <nav className="-mb-40 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between lg:items-center xl:items-center 2xl:items-center">
        <div className="flex items-center justify-between px-4 lg:px-16 py-4 lg:py-10 lg:mr-32">
          <div className="text-2xl lg:text-3xl uppercase font-normal text-white galarama flex flex-end">
            <Link
              to="/home"
              className="cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              LUXYNEMA
            </Link>
          </div>
          <button
            className="lg:hidden bg-transparent text-white inline"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } lg:flex flex-col lg:flex-row sm:py-1 py-2 px-5 lg:py-10 gap-2 lg:gap-6 justify-end`}
        >
          <li className="lg:pl-5 lg:-ml-10 text-xl lg:text-2xl uppercase text-white li-font">
            <Link
              to="/home"
              className="cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              Home
            </Link>
          </li>
          <li className="lg:pl-5 text-xl lg:text-2xl uppercase text-white li-font">
            <Link
              to="/movies"
              className="cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              Movies
            </Link>
          </li>
          <li className="lg:pl-5 text-xl lg:text-2xl uppercase text-white li-font">
            <Link
              to="/about-us"
              className="cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              About Us
            </Link>
          </li>
          <li className="lg:pl-5 text-xl lg:text-2xl uppercase text-white li-font">
            <Link
              to="/my-movies"
              className="cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              My Movies
            </Link>
          </li>
          <li className="lg:pl-5 text-xl lg:text-2xl uppercase text-white li-font">
            <Link
              to="/account"
              className="cursor-pointer hover:text-[color:var(--azul)] duration-300"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
