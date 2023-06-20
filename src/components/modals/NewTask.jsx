import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function NewTask() {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState();

    const handleSubmit = async () => {
        // setSubmitting('Submitting ...')
        const payload = {
            description:description
        }     
        // submitDescription(payload)
        
        setDescription('')
    
    }
    console.log('value',value!==null)

  return (
    <div className='w-full h-full flex flex-col font-satoshi'>
        <div className="w-full h-full flex flex-col gap-2 py-2">
            <div  className='w-full h-full flex flex-col gap-2'>
                
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="" className='text-[16px]'>Description</label>
                    <textarea value={description} onChange={(e) =>setDescription(e.target.value)} rows={5} placeholder="Type your Description" type="text" className='px-4 py-2 rounded-md outline-none border text-[14px]' />
                </div>
                <div className="flex flex-col w-full gap-1">
                <LocalizationProvider dateAdapter={AdapterDayjs} className='w-full' style={{with:'100%'}}>
    
                    <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} className='w-full'/>
     
                </LocalizationProvider>
                </div>
                <div className="flex flex-row-reverse w-full">
                    <button onClick={handleSubmit} className={`${description.length > 0 ? 'bg-blue-600 text-white':'bg-gray-200 pointer-events-none'} px-4 py-2  text-center text-[16px]`}>Add task</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewTask