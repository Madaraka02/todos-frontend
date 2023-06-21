import React from 'react';

const DateTimeFormatter = ({ end_date, over_due }) => {
  const currentDate = new Date();
  const targetDate = new Date(end_date);

  const formattedDateTime = targetDate.toLocaleString('default', {
    month: 'short',
    day: 'numeric',
  });

  let today = currentDate.getDate()
  let endDay = targetDate.getDate()

  let color = ''
  if(today === endDay){
        color='bg-gray-200'

  } else if(today === endDay-1){
    color = 'bg-amber-500'
  }
  else if (today > endDay){
    color = 'bg-red-500'
  } else{
    color = 'bg-green-500'
  }



  return (
    <div className={`flex flex-row gap-2 ${color} text-white text-[14px] px-2  rounded-sm `}>
    <p>{formattedDateTime}</p>
  </div>
  );
};

export default DateTimeFormatter;
