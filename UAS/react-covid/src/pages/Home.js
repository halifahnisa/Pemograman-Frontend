import Hello from "../components/Hello";
//import FormCovid from "../components/FormCovid";
//import Indonesia from "../components/Indonesia";
//import Provinsi from "../components/Provinsi";
import GlobalSituation from "../components/GlobalSituation";
import RegionSituation from "../components/RegionSituation";

function Home() {
  return (
    <>
      <Hello />
      <GlobalSituation/>
      <RegionSituation/>
    </>
  );
}

export default Home;
