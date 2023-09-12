// import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {  DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';

const Calender = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const handleCalendarClick = (e) => {
    // Prevent click event propagation to the parent (NavSearch)
    e.stopPropagation();
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      // You can keep this empty or add your own logic here
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className='flex justify-center p-5' onClick={handleCalendarClick}>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        preventSnapRefocus={true}
        calendarFocus="backwards"
      />
    </div>
  );
};

export default Calender;
