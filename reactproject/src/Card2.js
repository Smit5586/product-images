import React from "react";

const Card2 = (props) => {
 
  

    return (
      <>
        <div className="col-md-4 col-10 mx-auto  ">
          <div className="card h-100 ">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={props.img2} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img2} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img2} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
           
            <div className="card-body my-auto">
              <h5 className="card-title text-center">{props.title}</h5>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Card2;
  