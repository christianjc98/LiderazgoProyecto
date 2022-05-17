import Wrapper from "../assets/wrappers/MarcBenioff";
import benioff from "../assets/images/Marc-Benioff.jpg";
import { Card } from "primereact/card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import main from "../assets/images/main-img.svg";

const MarcBenioff = () => {
  return (
    <Wrapper className="full-page">
      <Navbar></Navbar>
      <div className="container page">
        <Card className="card">
          <img src={benioff} alt="" className="profile-img" />
          <p>
            Marc Benioff es el presidente, co-director ejecutivo y fundador de
            Salesforce y pionero de la computación en la nube.{" "}
          </p>
          <p>
            Siempre tuvo una gran pasión por la tecnología, de igual forma
            recalca que él no es el típico genio que abandono la universidad
            para crear una empresa multimillonaria sino que estudio una carrera
            y se especializo en empresas{" "}
          </p>
        </Card>
        <div>
          <img src={main} alt="" className="charac-img" />
          <div className="charac-container">
            <h2>Caracteristicas</h2>
            <div className="characteristics">
              <span>
                <i className="pi pi-key"></i>
              </span>
              <p>Lider visionario y afiliativo</p>
            </div>
            <div className="characteristics">
              <span>
                <i className="pi pi-user"></i>
              </span>
              <p>Activista y altruista</p>
            </div>
            <div className="characteristics">
              <span>
                <i className="pi pi-check"></i>
              </span>
              <p>Congruente</p>
            </div>
            <div className="characteristics">
              <span>
                <i className="pi pi-bolt"></i>
              </span>
              <p>Especialista en tecnología e innovación</p>
            </div>
            <div className="characteristics">
              <span>
                <i className="pi pi-heart"></i>
              </span>
              <p>Resolver necesidades</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
export default MarcBenioff;
