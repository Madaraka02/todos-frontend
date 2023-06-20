import React from 'react'
import { useDrop } from 'react-dnd'
import SectionHeader from './SectionHeader'
import TaskCard from './TaskCard'

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
  return (
    <div
    ref={drop}
     className="w-full flex flex-col gap-2">
        <SectionHeader status={status} taskCount={2}/>
    <div className="flex flex-col gap-1 pt-5">
      <TaskCard 
      type='new'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      
    </div>
  </div>
  )
}

export default Section