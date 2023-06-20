import React, { useState } from 'react'
import ModalLayout from './modals/ModalLayout';
import TaskDescription from './modals/TaskDescription';

const TaskCard = ({type, description, end_date}) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const handleCloseDetails = () => {
      setOpenDetailsModal(false)
    }
    const handleDrag = (e) => {

    }
  return (
    <>
    <div
    draggable
    // onDragStart={}
     className={`font-satoshi w-full rounded-md shadow-md px-4 py-3 cursor-pointer ${type === 'new'? 'border-amber-300' : type === 'progress'? 'border-purple-600' : type === 'complete'? 'border-green-600' : ''} border`}>
      <p onClick={() => setOpenDetailsModal(true)} className='line-clamp-2'>{description}</p>
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