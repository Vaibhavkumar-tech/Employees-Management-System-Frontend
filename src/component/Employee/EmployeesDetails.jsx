import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import HeaderEmployee from './HeaderEmployee'
import MainEmployees from './MainEmployees'


const EmployeesDetails = (data) => {
  return (
    <div className='bg-gray-900 h-[70vh] w-full'>
        <HeaderEmployee data={data}/>
        <MainEmployees data={data}/>
    </div>
  )
}

export default EmployeesDetails
