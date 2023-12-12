import React from "react";
import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";
import ProductComp from "./ProductComp";
import AboutComp from "./AboutComp";
import LoginComp from "./LoginComp";
// import {createBrowserRouter,BrowserRouter,Route,Routes,Link,NavLink, createBrowserRouter} from "react-router-dom"
import {Outlet} from "react-router-dom"

export default function HomeComp(){

    

    return(

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

        <NavbarComp/>
        {/* <LoginComp/>

        <ProductComp/>
        <AboutComp/>  */}
        {/* THIS CAPTURES AN CHILDREND ELEMENTS OF THE PAGE */}
    <Outlet/>



{/* 
        <h1>🚀WELCOME TO HOME PAGE!❤️</h1> */}
        
        <FooterComp/>
        </>
    )
}
