import React from 'react';

const DateTimeFormatter = ({ end_date, over_due }) => {
  const currentDate = new Date();
  const targetDate = new Date(end_date);

  const formattedDateTime = targetDate.toLocaleString('default', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={`flex flex-row gap-2 ${over_due?'bg-red-500':'bg-green-400'} text-white text-[14px] py-1 px-2  rounded-md `}>
    <p>{formattedDateTime}</p>
  </div>
  );
};

export default DateTimeFormatter;
