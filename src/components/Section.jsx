import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { getTasks, updateTask } from '../api/actions'
import SectionHeader from './SectionHeader'
import TaskCard from './TaskCard'
// import data from '../data.json'

const Section = ({status}) => {
    const [data, setData] = useState([])

    const fetchTasks = async () => {
        await getTasks()
        .then((data) => {
          // dispatch to store or set state variable
          // console.log('data',data)
          setData(data)
    
        })
        .catch((err) => {
          console.log(err)
        })
    
      }
    useEffect(() => {
        fetchTasks()
    },[])

    // console.log('data',data)
    const handleUpdateTask = async (id, status) => {

        const payload = {
          status:status
        }
        
        await updateTask(payload, id)
        .then((data) => {
          // dispatch to store or set state variable
          console.log('data',data)
    
        })
        .catch((err) => {
          console.log(err)
        })
    
  
      }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) =>  handleUpdateTask(item.id, status),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const addItemToSection = (id) => {
        console.log('dropId',id, status)
        // run function to update task status in the api
      }
    //   console.log('status', status)
  return (
    <div
    ref={drop}
     className={`w-full flex flex-col gap-2 
     ${isOver && status === 'new'? 'border border-amber-400 h-full p-3 rounded-md':isOver && status === 'progress'? 'border border-purple-600 h-full p-3 rounded-md':isOver && status === 'complete'? 'border border-green-600 h-full p-3 rounded-md':''}`}>
        <SectionHeader status={status} taskCount={data?.filter((tasStatus) => tasStatus.status === status).length}/>
    <div className="flex flex-col gap-1 pt-5">
        {data?.filter((tasStatus) => tasStatus.status === status).map((tas) => (

      <TaskCard 
      key={tas.id}
      taskid={tas.id}
      taskType={tas.status}
      description={tas.description}
      end_date={tas.end_at}
      />
        ))}
      
    </div>
  </div>
  )
}

export default Section