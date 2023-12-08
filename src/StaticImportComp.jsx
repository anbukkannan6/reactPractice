import React,{useState} from "react";
import { INDEX } from "./ImportStorage"

// !Static import - Import the common storage and use it here
//* When the web page lode the entire IMPORTSTORAGE will be loaded
//* So we make it dynamic using Async Await method

export default function StaticImportComp() {
    const [show, setShow] = useState(true)
    const handleClick = () => {
        setShow(false)
    }

    return (
        <>
            <h1>The Trading instrument</h1>
            {show?null:
            <h2>Name of Index:{INDEX[0].index}</h2>}
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}