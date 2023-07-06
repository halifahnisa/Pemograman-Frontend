import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndonesiaCovid from "./pages/covid/IndonesiaCovid";
import GlobalCovid from "./pages/covid/GlobalCovid";
import ProvinsiCovid from "./pages/covid/ProvinsiCovid";
import About from "./pages/covid/About";
import Layout from "./Layout";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/covid/global" element={<GlobalCovid/>}></Route>
          <Route path="/covid/indonesia" element={<IndonesiaCovid/>}></Route>
          <Route path="/covid/provinsi" element={<ProvinsiCovid/>}></Route>
          <Route path="/covid/abaout" element={<About/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
