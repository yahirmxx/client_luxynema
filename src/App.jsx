import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Root } from "./components/Root/Root";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Movies } from "./components/Movies/Movies";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { MyMovies } from "./components/MyMovies/MyMovies";
import { Account } from "./components/Account/Account";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/my-movies" element={<MyMovies />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
