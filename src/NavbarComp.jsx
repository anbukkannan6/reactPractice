import React from "react";
import{Link} from "react-router-dom"


export default function NavbarComp(){


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