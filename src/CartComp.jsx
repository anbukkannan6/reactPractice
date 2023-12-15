import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addItem,removeItem,clearCart } from "./config/CartSlice";
import useOnline from "./config/useOnline";

// *import an useDispathcer Hook and useSelector hoot
// ! useSelector is sunbscribing to the cart slice in the store
// * useDispatch is an used for dispatch an action which trigures the reducer function for modifing the cart slice








export default function CartComp(){
    const online = useOnline()
    console.log(online);
    const dispatch = useDispatch()
    const CartItems = useSelector(store=>store.cart.items)
    console.log(CartItems)
    const handleAddItem = ()=>{
        dispatch(addItem("Grapes"))
 
    }
    const handleDelete = ()=>{
        dispatch(removeItem())
 
    }
    const handleClearCart = ()=>{
        dispatch(clearCart())

    }

    if(!online){
        return <h1>⭕🏮You are in ofline Check internet connectin</h1>
    }

    return(
        <>
        

        <h3>ITEM-1</h3>
        <button onClick={handleAddItem}>Add</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleClearCart}>Clear Cart</button>
        <h3>ITEM-2</h3>
        <h3>ITEM-3</h3>
        <h3>ITEM-4</h3>
        <h3>ITEM-5</h3>
        <h3>ITEM-6</h3>
        </>
    )
}