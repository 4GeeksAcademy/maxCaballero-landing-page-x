import React from "react";
import PropTypes from "prop-types";
import Headers from "./headers.jsx";
import Jumbos from "./jumbos.jsx";
import Footers from "./footers.jsx";
import Cards from "./cards.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Sample data for cards
const cardData = [
  {
    imgs: "foto1",
    altx: "iquitos",
    nombre: "Christian",
    cargo: "Ingeniero",
    notas: "hghggsg hdjkwhwkwh hwjkhw 01"
  },
  {
    imgs: "foto2",
    altx: "Baseball",
    nombre: "Max",
    cargo: "Técnico",
    notas: "hghggsg hdjkwhwkwh hwjkhw 02"
  },
  {
    imgs: "foto3",
    altx: "Moto",
    nombre: "Gianluca",
    cargo: "Administrador",
    notas: "hghggsg hdjkwhwkwh hwjkhw 03"
  },
  {
    imgs: "foto4",
    altx: "Marisol",
    nombre: "Marisol",
    cargo: "Princesa",
    notas: "hghggsg hdjkwhwkwh hwjkhw 04",
  },
];

//create your first component
const Home = () => {
  return (
    <div className="App">
      <Headers />

      <div className="row-fluid justify-content-around align-items-center">
        <div className="col-md-10  m-auto d-flex">
          <Jumbos />
        </div>

        <div className="row-fluid justify-content-around align-items-center mt-3">
          <div className="col-md-10 m-auto d-flex justify-content-evenly">

            {cardData.map((card, index) => (
              <Cards key={index} {...card} />
            ))}

          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
};

// PropTypes for validation
Cards.propTypes = {
  imgs: PropTypes.string.isRequired,
  altx: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  notas: PropTypes.string.isRequired,
  boton: PropTypes.string,
};


export default Home;