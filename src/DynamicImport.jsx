import React, { useState } from "react";
// import { INDEX } from "./ImportStorage"



export default function StaticImportComp() {
    const [show, setShow] = useState(true)
    const [data, setData] = useState()


//!Dynamic Import using async and await
//! the file only load in brower when only it used until it will not load in the browser

  const handleClick = async () => {
    
        //* simply import the file and extract the and use it
        //! use the Import keyWord and use file path as string
        const response = await import("./ImportStorage")
        setShow(false)
        console.log(response.INDEX);
        setData(response.INDEX)

    }


    return (
        <>
            <h1>The Trading instrument</h1>
            {console.log(data)}
            {show ? null :
                <h2>Name of Index:{data[0].index}</h2>}
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}