import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import AdminDashboard from '../component/Dashboard/AdminDashboard';

const AllTask = (setProfile) => {
    const data=useContext(AuthContext);
    console.log(data.userdata)

    function handleSubmit(){
        window.location.reload();
    }
    function Profile(){
        setProfile.setProfile.setProfile("abc");
    }
  return (
    <div className='h-full bg-gray-900 p-10 py-20 w-150 sm:w-300 md:300 lg:w-384 lg:h-173.5'>
        <h2 className=' text-2xl font-bold -mt-10 mb-15 text-emerald-500 hover:text-emerald-900'>Employees Details</h2>
        <div>
            <div className='flex flex-row justify-between text-white rounded-2xl lg:w-300 w-100 lg:ml-40 mt-5 sm:w-150 lg:px-25 bg-emerald-500 h-15 items-center'>
                <h2 className='w-1/5 p-2 px-6 text-white font-bold '>Employee Name</h2>
                <h3 className='w-1/6 p-2 px-6 text-white font-bold '>New Task</h3>
                <h4 className='w-1/6 p-2 px-6 text-white font-bold '>Active</h4>
                <h4 className='w-1/6 p-2 px-6 lg:ml-0 -ml-5 text-white font-bold '>Completed</h4>
                <h4 className='w-1/6 p-2 px-6 text-white font-bold '>Failed</h4>
            </div>
        </div>
        <div className='lg:overflow-auto h-90'>
            {Object.values(data.userdata.employees).map(function(e,idx){
                return(
                    <div key={idx} className='flex flex-row justify-between text-white rounded-2xl lg:w-300 w-100 sm:w-150 lg:ml-40 mt-5 lg:px-25 border-3 border-emerald-500 h-15 items-center hover:border-red-600 hover:h-20'>
                        <img className='lg:w-10 w-5 h-5 lg:rounded-2xl lg:ml-0 ml-3 object-cover overflow-hidden lg:h-13' src={e.img} />
                        <button 
                        onClick={()=>{
                            Profile();
                            setProfile.setProfile.setProfileDetail(e);
                        }}
                        className='w-1/5 p-2 px-6  text-blue-400 font-bold transition transform active:scale-90 underline decoration-blue-500 cursor-pointer'>{e.firstName}</button>
                        <h3 className='w-1/6 p-2 px-6  text-white font-bold '>{e.task_count.new_task}</h3>
                        <h4 className='w-1/6 p-2 px-6  text-white font-bold '>{e.task_count.active}</h4>
                        <h4 className='w-1/6 p-2 px-6  text-white font-bold '>{e.task_count.complete}</h4>
                        <h4 className='w-1/6 p-2 px-6  text-white font-bold '>{e.task_count.failed}</h4>
                    </div>
                )
            })}
        </div>
        <button onClick={()=>{
            handleSubmit();
        }}
        className='text-white bg-emerald-500 w-30 h-10 rounded-2xl flex items-center justify-center lg:mt-6 mt-15 lg:ml-170 ml-50 transition transform active:scale-90 cursor-pointer hover:scale-90'>Back</button>
    </div>
  )
}

export default AllTask
