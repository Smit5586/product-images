import React, { useEffect, useState } from "react";
import axios from 'axios';


const ComA =()=>{

const[name,setName]=useState();
const[nam,setNam]=useState();
const[move,setMove]=useState();
const[skill,setSkill]=useState();


const abc = (event) => {
setName(event.target.value)
}




useEffect(() => {
    async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name} `);
        
        setNam(res.data.name);
        setMove(res.data.moves.length);
        setSkill( res.data.moves[0].move.name)
    }
    getData();
})




return (<>
  <h1>you have selected {name} </h1>
  <h1>My name is {nam} </h1>
  <h1> i have {move} moves </h1>
  <h1>My skill is {skill} </h1>

  <select value={name} onChange = {abc}>
    <option value="1">1</option>
    <option value="25">25</option>
    <option value="2">2</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select>
</>);
};

export default ComA;