import React, { useState ,useEffect} from "react";

export default function ReviceComp(){

    // ! useState Hook used for manage state..State which is act as like a variable
    // * useState is immutable it can be only done with setCount {i.e second index of an array}

    const[count,setCount]=useState(0)
    const[name,setName]=useState()
    const[apiData,setapiData]=useState()

    useEffect(()=>{

       
//! The fetch() function and the .then() method are part of the JavaScript Fetch API, 
//! which provides a modern, promise-based way to make HTTP requests

         fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((json)=>setapiData(json))
        .catch((err)=>console.log(err))

        return()=>{
            console.log("This is Component unMount")
        }
    },[])

    const handleIncrement = ()=>{

        setCount(count+1)

    }

    const handleChange = (e)=>{

        setName(e.target.value)

    }

    console.log("This is Outer range");

    return(
        <>
        <h1 >Booked Tickets:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <br></br>
        <label>Name:</label>
        <input onChange={(e)=>handleChange(e)}/>

        {console.log("This is return stage")}

        <h2>{name}</h2>

        {/* {apiData.map((e)=>(
            console.log(e.title)
        ))} */}
        </>
    )
}

