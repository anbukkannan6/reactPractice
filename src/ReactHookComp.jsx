import React from "react";

import { useForm } from "react-hook-form"

// console.log(useForm);

// ! 21/11/2023

// 







function ReactHookComp() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(errors);
    // console.log(watch());

    return (
        <>

        <h2>Sign up</h2>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })} >

                <label>Name:</label>
                {/* register is an callback function which get the vlaues of the input */}
                <input  {...register("name", { required: "The name is requires", minLength:{value:4,message:"min length is 4"}  })} type="text" placeholder="Enter your name"

                />
                <br />
                <br />
                <label>Age:</label>
                <input {...register("age")} type="number" placeholder="Enter your Age" ></input>
                <br />
                <br />
                <label>Email:</label>
                <input {...register("email")} type="email" placeholder="enter your Email"></input>
                <br />
                <br />
                <label>password:</label>
                <input {...register("password")} type="text" placeholder="Enter Password"></input>
                <br />
                <br />
                <label>Phone Number:</label>
                <input {...register("phnNumber")} type="number" placeholder="Enter Phone Number" ></input>
                <br />
                <br />

                {/* <input type="submit"/> */}
                <button>Sign Up</button>
                <br />
                <br />
                <button>GetData</button>
            </form>

        </>
    )
}

export default ReactHookComp;