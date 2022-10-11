import React from "react";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// import Func from "./test";

// const App = () => {
//   return (<><Func />
//   <Func />
//   </>
//   )
//
// export default App;

// simple calculator

// import React  from "react";

// import {add,sub,mul,div} from "./Cal";

// let App = (a,b) =>{
//   return (<>
//     <ul>
//       <li>sum is {add(10,20)}</li>
//       <li>div is {div(10,42)}</li>
//       <li>mul is {mul(10,20)}</li>
//       <li>sub is {sub(10,20)}</li>
//     </ul>
//   </>);
// }

// export default App

// props

// import React  from "react";

// import Cards from "./Cardsprop";

// const App = () =>{
//     return(
//         <>
//         <Cards
//     imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/stranger-things-matthew-modine.png?q=50&fit=crop&w=1500&dpr=1.5"
//     s="stangerthings"
//   />,
//   <Cards imgsrc ="https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg" s = "new" />
//   </>
//     );
// }

// export default App;

// import Set from "./Arrayimg";
// import Cards from "./Cardsprop";

// const App = () => {
//  return ( <>
//      <Cards imgsrc={Set[0].imgsrc} s={Set[0].s} />
//      <Cards imgsrc={Set[1].imgsrc}  s={Set[1].s}/>
//        </>);
// };

// export default App;

// Hooks

// onclick count increses

// const App =() =>{

// const state = useState();

// const [count,plustime] = useState(0);

// const Time = () =>{
//     plustime(count + 1)
// }
//     return(
//         <>
//         <h1>{count}</h1>
//            <button onClick={Time}> Click Me </button>
//         </>
//     );

// }
// export default App

// onclick

// const App =( )=>{
//   let newTime = new Date().toLocaleTimeString();
//   const state = useState();
//   const [cTime,setTime] = useState(newTime);

//   const changeTime = () => {
//     let newCTime = new Date().toLocaleTimeString();
//     setTime(newCTime);
//   }
// return(<>
//     <h1>{cTime}</h1>
//     <button onClick={changeTime}>Click Me</button>
// </>);
// }
// export default App;

//

// const App = () => {

//     let Time = new Date().toLocaleTimeString();

//     const state = useState();

//     const[cTime,setTime] = useState(Time);

//     const updateTime = () => {
//         let cuTime =  new Date().toLocaleTimeString();
//         setTime(cuTime);

//     };
//     setInterval(updateTime,1000);
// return(
//     <>
//         <h1>{cTime}</h1>
//     </>
// );

// }

// export default App

// const App = () => {

//     let e = "red";

// const [cbg,dbg]= useState(e);

// const [name,setName]= useState('click me');

// const bgChange = () =>{
//  let f = "black";

//  dbg(f);
//  setName('awesome');

// }

// return(
//     <><div style={{backgroundColor : cbg}}>
//         <button onClick={bgChange}>{name}</button>
//         </div>
//     </>
// );
// }

// export default App;

// const App = () => {

//     const [name,setName] = useState();

//     const [AllName,FullName] =useState();

//     const InputEvent = (event) =>{

//         setName(event.target.value)
//     }

//     const SetFullName = () =>{
//         FullName(name)
//     }

// return(
//     <>
//         <h1>hello {AllName} </h1>
//         <input type="text" placeholder="enter the name" onChange={InputEvent} value = {name}></input>
//         <button onClick={SetFullName}>click me</button>
//     </>
// );
// }

// export default App;

// const App = () => {

//     const [time,settime] = useState(0);

//     const IncTime = () =>{
//         settime(time + 1)
//     }

//     const DecTime = () => {

//         if(time > 0){
//         settime(time - 1)}
//         else{
//             settime(0)
//             alert("sorry limit is reached")
//         }
//     }

// return(
// <>
// <h1>{time}</h1>
// <button onClick={IncTime}>increses</button>
// <button onClick={DecTime}>decreses</button>

// </>
// );

// }

// export default App;

// useContext

// import Cont1 from "./cont1";

// const FirstName = createContext();
// const SecondName = createContext();

// function App() {
//     return (
//         <>
//             <FirstName.Provider value={"Smit"}>
//                 <SecondName.Provider value={"patel"}>
//                     <Cont1 />
//                 </SecondName.Provider>
//             </FirstName.Provider>
//         </>
//     );
// }

// export default App;
// export { FirstName, SecondName };

// useEffect

// const App = () =>{

// const [count,plustime] = useState(0);
// const [count2,plustime2] = useState(0);

// useEffect (() =>{
//     alert("clicked")
// },[count2]);

// const Time = () =>{
//     plustime(count + 1)

// }

//     const Time2 = () => {
//       plustime2(count2 + 1);
//     }

//     return(
//         <>

//            <button onClick={Time}> Click Me   {count}</button>
//            <button onClick={Time2}> Click Me  {count2}</button>
//         </>
//     );

// }

// export default App;

// useMemo

// const App =() =>{

// const [count,plustime] = useState(0);
// const [count2,plustime2] = useState(0);

// //useMemo  for jab count ki value change ho to hi function call hona chaiye for increses speed

// const memo = useMemo(()=>{
// console.log("xyz");
//  return count * 10

// },[count]);

// const Time = () =>{
//     plustime(count + 1)
// }

// const Time2 = () => {
//           plustime2(count2 + 1);
//         }

//     return(
//         <>
//         <h1>{memo}</h1>
//         <h1>{count}</h1>
//         <h1>{count2}</h1>
//            <button onClick={Time}> Click Me </button>
//            <button onClick={Time2}>Click me</button>
//         </>
//     );

// }
// export default App

// import ComA from "./ComA";

// const App = () => {
// return(
//     <>
//         <ComA />
//     </>
// );
// }

// export default App;

// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import Error from "./Error";
// import User from "./User";

// const App = () => {
//   return (
//     <>
//     <Menu />
//       <Routes>
//         <Route  path="/" element={<About name = "About"/>} />
//         <Route  path="/contact" element={<Contact name = "Contact" />} />

//         <Route   path="/user/:name/:Fname" element = {<User/>} />
//       </Routes>
//     </>
//   );
// };

// export default App;

// import Table from "./Table";

// const App = () => {
//   const [name, setName] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     let data = await Table();
//     setName(data);
//   };

//   return (
//     <>
//       <div className="table">
//         <table>
//           <tr>
//             <th>id</th>
//             <th>title</th>
//             <th>body</th>
//           </tr>
//           {name.map((user) => {
//             return (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>
//                   {user.title.length > 30
//                     ? user.title.substring(0, 30)
//                     : user.title}
//                 </td>
//                 <td>
//                   {user.body.length > 30
//                     ? user.body.substring(0, 30)
//                     : user.body}
//                 </td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };
// export default App;

import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Photos from "./Photos";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </>
  );
};
export default App;
