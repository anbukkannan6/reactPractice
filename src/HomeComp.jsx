import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";
import ProductComp from "./ProductComp";
import AboutComp from "./AboutComp";
import LoginComp from "./LoginComp";
// import {createBrowserRouter,BrowserRouter,Route,Routes,Link,NavLink, createBrowserRouter} from "react-router-dom"
import { Outlet } from "react-router-dom"
// import ContextProvide from "./config/context/ContextProvide";
// !Outlet is an component which the childrends of react router is passing
import { userContext,authenticatContext } from "./config/context/context";

// *Simply wrap the components with <CONTEXTNAME.PROVIDER VALUE={}>    <CONTEXTNAME.PROVIDER>


export default function HomeComp() {

    const [user, setUser] = useState( {
            name: "Dummy",
            email: "dummy@gmail.com"
        }
    )


    return (

        <>
            {/* This is an NESTED ROUTES */}
            {/* <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<NavbarComp/>}/>
                <Route path={"/about"} element={<AboutComp/>}/>
                <Route path={"/login"} element={<LoginComp/>}/>
                <Route path={"/footer"} element={<FooterComp/>}/>
        
            </Routes>
        </BrowserRouter> */}

            {/* <LoginComp/>

        <ProductComp/>
        <AboutComp/>  */}
            {/* THIS CAPTURES AN CHILDREND ELEMENTS OF THE PAGE */}

            {/* 
        <h1>🚀WELCOME TO HOME PAGE!❤️</h1> */}

            <userContext.Provider value={{
                user: user
            }}>
                <authenticatContext.Provider value={"Updated Data"}>
                
                <NavbarComp />
                <Outlet />
                <FooterComp />
                    
                </authenticatContext.Provider>
            </userContext.Provider>



        </>
    )
}
