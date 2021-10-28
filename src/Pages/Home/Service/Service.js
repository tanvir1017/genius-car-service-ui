import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, FirstName, Price, Description, img } = service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3>{FirstName}</h3>
      <h5>Price: {Price}</h5>
      <p className="px-3">{Description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning">
          Book {FirstName?.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
