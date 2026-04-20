import AllTask from './AllTask'

const Details = ({data}) => {
    
    function handleClick(e){
        e.preventDefault();
        data.setDetails("alltasks");
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            handleClick(e);
        }}>
            <button className='cursor-pointer text-white mt-15 lg:ml-160 ml-60 bg-emerald-500 w-50 h-12 font-bold transition-all duration-150 ease-in-out active:scale-95 active:shadow-inner hover:scale-90'>
                Employee Details
            </button>
        </form>
    </div>
  )
}

export default Details
