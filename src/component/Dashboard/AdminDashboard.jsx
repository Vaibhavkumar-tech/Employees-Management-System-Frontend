import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'
import Details from '../../others/Details'

const AdminDashboard = ({data}) => {

  return (
    <div className='bg-gray-900 bg-cover bg-bg-center lg:h-192 h-400 sm:h-300 md:200 w-200 lg:w-370'>
      <Header data={data}/>
      <CreateTask/>
      <Details data={data}/>
    </div>
  )
}

export default AdminDashboard
