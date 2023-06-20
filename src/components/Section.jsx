import React from 'react'
import SectionHeader from './SectionHeader'
import TaskCard from './TaskCard'

const Section = ({status, tasks}) => {
  return (
    <div className="w-full flex flex-col gap-2">
        <SectionHeader status={status} taskCount={2}/>
    <div className="flex flex-col gap-1">
      <TaskCard 
      type='new'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    </div>
  </div>
  )
}

export default Section