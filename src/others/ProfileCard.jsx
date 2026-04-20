import React from 'react'

const ProfileCard = ({data}) => {
  return (
    <div className="h-120 w-70 bg-black mt-30 ml-20 ">
        <h2 className="text-white font-bold text-2xl ml-11 mb-2 p-2">Current Profile</h2>
      <div className="h-18 w-30 ml-20 ">
        <img className="object-cover object-center rounded-full hover:scale-110" src={data.LoggedInUser.img}/>
      </div>
      <div className="mt-35 text-white flex flex-row ml-5">
        <div>
            <h2 className="text-1xl font-bold mb-1">Name</h2>
            <h2 className="text-1xl font-bold mb-1">Location</h2>
            <h2 className="text-1xl font-bold mb-1">Experience</h2>
            <h2 className="text-1xl font-bold mb-1">Job</h2>
            <h2 className="text-1xl font-bold mb-1">Age</h2>
        </div>
        <div>
            <h3 className="text-1xl font-medium mb-1">: {data.LoggedInUser.firstName}</h3>
            <h3 className="text-1xl font-medium mb-1">: {data.LoggedInUser.location}</h3>
            <h3 className="text-1xl font-medium mb-1">: {data.LoggedInUser.experience}</h3>
            <h3 className="text-1xl font-medium mb-1">: {data.LoggedInUser.job}</h3>
            <h3 className="text-1xl font-medium mb-1">: {data.LoggedInUser.age}</h3>

        </div>
      </div>
    </div>
  )
}

export default ProfileCard
