import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-row lg:gap-5 flex-wrap ml-3 lg:w-[90%] w-50 md:w-120 sm:w-120 sm:gap-3 gap-3'>
        <div className='bg-blue-500 h-50 w-50 flex flex-col justify-center items-center ml-5 rounded-2xl hover:scale-110 hover:bg-black border-2 border-black hover:border-emerald-500 '>
            <h1 className='text-7xl font-semibold'>{data.task_count.new_task}</h1>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
        <div className='bg-green-400 h-50 w-50 flex flex-col justify-center items-center ml-5 rounded-2xl hover:scale-110 hover:bg-black border-2 border-black hover:border-emerald-500'>
            <h1 className='text-7xl font-semibold'>{data.task_count.complete}</h1>
            <h3 className='text-2xl font-bold sm:text-1xl md:text-1xl sm:font-normal'>Completed</h3>
        </div>
        <div className='bg-yellow-500 h-50 w-50 flex flex-col justify-center items-center ml-5 rounded-2xl hover:scale-110 hover:bg-black border-2 border-black hover:border-emerald-500'>
            <h1 className='text-7xl font-semibold'>{data.task_count.active}</h1>
            <h3 className='text-2xl font-bold'>Active</h3>
        </div>
        <div className='bg-red-900 h-50 w-50 flex flex-col justify-center items-center ml-5 rounded-2xl hover:scale-110 hover:bg-black border-2 border-black hover:border-emerald-500'>
            <h1 className='text-7xl font-semibold'>{data.task_count.failed}</h1>
            <h3 className='text-2xl font-bold'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
