import React from 'react'

const MainEmployees = (data) => {
    const back=data.data.data
    const detail=data.data.data.ProfileDetail
    console.log(back)
    function handleSubmit(){
        back.setDetails("alltasks");
        back.setProfile(null);
    }

  return (
    <div className='bg-gray-800 h-[71vh] w-full flex flex-col px-20 text-white overflow-auto'>
        <div>
            <h2 className='text-2xl font-bold mb-3 mt-5 '>About</h2>
            <p className='font-medium '>{detail.about}</p>
        </div>
        <div className='mt-7'>
            <h1 className='text-2xl font-bold mb-3'>Skills</h1>
            <div className='flex flex-row gap-10'>
                {detail.skills.map((e,idx)=>{
                    return(
                        <h4 key={idx} className='border-3 p-1 border-emerald-500'>{e}</h4>  
                    )
                })}
            </div>
        </div>
        <div className='mt-8'>
            <h1 className='text-2xl font-bold mb-3'>Language</h1>
            <div className='flex flex-row gap-10'>
                {detail.language.map((e,idx)=>{
                    return(
                        <h4 key={idx} className='border-3 p-1 border-emerald-500'>{e}</h4>  
                    )
                })}
            </div>
        </div>
        <button
        onClick={()=>{
            handleSubmit();
        }}
         className='bg-green-500 ml-150 w-40 h-10 mt-2 mb-3 rounded-full transition transform active:scale-90 cursor-pointer hover:scale-90'>Back</button>
    </div>
  )
}

export default MainEmployees
