import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../Task/TaskList'
import ProfileCard from '../../others/ProfileCard'

const EmployeeDashboard = ({data}) => {    
    
  return (
    <div className='lg:flex-row bg-[url(https://images.unsplash.com/photo-1774888912214-0c360aaa0752?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-full sm:w-full md:w-full lg:w-screen min-h-screen sm:min-h-screen md:min-h-screen lg:h-screen overflow-x-hidden'>
      <div>
        <ProfileCard data={data}/>
      </div>
      <div>
        <h2 className='text-3xl font-bold text-emerald-500 -mt-140 ml-5 sm:ml-10 lg:-ml-80 lg:mt-10 cursor:pointer hover:text-emerald-900'>Employee Panel</h2>
        <div className='bg-black text-white w-full sm:w-full md:w-[70%] lg:flex-1 h-screen max-h-screen mt-0 ml-0 lg:ml-0 overflow-y-auto overflow-x-hidden'>
          <Header data={data}/>
          <TaskListNumber data={data.LoggedInUser}/>
          <TaskList data={data.LoggedInUser}/>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
