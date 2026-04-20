import React, { use } from 'react'
import { useState } from 'react'

const login = ({ LoginHandler }) => {

    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        LoginHandler(email, password);
        setEmail("");
        setPassword("");
    }
    
  return (
    <div className='flex justify-center items-center h-[100vh] w-full bg-[url(https://images.unsplash.com/photo-1633199905075-48af7253120e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center'>
        <div className='flex flex-col text-white w-100 p-5 h-140 gap-7 border-2 border-emerald-300 bg-gray-750 rounded-2xl'>
            <form onSubmit={(e)=>{
                handleSubmit(e);
            }}>
                <h2 className='text-2xl font-bold mb-4 m-4'>Login</h2>
                <input required className='mt-30 p-2 ml-7 w-72 border border-emerald-300 rounded-2xl' 
                type="text" 
                placeholder="Username" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input required className='p-2 mt-4 ml-7 w-72 border border-emerald-300 rounded-2xl'
                type="password"
                 placeholder="Password" 
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 />
                <button className='p-2 mt-30 ml-20 w-50 border bg-emerald-300 rounded-2xl'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default login
