import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Marc Benioff",
      icon: "pi pi-fw pi-user",
      command: () => {
        navigate("/biography");
      },
    },
    {
      label: "Salesforce",
      icon: "pi pi-fw pi-cloud",
      command: () => {
        navigate("/salesforce");
      },
    },
    {
      label: "Valores",
      icon: "pi pi-fw pi-star",
      command: () => {
        navigate("/values");
      },
    },
  ];
  return (
    <>
      <Menubar className="nav-bar" model={items}></Menubar>
    </>
  );
};
export default Navbar;
