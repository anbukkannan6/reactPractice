import React, { useState, useEffect } from "react";
import { FAKE_API1 } from "./config/config";

export default function ProductComp() {

    // *Step1 Component Outer area executing
    // *step2 return() area will execute
    // *step3 after return() area completed the component is mounted so useEffect() will called 
    // *step4 after useEffect If there is an any update setState() the component will update the specific state dependancies 
    // *

    // !Always use empty ARRAY [] as a default value in useState([])

    const [details, setDetails] = useState([])


    useEffect(() => {
        handleFetch()

    }, [])


    const handleFetch = async () => {
        let response = await fetch(FAKE_API1)
        let data = await response.json()
        setDetails(data)

    }



    return (
        <>

            {details.map((e) => (
                <div key={e.id}>
                    <h1>{e.title + "🚀" + "❤️"}</h1>
                </div>



            ))}

        </>
    )
}
