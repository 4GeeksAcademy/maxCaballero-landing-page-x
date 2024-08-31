import React from "react";
import Headers from "./headers.jsx";
import Jumbos from "./jumbos.jsx";
import Footers from "./footers.jsx";
import Cards from "./cards.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="App">
      <Headers />

      <div className="row-fluid justify-content-around align-items-center">
        <div className="col-md-10 bg-warning m-auto d-flex">
          <Jumbos />
        </div>

        <div className="row-fluid justify-content-around align-items-center">
          <div className="col-md-10 bg-danger m-auto d-flex justify-content-evenly">
            <Cards
              imgs="f1"
              altx="iquitos"
              nombre="Christian"
              cargo="Ingeniero"
              notas="hghggsg hdjkwhwkwh hwjkhw 01"
            />

            <Cards
              imgs="f4"
              altx="ojitos"
              nombre="Max"
              cargo="Tecnico"
              notas="hghggsg hdjkwhwkwh hwjkhw 02"
            />

            <Cards
              imgs="f2"
              altx="Gian"
              nombre="Gianluca"
              cargo="Administrador"
              notas="hghggsg hdjkwhwkwh hwjkhw 03"
            />

            <Cards
              imgs="f3"
              altx="Marisol"
              nombre="Marisol"
              cargo="Ingeniero"
              notas="hghggsg hdjkwhwkwh hwjkhw 04"
              boton="Find Out More!"
            />

          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default Home;