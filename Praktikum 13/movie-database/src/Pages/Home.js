// Import Navbar, Hero, Movies, Footer Component
//import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
//import Footer from "../components/Footer/Footer";
import AddFormMovie from "../components/AddFormMovie/AddFormMovie";
import { useState } from "react";
import data from "../components/utils/constants/data";
//import Counter from "../components/Counter";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies}/>
      <AddFormMovie movies={movies} setMovies={setMovies}/>   
    </>
  );
  //return 
    //<Counter />;
}

export default Home;