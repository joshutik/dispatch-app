import React from "react";
import "./Approve.css";

const approve = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5 col-md-5">
          <div className="card text-center px-4 py-5 rounded-5 ">
            <div className="container my-4">
              <a href="/" className="pending rounded-pill text-light px-5 py-4">Pending</a>
            </div>
            <div className="container my-3">
              <a href="/" className="btn rounded-pill px-5 py-3 approved">Approved</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default approve;
