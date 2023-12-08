import React, { useState, useEffect } from "react";


function FormComp() {
    //* 20th Nov 2023
    //! Render list
    //! useState
    //! useEffect
    //! Async and await
    //! React Form
    //! &&, ||, !NOT
    // * onChange={(e)=>handleChange(e)} 
    //!It creates the Synthtec base Event (It is an object that has keys like target,value)


    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [show, setShow] = useState(false)



    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)

    }
    return (
        <>


            {
                !show &&

                <form>
                    <h1>Fill the Form</h1>
                    <label>Name</label>
                    <input onChange={(e) => handleName(e)} type="text" placeholder="Eneter your Name" />
                    <br />
                    <br />
                    <label>Age</label>
                    <input onChange={(e) => handleAge(e)} type="number" placeholder="Enter your Age" />
                    <br />
                    <br />
                    <label>Email</label>
                    <input onChange={(e) => handleEmail(e)} type="email" placeholder="Enter your email" />
                    <button onClick={(e) => handleShow(e)}>Submit</button>
                </form>


            }

            //* Turnery operator
            
            {show ? <div>
                <h1>Name:{name}</h1>
                <h1>Age:{age}</h1>
                <h1>Email:{email}</h1>

            </div> : null


            }


        </>
    )
}

export default FormComp;