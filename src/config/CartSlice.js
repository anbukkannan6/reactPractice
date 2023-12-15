import { createSlice } from "@reduxjs/toolkit";
// !A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
//*Creating the slice of an store
//!createSlice is an fuction which recevies an object as a parameter and return an Slice object
const CartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: ["Apple","Banana"]
        },
        reducers: {
            // !reducers is an functon which calls when the dispatch of an action triggured

            // *state which is an initaialState
            // !state==initialState
            addItem: (state, action) => {
                state.items.push(action.payload);
            },
            removeItem: (state, action) => {
                state.items.pop(action.payload);

            },
            clearCart: (state) => {
                state.items = []
            },
        }
    }
)

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
