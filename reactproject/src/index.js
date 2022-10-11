import React from "react";

// var React = require('react');

// var ReactDOM = require('react-dom');
import ReactDOM from "react-dom";


import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

// import App from "./App"

// ReactDOM.render('kya dikhana hai',
// 'kaha dikhana hai', 'callback func');

// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// const img1 = "https://picsum.photos/500/300";
// const img2 = "https://picsum.photos/500/310";
// const links = "https://youtube.com"

// ReactDOM.render(
// //  <React.Fragment>
// <>
// <h1 className="heading"> hello world</h1>
// <p>Smit patel</p>
// <ul>
//   <li>1</li>
//   <li>2</li>
// </ul>

// <p>Current date is = {currDate}</p>
// <p>Current time is = {currTime}</p>

// {/* // Html global attributes */}

// <h1 contentEditable = "true">Smit</h1>

// {/* self closing tag */}

// <img src="https://picsum.photos/200/300" alt="random images"  />

// <img src={img1} />

// <a href={links}>
// <img src={img2} />
// </a>
// </>,
// // </React.Fragment>,
//  document.getElementById('root')
// );

// task 1

// let currDate = new Date(2020,5,20,18);
// currDate = currDate.getHours();

// let greeting = "";

// if(currDate >= 1 && currDate <12){
//   greeting = "Good morning";
// }
// else if(currDate >=12 && currDate < 19){
//   greeting = "Good Afternoon";
// }
// else{
//   greeting = "Good Night";
// }

// ReactDOM.render(
//   <>
//     <h1>Hello,{greeting}</h1>,

//   </>,
//   document.getElementById('root')
// );







// ReactDOM.render(
// <BrowserRouter>
//   <App/>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(<>
<BrowserRouter>
<App/>
</BrowserRouter></>
  ,document.getElementById('root')
);
