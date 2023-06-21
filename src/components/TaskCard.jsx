import React, { useState } from 'react'
import { useDrag } from 'react-dnd';
import { CloseIcon, DeleteIcon, EditIcon } from '../assets/icons';
import DateTimeFormatter from './DateTimeFormatter';
import ModalLayout from './modals/ModalLayout';
import TaskDescription from './modals/TaskDescription';

const TaskCard = ({taskType, description, end_date}) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openEditing, setOpenEditing] = useState(false);
  const [content, setContent] = useState(description)

  const [start, setStart] = useState(false);
  const [completed, setCompleted] = useState(false);



  const editableStatuses = ['new', 'progress']

  const handleCloseDetails = () => {
      setOpenDetailsModal(false)
    }
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "task",
      item: {id:1},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
    }))
    console.log("start",start)
    console.log("completed",completed)


   
  return (
    <>
    <div
    ref={drag}
     className={`font-satoshi w-full relative rounded-md shadow-md px-4 py-3 cursor-pointer ${taskType === 'new'? 'border-amber-300' : taskType === 'progress'? 'border-purple-600' : taskType === 'complete'? 'border-green-600' : ''} border ${isDragging? 'opacity-10':'opacity-100'}`}>
      <div className=" absolute top-1 right-1 justify-center items-center ">
        <DeleteIcon className='w-5 h-5 text-red-600'/>
      </div>
      <p onClick={() => setOpenDetailsModal(true)} className='line-clamp-2'>{description}</p>
      <div className="flex flex-row justify-between">
        <DateTimeFormatter end_date='2023-06-20T10:00:00Z'/>

        <div onClick={() => setOpenEditing(!openEditing)} className="">
        {openEditing ?
          <CloseIcon/>
          :
          <EditIcon/>
        }
        </div>
      </div>
      {openEditing &&
      <div className="flex w-full flex-col gap-1 py-2">
      <label htmlFor="" className='text-[16px] font-semibold'>Description</label>
        <textarea value={content} onChange={(e) =>setContent(e.target.value)} rows={5} placeholder="taskType your Description" taskType="text" className='px-4 py-2 rounded-md outline-none border text-[14px] hide-scrollbar' />
        {editableStatuses.includes(taskType) &&
        <div className="flex flex-row items-center gap-1 py-2">
          <input 
          checked={taskType === 'new' ? start:completed}
          onChange={(e) => {taskType === 'new' ? setStart(e.target.checked): setCompleted(e.target.checked)}}
          type="checkbox" name="" id="" className='w-4 h-4 rounded-md accent-blue-600' />
          <p className='text-[14px]'>{taskType ==='new'?'Start':taskType ==='progress'?'Complete':''}</p>
        </div>
        }
        <div className="flex flex-row-reverse">

        <button className={`bg-blue-600 text-white px-4 py-1  text-center text-[16px]`}>Save</button>
        </div>

      </div>
      }
    </div>

    {openDetailsModal && 
    <ModalLayout open={openDetailsModal} setToggleModal={handleCloseDetails} title=''>
      <TaskDescription description={description}/>
    </ModalLayout>
    }
    </>
  )
}

export default TaskCard