import React from "react";
import "./Ownerlogin.css";

const ownerlogin = () => {
  return (
    <div className="parent">
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center">
          <div className="">
            <div className="card rounded-4 px-5 pt-5 pb-0 w-100">
              <div className="header text-center">
                <h2 className="fw-bold text-dark py-2">Owner Login</h2>
              </div>
              <div className="inputs">
                <div className="form-group mb-3">
                  <label htmlFor="email">Correo electronico</label>
                  <input
                    type="email"
                    className="rounded-pill w-100 form-control border-1 py-2 px-3"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Contrasena</label>
                  <input
                    className="rounded-pill w-100 form-control border-1 py-2 px-3"
                    type="password"
                  />
                </div>
                <div className="form-group d-flex justify-content-between">
                  <div>
                    <input className="rounded-pill  border-1" type="checkbox" />
                    <label htmlFor="check">Acuerdate de mi</label>
                  </div>
                  <div>
                    <a href="/hello">Has olvidado tu contrasena?</a>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-75 rounded-pill"
                  >
                    Login
                  </button>
                </div>

                <div className="text-center mt-5">
                  <p>
                    Not an admin? <a href="/">Login as owner</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-md-12 col-sm-6">
            <p className="mb-0">
              <i class="bi bi-geo-alt-fill "></i>
               Avda de Espana 2428710-EL MOLAR  (MADRID)
              </p>
          
          </div>

          <div className="col-lg-4 col-md-12 col-sm-6">
            <i class="bi bi-telephone-fill"></i>+918410517
          </div>

          <div className="col-lg-4 col-md-12 col-sm-6">
            <i class="bi bi-envelope-at-fill"></i>
            <a href="/">loteriaelmolar@yahoo.es</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ownerlogin;
