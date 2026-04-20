import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='w-80 bg-green-500 h-35 m-5 rounded-2xl hover:bg-black hover:scale-105 border-2 border-black hover:border-emerald-500 lg:w-[90%] md:w-120 sm:w-120'>
        <nav className='flex flex-row justify-between m-3'>
            <h4 className='bg-red-600 h-7 mt-2 font-bold px-1 rounded-2xl '>{data.category}</h4>
            <h4 className='font-bold'>{data.task_date}</h4>
        </nav>
        <div className='ml-6'>
            <h3 className='font-bold text-2xl'>{data.task_title}</h3>
            <h4 className='font-medium'>{data.task_description}</h4>
        </div>
        <div className='ml-55 -mt-17 lg:ml-160 sm:ml-80 lg:-mt-10'>
            <button className='bg-green-900 w-20 h-7 rounded-full transition transform active:scale-90 lg:h-10 lg:w-40'>Completed</button>
        </div>
    </div>
  )
}

export default CompleteTask
