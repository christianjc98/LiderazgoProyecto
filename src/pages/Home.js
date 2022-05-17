import main from "../assets/images/libro.jpg";
import Wrapper from "../assets/wrappers/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="container page">
          <img className="main-img" src={main}></img>
          <div>
            <h1>Pioneros: Marc Benioff</h1>
            <p>
              "El secreto para contratar a los mejores es: buscar personas que
              quieran cambiar el mundo"
            </p>
          </div>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};
export default Home;
