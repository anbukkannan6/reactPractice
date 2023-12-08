import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//! With out API

export default function TodoListComp() {

    let uuid = uuidv4()

    // let count = 0

    // useEffect(()=>{
    //     console.log(count = count+1);
    // })



    const [addTask, setAddTask] = useState()


    const [staticTask, setStaticTassk] = useState([
        {
            task: "MEDITATION",
            id: 1
        },
        {
            task: "CARDIO",
            id: 2
        }
    ])

    const handleAdd = (e) => {
        // console.log(e)
        setAddTask(e.target.value)

    }

    // !Its intresting and new code
    // *Adding task using the ID
    const handleAddTask = () => {
        setStaticTassk([...staticTask, { id: uuid, task: addTask }])
        setAddTask("")
        console.log(staticTask);

    }

    //!Realy Intesting Update Task
    // * Update using the Index
    

    const updateTask = (i) => {
// * Prompt has two parameter 1st title, 2nd task. 
        let promptValue = prompt("update the task",staticTask[i].task)
        let copiedValue = [...staticTask]
        copiedValue[i].task = promptValue

        setStaticTassk(copiedValue)
        
       

    }

    //!Delete task..I Have an doubt

    const deleteTask = (deleteId) => {
        console.log(deleteId);
        const filtered = staticTask.filter((checkID) => {
            console.log("CheckId" + checkID.id)
            console.log("DeleteID" + deleteId)
            checkID.id != deleteId
        })
        console.log(filtered);
        setStaticTassk(filtered);
    }


    return (
        <>
            <input type="text" placeholder="Add Your Task" onChange={(e) => handleAdd(e)} />
            <button onClick={handleAddTask}> Add</button>
            {staticTask.map((e, i) => (
                <div key={e.id}>

                    <span>{e.task}</span>
                    <button onClick={() => updateTask(i)}>update</button>
                    <button onClick={() => deleteTask(e.id)}>Delete</button>
                </div>


            ))}

        </>

    )
}