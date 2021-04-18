/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sdata from "./Sdata";
let Card = ({ imgsrc, title }) => {
  return (
    <div className="col-md-4 col-10 mx-auto mt-4">
      <div className="card ">
        <img src={imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam hic
            cupiditate quos vitae blanditiis facere vero nisi soluta qui
            possimus?
          </p>
          <a href="" className="btn btn-primary">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val) => {
                return <Card imgsrc={val.imgsrc} title={val.title}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
