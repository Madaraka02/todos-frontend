import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { addTask } from '../../api/actions';
import { useDispatch } from 'react-redux';

function NewTask({setToggleModal}) {
    const dispatch = useDispatch()

    const [description, setDescription] = useState('')
    const [value, setValue] = useState();
    const [processing, setProcessing] = useState(false)

    const handleSubmit = async () => {
        setProcessing(true)
        const payload = {
            description:description,
            end_at:value
        }     
        await addTask(dispatch,payload)
        .then((data) => {
            // dispatch to store or set state variable
            console.log('data',data)
            setProcessing(false)
            setDescription('')
            setValue()
            setToggleModal(true)

      
          })
          .catch((err) => {
            console.log(err)
            setProcessing(false)
            setDescription('')
            setValue()
            setToggleModal(true)

          })
    
    }
    const handleDateChange = (newValue) => {
        const selectedDate = new Date(newValue);
        const formattedDate = selectedDate.toISOString()
        setValue(formattedDate);
      };
    console.log('value',value)
    

  return (
    <div className='w-full h-full flex flex-col font-satoshi'>
        <div className="w-full h-full flex flex-col gap-2 py-2">
            <div  className='w-full h-full flex flex-col gap-2'>
                
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="" className='text-[16px]'>Description</label>
                    <textarea value={description} onChange={(e) =>setDescription(e.target.value)} rows={5} placeholder="Type your Description" type="text" className='px-4 py-2 rounded-md outline-none border text-[14px]' />
                </div>
                <div className="flex flex-col w-full gap-1">
                <label htmlFor="" className='text-[16px]'>End date</label>

                <LocalizationProvider dateAdapter={AdapterDayjs} className='w-full' style={{with:'100%'}}>
    
                    <DateCalendar value={value} onChange={handleDateChange} className='w-full'/>
     
                </LocalizationProvider>
                </div>
                <div className="flex flex-row-reverse w-full">
                    <button onClick={handleSubmit} className={`${description.length > 0 ? 'bg-blue-600 text-white':'bg-gray-200 pointer-events-none'} px-4 py-2  text-center text-[16px]`}>{!processing? 'Add task' : 'Submitting...'}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewTask