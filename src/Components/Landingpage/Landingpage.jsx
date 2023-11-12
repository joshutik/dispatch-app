import React from "react";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="container-fluid landing-page">
      <div className="card rounded-5 h-50">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-5 text-center">
              <a href="/" className="ancorh rounded-pill py-3 px-5 w-25 mt-5">
                Iniciar sesion
              </a>
            </div>

            <div className="my-5 text-center">
              <a href="/" className="ancorh rounded-pill py-3 px-5 w-25">
                Administrador sesion
              </a>
            </div>
            <div className="mt-5">
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
