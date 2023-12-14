import React,{useState} from "react";

export default function SelectComp(){

    const[index,setIndex]=useState(["Nifty 50","bankNifty","Sensex","Midcap Indx","Nifty 100"])

    return(
        <>
        <select>
   {index.map((e)=>(
    <option>{e}</option>
   ))}
        </select>
        </>
    )
}