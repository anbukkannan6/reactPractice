
import React, { useState } from "react";

export default function TicketComp() {

    const [count, setCount] = useState(0)


    const handleUpdate = () => {
        if (count < 10) {
            setCount(count + 1)

        }


    }

    return (

        <>
            {count < 10 ? <h1>{count}</h1> : null}


            {count == 10 ? <p>Ticket is full</p> : null}
            <button onClick={handleUpdate}>Book</button>
        </>


    )
}