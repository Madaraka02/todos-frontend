import React from 'react'
import { useDrop } from 'react-dnd'
import SectionHeader from './SectionHeader'
import TaskCard from './TaskCard'
import data from '../data.json'

const Section = ({status, tasks}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) =>  addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const addItemToSection = (id) => {
        console.log('dropId',id, status)
        // run function to update task status in the api
      }
      console.log('status', status)
  return (
    <div
    ref={drop}
     className={`w-full flex flex-col gap-2 
     ${isOver && status === 'new'? 'border border-amber-400 h-full p-3 rounded-md':isOver && status === 'progress'? 'border border-purple-600 h-full p-3 rounded-md':isOver && status === 'complete'? 'border border-green-600 h-full p-3 rounded-md':''}`}>
        <SectionHeader status={status} taskCount={2}/>
    <div className="flex flex-col gap-1 pt-5">
        {data?.filter((tasStatus) => tasStatus.status === status).map((tas) => (

      <TaskCard 
      id={tas.id}
      taskType={tas.status}
      description={tas.description}
      />
        ))}
      
    </div>
  </div>
  )
}

export default Section