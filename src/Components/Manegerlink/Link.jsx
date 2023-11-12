import React from "react";
import "./Link.css";

const approve = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-5 col-sm-4">
          <div className="card text-center py-5 rounded-5">
            <div className="container my-4 mt-5">
              <a href="/" className="pending rounded-pill text-light px-5 py-4 fw-bold">Copy manager link</a>
            </div>
            <div className="container my-4">
              <a href="/" className="btn rounded-pill px-5 py-4 approved text-danger fw-bold">Delete establishment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default approve;
