import React, { useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import {  useDispatch } from 'react-redux'
import { addTask } from '../app/taskSlice'
import { nanoid } from 'nanoid';


function TaskInput() {

        const [task,setTask]=useState('');
        const dispatch=useDispatch();

        const handleSubmit=(e)=>{
                e.preventDefault();
                if(task){
                        dispatch(addTask({id:nanoid(),text:task}))
                        setTask('');
                }
        }

  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",width:"50%",backgroundColor:"black",justifyContent:"center",margin:"0 auto"}}>
        <input
        type='text'
        value={task}
        onChange={e=>setTask(e.target.value)}
        placeholder='Enter your task'
        style={{width:"90%",padding:"20px 20px",alignContent:"center",fontSize:18}}
        
        />
        <IoAddOutline style={{color:"white",fontSize:32,cursor:"pointer"}} onClick={handleSubmit}/>
    </div>
  )
}

export default TaskInput