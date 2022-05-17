import Navbar from "../components/Navbar";
import logo from "../assets/images/Salesforce.png";
import Wrapper from "../assets/wrappers/Salesforce";
import Footer from "../components/Footer";
const Salesforce = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="container">
        <div className="header-container">
          <img className="logo" src={logo} alt="" />
          <p>
            Salesforce es una solución de gestión de relaciones con clientes que
            une empresas y clientes. Es una plataforma CRM integrada que brinda
            a todos tus departamentos, incluidos marketing, ventas, comercio y
            servicios, una vista única y compartida de cada cliente.
          </p>
        </div>

        <div className="model-container">
          <div>
            <h1>Modelo 1-1-1</h1>
            <p>
              Consiste en la donación del 1% del capital, 1% de los productos y
              1% del tiempo de los empleados a organizaciones sin fines de
              lucro, educación, voluntariado y otras actividades filantrópicas.
            </p>
          </div>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/YApfNp4tG1g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
export default Salesforce;
