import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-dark">
        <a className="navbar-brand  text-white" href="#p">Start Bootstraps</a>
        <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#p">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#p">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#p">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#pp">Contact</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>

  );

};
export default Headers;