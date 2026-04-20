import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div className="ml-3">
        {data.tasks.map((e,index)=>{
            if(e.active){
                return <AcceptTask key={index} data={e}/>
            }
            if(e.complete){
                return <CompleteTask key={index} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={index} data={e} />
            }
            if(e.new_task){
                console.log(e)
                return <NewTask key={index} data={e}/>
            }
        })}
    </div>
  )
}

export default TaskList
