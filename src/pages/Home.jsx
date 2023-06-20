import React, { useState } from 'react'
import ModalLayout from '../components/modals/ModalLayout';
import NewTask from '../components/modals/NewTask';
import TaskCard from '../components/TaskCard'

function Home() {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const handleCloseVariants = () => {
      setOpenAddTaskModal(false)
    }
  return (
    <>
    <div className="container mx-auto w-full">

    <div className='font-satoshi flex flex-col gap-2 w-full p-6 h-full'>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col gap-2">
          <div className=" flex flex-row cursor-pointer justify-between items-center bg-gray-200 p-2 rounded-md">
            <p className='font-semibold'>Next Up</p>
            <div className="rounded-full w-6 h-6 bg-amber-500 justify-center text-center text-white">1</div>
          </div>
          <div className="flex flex-col gap-1">
            <TaskCard type='new'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <div className=" flex flex-row cursor-pointer justify-between items-center bg-gray-200 p-2 rounded-md">
            <p className='font-semibold'>In Progress</p>
            <div className="rounded-full w-6 h-6 bg-purple-600 justify-center text-center text-white">1</div>
          </div>
          <div className="flex flex-col gap-1">
            <TaskCard type='progress'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <div className=" flex flex-row cursor-pointer justify-between items-center bg-gray-200 p-2 rounded-md">
            <p className='font-semibold'>Complete</p>
            <div className="rounded-full w-6 h-6 bg-green-600 justify-center text-center text-white">1</div>
          </div>
          <div className="flex flex-col gap-1">
            <TaskCard type='complete'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

            />
          </div>
        </div>
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

    {openAddTaskModal && 
    <ModalLayout open={openAddTaskModal} setToggleModal={handleCloseVariants} title='Add new task'>
      <NewTask/>
    </ModalLayout>
    }
    </>
  )
}

export default Home