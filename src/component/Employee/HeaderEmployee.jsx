import React from 'react'

const HeaderEmployee = (data) => {
    const detail=data.data.data.ProfileDetail
  return (
    <div className='bg-[url(https://i.pinimg.com/1200x/91/a6/fc/91a6fc47a46c257c8c4ecec79fa3499b.jpg)] bg-cover bg-center h-50 flex flex-row items-center text-white'>
        <div className='ml-20'>
            <img className='h-50 p-3 w-50 rounded-full object-cover hover:scale-110' src={detail.img} />
        </div>
        <div className='ml-10'>
            <h3 className='text-3xl font-bold text-white'>{detail.firstName}</h3>
            <h4 className='text-1xl font-semibold text-white'>{detail.job}</h4>
            <div className='flex flex-row gap-3 mt-3'>
                <button className="bg-emerald-400 rounded-2xl h-10 w-30 transition transform active:scale-90 cursor-pointer hover:scale-90" >Contact</button>
                <button className="bg-emerald-400 rounded-2xl h-10 w-30 transition transform active:scale-90 cursor-pointer hover:scale-90" >Resume</button>
            </div>
        </div>
        <div className='ml-130 text-white flex flex-row '>
            <div>
                <h2 className='text-1xl font-bold'>Availability</h2>
                <h2 className='text-1xl font-bold'>Age </h2>
                <h2 className='text-1xl font-bold'>Location</h2>
                <h2 className='text-1xl font-bold'>Year of Experience</h2>               
            </div>
            <div className='ml-10'>
                <h3 className='text-1xl font-serif'>: {detail.availability}</h3>
                <h3 className='text-1xl font-serif'>: {detail.age} </h3>
                <h3 className='text-1xl font-serif'>: {detail.location}</h3>
                <h3 className='text-1xl font-serif'>: {detail.experience}</h3>
            </div>
        </div>
      
    </div>
  )
}

export default HeaderEmployee
