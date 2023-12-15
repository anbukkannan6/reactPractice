import { createContext } from "react"

//! The context has been created

// *createContext is an function in that get the object as Argument..Whcih means We updated the data into context
// *we can use this data anywhere in the code component using the useHook

export const userContext = createContext(
    {
        user: {
            name: "anbukannan",
            email: "anbu@gmail.com"
        }
    }
)
export const authenticatContext = createContext("Default data in context")

