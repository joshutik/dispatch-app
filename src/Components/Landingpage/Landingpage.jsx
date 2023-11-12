import React from "react";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="container-fluid landing-page">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-12">
          <div className="card rounded-5">
              <div>
                <a href="/" className="ancorh rounded-pill py-3 px-5 w-25">
                  Iniciar sesion
                </a>
              </div>

              <div>
                <a href="/" className="ancorh rounded-pill py-3 px-5 w-25">
                  Administrador sesion
                </a>
              </div>
              <div>
                <p>
                  Do you have an account yet? <a href="/">Register now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Landingpage;
