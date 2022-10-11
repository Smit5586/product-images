import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Iphone, Perfect } from "./Iphone";


const Photos = () => {
  const [photoname, photosetName] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getDataphoto();
  }, []);

  const getDataphoto = async () => {
    let photodata = await Perfect(location.state.id);

    if (photodata) {
      photosetName(photodata);
    } else {
      alert("error");
    }
  };

  return (
    <>
      <div className="bg">
        <div className="heading">
          <h1 className="text-center">Our products</h1>
        </div>

        
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {photoname &&
                photoname !== undefined &&
                photoname &&
                photoname !== "undefined"
                  ? photoname &&
                    photoname.images &&
                    photoname.images.map((d) => {
                      return (
                        <>
                          <div className="col-md-4 col-10 mx-auto  ">
                            <div className="card h-100 ">
                              <div className="product-img">
                                <div className="font">
                                  <img src={d} className="card-img-top" />

                                  <div class="back from-left">
                                    <h4>{photoname.title}</h4>
                                    <p>{photoname.description}</p>
                                    <h5>Category : {photoname.category}</h5>
                                    <h5>Brand : {photoname.brand}</h5>
                                    <h5>Stock left : {photoname.stock}</h5>
                                    <h5>rating : {photoname.rating}</h5>
                                    <h3>Price : {photoname.price} $</h3>
                                    <h4>
                                      Dis : {photoname.discountPercentage} %
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
