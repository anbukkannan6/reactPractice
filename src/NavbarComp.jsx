import React from "react";
import{Link} from "react-router-dom"
import { authenticatContext } from "./config/context/context";
import { useContext } from "react";

export default function NavbarComp(){

    const data = useContext(authenticatContext)
    console.log(data);


    return(
        <>
        <div className="navBar">
        <span>Besent</span>
        <ul>
            <Link to={"/"}><li>Home 🏠</li></Link>
            
            <Link to={"/products"}><li>Prodects 📚</li></Link>
            <Link to={"/about"}><li>About 🧮</li></Link>
            <Link to={"/login"}><li>Login 🧑‍💻</li></Link>
             
            
            
        </ul>
        </div>
        </>
    )
}