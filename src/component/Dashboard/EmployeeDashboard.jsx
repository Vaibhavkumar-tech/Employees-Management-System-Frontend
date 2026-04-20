import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../Task/TaskList'
import ProfileCard from '../../others/ProfileCard'

const EmployeeDashboard = ({data}) => {    
    
  return (
    <div className='flex flex-col bg-[url(https://images.unsplash.com/photo-1774888912214-0c360aaa0752?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-250 lg:w-full lg:flex-row md:flex-col sm:flex-col h-670 lg:h-173.5 sm:h-650'>
      <div>
        <ProfileCard data={data}/>
      </div>
      <div>
        <h2 className='text-3xl font-bold text-emerald-500 -mt-140 ml-5 sm:ml-10 lg:-ml-80 lg:mt-10 cursor:pointer hover:text-emerald-900'>Employee Panel</h2>
        <div className='h-450 w-100 ml-20 mt-150 lg:mt-0 bg-black text-white lg:overflow-auto lg:w-274 md:w-[70%] sm:w-[60%] lg:h-150 sm:h-350'>
          <Header data={data}/>
          <TaskListNumber data={data.LoggedInUser}/>
          <TaskList data={data.LoggedInUser}/>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
