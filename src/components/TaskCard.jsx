import React, { useState } from 'react'
import { useDrag } from 'react-dnd';
import { CloseIcon, DeleteIcon, EditIcon } from '../assets/icons';
import ModalLayout from './modals/ModalLayout';
import TaskDescription from './modals/TaskDescription';

const TaskCard = ({type, description, end_date}) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openEditing, setOpenEditing] = useState(false);
  const [content, setContent] = useState(description)


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
    console.log("isDragging",isDragging)

   
  return (
    <>
    <div
    ref={drag}
     className={`font-satoshi w-full relative rounded-md shadow-md px-4 py-3 cursor-pointer ${type === 'new'? 'border-amber-300' : type === 'progress'? 'border-purple-600' : type === 'complete'? 'border-green-600' : ''} border ${isDragging? 'opacity-10':'opacity-100'}`}>
      <div className=" absolute top-1 right-1 justify-center items-center ">
        <DeleteIcon className='w-5 h-5 text-red-600'/>
      </div>
      <p onClick={() => setOpenDetailsModal(true)} className='line-clamp-2'>{description}</p>
      <div className="flex flex-row justify-between">
        <div className={`flex flex-row gap-2 text-[14px] ${type === 'new'? 'bg-amber-400' : type === 'progress'? 'bg-purple-600' : type === 'complete'? 'bg-green-600' : ''} py-1 px-2  rounded-md text-white`}>
          <p>Jun, 22</p>
          {/* <p>2 days</p> */}
        </div>
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
        <textarea value={content} onChange={(e) =>setContent(e.target.value)} rows={5} placeholder="Type your Description" type="text" className='px-4 py-2 rounded-md outline-none border text-[14px]' />
        <div className="flex flex-row-reverse">

        <button className={`${content.length > 0 ? 'bg-blue-600 text-white':'bg-gray-200 pointer-events-none'} px-4 py-1  text-center text-[16px]`}>Save</button>
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