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


function App() {
  const [count, setCount] = useState(0)

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
      <DynamicImport/>
      




    </>
  )
}

export default App
