import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import FormCovid from "../components/FormCovid";
import Indonesia from "../components/Indonesia";
import Provinsi from "../components/Provinsi";


function Main() {
  return (
    <main>
      <Hello />
      <Indonesia/>
      <Provinsi/>
      <FormCovid />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
