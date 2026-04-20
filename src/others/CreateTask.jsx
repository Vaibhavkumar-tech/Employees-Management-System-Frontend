import React from 'react'
import { useState } from 'react'
import NewTask from '../component/Task/NewTask';
import axios from 'axios'

const CreateTask = () => {

    const [new_task,setNew_task]=useState("");
    const [task_date,setTask_date]=useState("");
    const [assignTo,setAssignTo]=useState("");
    const [category,setCategory]=useState("");
    const [task_description,setTask_description]=useState("");

    const [Newtask,setNewtask]=useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        let obj={...Newtask};
        obj={task_title:new_task,task_description:task_description,task_date:task_date,category:category,active:false,complete:false,failed:false,new_task:true};
        const employees = await axios.get("https://employees-management-system-backend.vercel.app/employees");
        console.log(employees.data)
        let id=0;
        let updateEmployee=null;
        Object.values(employees.data).forEach((employee)=>{
            if(employee.firstName==assignTo){
                employee.tasks.push(obj);
                employee.task_count.new_task+=1;
                id=employee._id 
                updateEmployee=employee 
            }
        });
        console.log(employees.data);

        await axios.put(`https://employees-management-system-backend.vercel.app/employees/${id}`,updateEmployee);
        window.location.reload(); 
        setNewtask(obj);
        setNew_task("");
        setTask_date("");
        setAssignTo("");
        setCategory("");
        setTask_description("");
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            handleSubmit(e);
        }}>
            <div className='text-white bg-gray-900 lg:h-105 flex flex-col lg:flex-row justify-start -mt-7'>
                <div className='flex flex-col ml-15 mt-10'>

                    <h3 className='text-white font-medium mt-4 mb-1'>Task Title</h3>

                    <input 
                     className='p-2 border-2 border-emerald-400 w-120 text-white' 
                     type="text"
                      placeholder='Make a UI Design'
                      value={new_task}
                      onChange={(e)=>{
                        setNew_task(e.target.value)
                      }}
                      />
                    <h3 className='text-white font-medium mt-4 mb-1'>Date</h3>

                    <input 
                    className='p-2 border-2 border-emerald-400 w-120 text-white' 
                    type="date"
                    value={task_date}
                    onChange={(e)=>{
                        setTask_date(e.target.value)
                    }}
                    />
                    <h3 className='text-white font-medium mt-4 mb-1'>Assign To</h3>
                    <input 
                    className='p-2 border-2 border-emerald-400 w-120 text-white' 
                    type="text" 
                    placeholder='Employee Name'
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    />
                    <h3 className='text-white font-medium mt-4 mb-1'>Category</h3>
                    <input 
                    className='p-2 border-2 border-emerald-400 w-120 text-white' 
                    type="text" 
                    placeholder='Design,Dev,etc'
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    />
                </div>
                <div className='mt-15 lg:ml-90 text-white flex flex-col ml-17'>
                    <h3 className='m-2'>Description</h3>
                    <input 
                    className='p-2 border-2 border-emerald-400 w-120 text-white h-50' 
                    type="textarea" 
                    value={task_description}
                    onChange={(e)=>{
                        setTask_description(e.target.value)
                    }}
                    />
                    <button className='bg-green-500 mt-9 h-10 rounded-full transition transform active:scale-90 cursor-pointer hover:scale-90 w-120'>Create Task</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreateTask
