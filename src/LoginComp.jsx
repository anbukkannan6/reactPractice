import React from "react";
import { useForm } from "react-hook-form"

export default function LoginComp() {

    // ! When use the useForm() pit will create the synthrtic object

// ! Use Forms WHich is used for make form validaion easier
// *useForm() It is an hook 

// *it consist of different functions namely REGISTER,HANDLESUBMIT,GETVALUE,FORMSTATE:{error},and DEFAULT VALUE
// *REGISTER   {...register("name of the input field",{required:"name is required"})}
// Which is used for get the input avlues from the imputs on every key change
// *HANDLESUBMIT  onSubmit={handleSubmit((value)=>{console.log(values)})}
// which is used for prevent the page relode and manage the values we got from the register
// !GETVALUE getVlue() Able to get the individual value of the input fields without validation
// forState:{error} with this we can show the errors associated with the input field


    const { register, handleSubmit,getValues, formState: { errors } } = useForm({defaultValues:{
        name:"",
        password:""
    }})

    console.log(errors);


    return (
        <>
            <form onSubmit={handleSubmit((values) => {
                console.log(values)
            })}>
                <label>Name:</label>
                <input {...register("name", 
                { required: "Name is required" })} type="text" placeholder="name" />
                <p>{errors.name?.message}</p>
                <br></br>
                <label>Password:</label>
                <input {...register("password", {
                    required: "password is required", 
                    minLength: {
                        value: 4,
                        message: "length should be min of 4",
                        
                        
                    },
                    pattern:{
                        value: /^[A-Z]+$/i,
                        message:"use only caps letters"
                    }
                })} type="text" placeholder="password" />
                <p>{errors.password?.message}</p>

                <br></br>
                <input type="submit" onClick={()=>{
                    console.log(getValues(["name","password"]));
                }}/>

            </form>
        </>
    )
}