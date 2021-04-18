/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

const Common = ({name,imgsrc,visit,btname}) => {
  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-center">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justtify-content-center flex-column">
                <h1>
                  {name}
                </h1>
                <h2 className="my-3">We Want To Work With You</h2>
                <div className="mt-3">
                  <NavLink to={visit} className="btn btn-primary">
                    {btname}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={imgsrc}
                  className="img-fluid animated"
                  alt=""
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
