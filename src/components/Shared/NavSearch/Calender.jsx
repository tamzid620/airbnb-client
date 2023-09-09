// import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {  DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns';
import { useState } from 'react';

const Calender = () => {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'  
        }
      ]);

    return (
        <div className='flex justify-center'>
            {/* <DateRange
                rangeColors={['#262626']}
                date={new Date()}
                direction='vertical'
                showDateDisplay={false}
                minDate={new Date()}
              /> */}
              <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
  preventSnapRefocus={true}
  calendarFocus="backwards"
/>;
        </div>
    );
};

export default Calender;