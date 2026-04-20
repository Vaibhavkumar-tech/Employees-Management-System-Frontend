import React from 'react'
import axios from 'axios'

const Header = ({data}) => {


    async function UserLogOut(){
        await axios.delete("http://localhost:3000/loggeduser");
        data.setUser(null);
    }

  return (
    <div>
        <nav className='flex flex-row justify-between p-9 lg:w-full md:w-120 sm:w-120'>
            <div>
                <h4 className='text-2xl text-white font-medium'>Hello,</h4>
                <h2 className='text-4xl text-white font-bold '>Team👋</h2>
            </div>
            <button onClick={UserLogOut} className='bg-red-700 rounded-2xl p-4 font-semibold w-30 h-12 text-1xl py-2  transition transform active:scale-90 cursor-pointer hover:scale-90'>Logout</button>
        </nav>
    </div>
  )
}

export default Header
