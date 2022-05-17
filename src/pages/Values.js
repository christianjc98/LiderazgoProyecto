import Wrapper from "../assets/wrappers/Values";

import { TabView, TabPanel } from "primereact/tabview";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import values from "../assets/images/values.svg";

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper>
      <Navbar />
      <div className="container">
        <div className="heading-section">
          <div className="info">
            <h1>Valores</h1>
            <p>
              Para tener exito las personas deben saber si estas dispuesto a
              ceñirte a los principios establecidos, sin importar las
              consecuencias, de esta forma se sienten libres y protegidas para
              realizar su trabajo de forma plena
            </p>
            <p>
              "El progreso solo es efectivo cuando va de la mano de los
              principios"
            </p>
          </div>
          <img className="values-img" src={values} alt="" />
        </div>

        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="Confianza">
            <p>
              Confianza y crecimiento deben ir de la mano, siempre que el
              crecimiento se antepone a la confianza puede ocasionar problemas.
              <br />
              Como líder tienes que preocuparte mas por lo que la gente no dice
              que por lo que dice.
              <br />
              Garantizar que las personas confien en que su equipo y jefes
              estaran con ellos cuando existan problemas.
            </p>
          </TabPanel>
          <TabPanel header="Exito del cliente">
            <p>
              Medir resultados con el éxito de los clientes, si ellos no crecen
              tampoco nosotros podremos hacerlo.
              <br />
              Escuchar a los clientes e identificar las verdaderas necesidades
              que estos tengan para poder ofrecerles las herramientas adecuadas.
              <br />
              Fomentar en los clientes un sentido de comunidad, que sientan que
              la empresa estara ahi para ayudarlos y velar por su exito
            </p>
          </TabPanel>
          <TabPanel header="Innovación">
            <p>
              Promover la creatividad de los colaboradores es fundamental para
              la innovación
              <br />
              Las grandes ideas pueden venir de cualquier persona, es importante
              que las personas se sientan escuchadas y valoradas.
              <br />
              Buscar ideas que ayuden a cambiar nuestra empresa, nuestro país y
              tal vez el mundo.
            </p>
          </TabPanel>
          <TabPanel header="Igualdad">
            <p>
              La igualdad debe estar integrada no solo en los valores
              declarados, sino tambien en los actos de la organización.
              <br />
              Trabajar con personas que pertenecen a las minorías afectadas para
              poder comprender sus necesidades.
              <br />
              Un lider debe poder abrirse con las personas, hacer una
              autoevaluación sincera, escuchar a las personas, y poder
              rectificar.
            </p>
          </TabPanel>
        </TabView>
      </div>
      <Footer />
    </Wrapper>
  );
};
export default Values;
