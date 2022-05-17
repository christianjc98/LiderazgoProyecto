import Wrapper from "../assets/wrappers/Footer";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <footer className="footer">
        <div className="left">
          <p>Christian Janssen Cetina</p>
          <p>10mo semestre</p>
          <p>Ingenieria Industrial</p>
        </div>
        <div className="middle">
          <p>{date}</p>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;
