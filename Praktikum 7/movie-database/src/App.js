//import logo from './logo.svg';
/**import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
**/
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateMovie from "./Pages/movie/CreateMovie";
import PopularMovie from "./Pages/movie/PopularMovie";
import NowPlaying from "./Pages/movie/NowPlaying";
import TopRated from "./Pages/movie/TopRated";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/create" element={<CreateMovie/>}></Route>
          <Route path="/movie/popular" element={<PopularMovie/>}></Route>
          <Route path="/movie/now-playing" element={<NowPlaying/>}></Route>
          <Route path="/movie/top-rated" element={<TopRated/>}></Route>
        </Routes> 
      </Layout>
        
     
    </>
  );
}

export default App;
