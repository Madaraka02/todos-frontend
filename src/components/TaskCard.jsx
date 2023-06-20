import React from 'react'

const TaskCard = ({type, description, end_date}) => {
  return (
    <div className={`font-satoshi w-full rounded-md shadow-md px-4 py-3 cursor-pointer ${type === 'new'? 'border-amber-300' : type === 'progress'? 'border-purple-600' : type === 'complete'? 'border-green-600' : ''} border`}>
      <p>{description}</p>
    </div>
  )
}

export default TaskCard