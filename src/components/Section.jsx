import React from 'react'
import TaskCard from './TaskCard'

const Section = ({status, tasks}) => {
  return (
    <div className="w-full flex flex-col gap-2">
    <div className=" flex flex-row cursor-pointer justify-between items-center bg-gray-200 p-2 rounded-md">
      <p className='font-semibold'>{status === 'new'? 'Next Up': status === 'progress'? 'In Progress': status === 'complete'? 'Completed': ''}</p>
      <div className={`rounded-full w-6 h-6 ${status === 'new'? 'bg-amber-500': status === 'progress'? 'bg-purple-600': status === 'complete'? 'bg-green-600': ''}  justify-center text-center text-white`}>1</div>
    </div>
    <div className="flex flex-col gap-1">
      <TaskCard type='new'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    </div>
  </div>
  )
}

export default Section