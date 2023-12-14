import React from "react";
import {userContext} from "./config/context/context";
import { useContext } from "react";



export default function FooterComp() {
    
    // !passing the userContext into the useContext hook we can able to access it in the current component

    const {user} = useContext(userContext)
    const{name,email}=user

    return (

        <>
            <div className="footerBar">
               
                <hr />
                <h1>{name},{email}</h1>
                <h2>Besent Technlogies|MaraimalaiNagar|copyrights@2023</h2>
            </div>
        </>
    )
}