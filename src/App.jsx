import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClassComp from './ClassComp'
import DayOneFun from './DayOneFun'
import UsEffectComp from './UsEffectComp'
import FormComp from './FormComp'
import ReactHookComp from './ReactHookComp'
import ReviceComp from './ReviceComp'
import LoginComp from './LoginComp'
import TodoListComp from './TodoListComp'
// import StaticImportComp from './StaticImportComp'
import DynamicImport from "./DynamicImport"
import HomeComp from './HomeComp'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
// !RouterProvider is an component of react router dom
import ProductComp from './ProductComp'
import AboutComp from './AboutComp'
import ErrorComp from './ErrorComp'




function App() {
  const [count, setCount] = useState(0)

  const routerApp = createBrowserRouter([
    {
      path:"/",
      element:<HomeComp/>,
      errorElement:<ErrorComp/>,
      children:[
        {
          path:"/",
          element:<h1>🚀WELCOME TO HOME PAGE!❤️</h1>,
          
        },
        {
          path:"/about",
          element:<AboutComp/>
        },
        {
          path:"/login",
          element:<LoginComp/>
        },
        {
          path:"/products",
          element:<ProductComp/>,
          
        },
        {
          path:"/products/:id",
          element:<h1>This is product one🏠🧑‍💻</h1>,
        }
      ],

    },
  ]);

  return (
    <>
      {/* <DayOneFun place={"india"} /> */}
      {/* <ClassComp/> */}

      {/* <UsEffectComp/> */}

      {/* <FormComp/> */}

      {/* <ReactHookComp/> */}
      {/* <ReviceComp/> */}
      {/* <LoginComp/> */}
      {/* <TodoListComp/> */}
      {/* <StaticImportComp/> */}
      {/* <DynamicImport/> */}

      <RouterProvider router={routerApp}/>



      {/* <HomeComp /> */}

      {/* <ChartingComp/> */}


    </>
  )
}

export default App
