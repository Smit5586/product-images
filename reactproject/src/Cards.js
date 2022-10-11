import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto  ">
        <div className="card h-100 ">
          <Link to="/photos" state={{ id: props.id }}>
            <img src={props.imgsrc} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body my-auto">
            <h5 className="card-title text-center">{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
