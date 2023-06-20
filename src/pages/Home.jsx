import React, { useState } from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ModalLayout from '../components/modals/ModalLayout';
import NewTask from '../components/modals/NewTask';
import Section from '../components/Section';
import TaskCard from '../components/TaskCard'

function Home() {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const handleCloseAddTask = () => {
      setOpenAddTaskModal(false)
    }
  const statuses = ['new','progress','complete']  
  return (
    <>
    <DndProvider backend={HTML5Backend}>

    <div className="container mx-auto w-full">

    <div className='font-satoshi flex flex-col gap-2 w-full p-6 h-full'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statuses?.map((status, index) => (

        <div className="col-span-1 flex flex-col gap-2">
          <Section status={status}/>
        </div>
        ))}

      </div>
      
    </div>
    <div className="flex px-4">
      <button
      onClick={() => setOpenAddTaskModal(true)}
       className='bg-blue-600 px-4 py-2 rounded-md items-center text-white flex flex-row gap-3 text-[18px] font-satoshi'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>

        New task</button>
    </div>
    </div>
    </DndProvider>

    {openAddTaskModal && 
    <ModalLayout open={openAddTaskModal} setToggleModal={handleCloseAddTask} title='Add new task'>
      <NewTask/>
    </ModalLayout>
    }
    </>
  )
}

export default Home