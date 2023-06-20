import React from 'react'

const TaskDescription = ({description}) => {
  return (
    <div className='w-full h-full flex flex-col font-satoshi'>
    <div className="w-full h-full flex flex-col gap-2 py-2">
    <p className='text-[18px]'>{description}</p>
    </div>
</div>
  )
}

export default TaskDescription