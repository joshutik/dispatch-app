import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="landing-page">
      <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="">
          <div className="card rounded-5">
            <div className="text-center">
              <Link to="/Land-page" className="Link">
                Iniciar sesion
              </Link>
            </div>
            <div className="text-center mt-5">
              <Link to="/Admin" className="rounded-pill Link">
                Administrador sesion
              </Link>
            </div>
            <div className="mt-5">
              <p className="text-center pt-3">
                Don’t have an account yet? <Link to="">Register now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landingpage;
