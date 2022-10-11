import React, { useContext } from "react";
import {FirstName,SecondName} from "./App"

const Cont2 = ( ) =>{

const FName = useContext(FirstName);
const LName = useContext(SecondName);

return(<>
    <h1>welcome {FName} {LName}</h1>
</>);

}

export default Cont2