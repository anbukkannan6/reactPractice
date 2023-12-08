import React,{useState,useEffect} from "react";

function UsEffectComp() {
    const [data, setData] = useState()

    // !Use Effect Alternative for react lifeCyle method
    // *2 parameters 1st(Initial render function or componet did mount),2nd [dependancy array]
    useEffect(()=>{
        console.log("This is the UseEffect Call");
      


    },[])

    //!Async and await function API call

    const handleFetch = async()=>{

        let newData = await fetch("https://fakestoreapi.com/products/1")
        let datas  = await newData.json();
        setData(datas)
        console.log(datas);

    }
console.log("Out side the return");
    handleFetch();


    return (
        <>

        {/*! How to render the component after the api call is fullfiled */}
        {console.log("THIS IS THE RENDER")}
            <h1>Hello UseEffect{data.id}</h1>
            {console.log(data)}
            {/* {
                data.map((e)=>(
                    <div key={e.id}>



                    </div>
                ))
            } */}

        </>
    )
}

export default UsEffectComp;