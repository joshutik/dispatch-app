import React from 'react'
import './Administrator.css'
import { Link } from 'react-router-dom'

const Administrator = () => {
  return (
    <div className="container-fluid">
      <div className="bg">
        {/* <div className="pt-3 ps-5">
          <a className="text-end text-decoration-none fs-5 ml-4" href="/">
            <i className="bi bi-chevron-left"></i> Go Back
          </a>
        </div> */}
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <p className='text-light fs-3'>Buenas noches,</p>
            <h1 className="text-light fw-bold">ESTABLISHMENT DE LOTTERY</h1>
          </div>
        </div>
      </div>
      <div className="header text-center mt-5 fw-bolder">
        <h2>Order details</h2>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="my-5 w-75">
          <input
            type="search"
            className="form-control rounded-pill"
            placeholder="Search orders...."
          />
        </div>
        <div className="d-flex justify-content-between w-75 mb-3">
          <div className="fs-5">
            <i class="bi bi-plus-lg"></i>
            <Link to="/add-order">add new order</Link>
          </div>
          <div className="fs-5">
            <i class="bi bi-plus-lg fw-bolder "></i>
            <a href="/">Edit Company details</a>
          </div>
        </div>
        {/* Table */}
        <div className=" w-75">
          <table className="table table-bordered table-responsive align-middle w-100">
            <thead>
              <tr>
                <th scope="col" className="p-4">
                  Numero
                </th>
                <th scope="col" className="p-4">
                  Series
                </th>
                <th scope="col" className="p-4">
                  Quantity reserved
                </th>
                <th scope="col" className="p-4">
                  Quantity returned
                </th>
                <th scope="col" className="p-4">
                  Quantity charged
                </th>
                <th scope="col" className="p-4">
                  Quantity sold
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="p-4 text-center">3356</td>
                <td className="p-4 text-center">24-46</td>
                <td className="p-4 text-center">$200</td>
                <td className="p-4 text-center">$200</td>
                <td className="p-4 text-center">$500</td>
                <td className="p-4 text-center">$200</td>
              </tr>
              <tr className="text-center">
                <td className="p-4">3356</td>
                <td className="p-4">24-46</td>
                <td className="p-4">$200</td>
                <td className="p-4">$200</td>
                <td className="p-4">$500</td>
                <td className="p-4">$200</td>
              </tr>
              <tr>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
              </tr>
              <tr>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-4 col-md-12 col-sm-6">
            <p className="mb-0">
              <i class="bi bi-geo-alt-fill "></i>
              Avda de Espana 2428710-EL MOLAR (MADRID)
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
  )
}

export default Administrator
