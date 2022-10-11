// useparams

// import React from "react";
// import { useParams } from "react-router-dom";

// const User = () =>{
// const {name,Fname} = useParams();
// return <h1>user name is {name} {Fname}</h1>
// };

// export default User;

// useLocation

// import React from "react";
// import { useLocation, useParams } from "react-router-dom";

// const User = () =>{
// const {name,Fname} = useParams();
// const location = useLocation();
// return (
// <>
// <h1>user name is {name} {Fname}</h1>
// <h2> my location path is {location.pathname}</h2>
// {location.pathname == "/user/smit/patel" ? (<button onClick={()=>{return alert("success")}}>click me</button>) : null}
// </>);
// };

// export default User;

// useHistory

import React from "react";
import { useLocation, useNavigate, useParams, NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const User = () => {
  const { name, Fname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center">
        user name is {name} {Fname}
      </h1>
      <h2> my location path is {location.pathname}</h2>

      {location.pathname == "/user/smit/patel" ? (
        <NavLink to={() => navigate.push(`/contact`)}>
          click me
        </NavLink>
      ) : null}
    </>
  );
};

export default User;
