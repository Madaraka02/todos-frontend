import React from 'react'

const SectionHeader = ({status, taskCount}) => {
  return (
    <div className="font-satoshi flex flex-row cursor-pointer justify-between items-center bg-gray-200 p-2 rounded-md">
    <p className='font-semibold'>{status === 'new'? 'Next Up': status === 'progress'? 'In Progress': status === 'complete'? 'Completed': ''}</p>
    <div className={`rounded-full w-6 h-6 ${status === 'new'? 'bg-amber-500': status === 'progress'? 'bg-purple-600': status === 'complete'? 'bg-green-600': ''}  justify-center text-center text-white`}>
        {taskCount}
    </div>
  </div>
  )
}

export default SectionHeader