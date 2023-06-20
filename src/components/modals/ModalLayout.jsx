import React from 'react'

const ModalLayout = ({setToggleModal, ...props}) => {
  return (
    <div
    onClick={() => setToggleModal(false)}
    className='fixed h-screen flex justify-center items-center font-satoshi inset-0 bg-gray-900  bg-opacity-50 dark:bg-opacity-80 z-[999]'>
    <div
        onClick={(e) => e.stopPropagation()}
        className='relative w-[96%] md:w-full max-w-2xl bg-white rounded-lg py-4 px-8 z-50 flex flex-col gap-2 overflow-scroll hide-scrollbar max-h-[90%]'>
        <div className={`flex sticky top-0 z-10 ${props.title ? 'justify-between' : "justify-end"} bg-white`}>
            {props.title && (
                <p className='font-semibold text-lg'>{props.title}</p>
            )}
            <div onClick={() => setToggleModal(false)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


            </div>
          
        </div>
        {props.children}
    </div>
</div>
  )
}

export default ModalLayout