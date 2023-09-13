import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Calender from './Calender';
import Selector from './Selector';
import { addDays } from 'date-fns';

// default system--------------

const NavSearch = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [calenderData,setCalenderData] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])
  const menuRef = useRef(null);

  const handleMenuOpen = (e) => {
    if (!e.target.closest('.menu-content')) {
      setMenuOpen(!menuOpen);
    }
  };
  const handleCalendarOpen = (e) => {
    e.stopPropagation();
    setCalendarOpen(!calendarOpen);
  };
  const handlSelectorOpen = (e) => {
    e.stopPropagation();
    setSelectorOpen(!selectorOpen);
  };
  
  const handleSearchFieldClick = (e) => {
    e.stopPropagation();
    console.log('Search value---:', searchValue , "calenderData =" , calenderData);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div ref={menuRef}
      onClick={handleMenuOpen}
      className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer lg:ms-32'>

      {menuOpen && (
        <div className='menu-content px-10 rounded-none grid sm:grid-cols-1 lg:grid-cols-3 gap-2 '>
          {/* search section --------------------- */}
          <div className=' p-2 rounded-xl'>
            <h1 className='font-semibold mb-2'>Where?</h1>

            <form>
            <input
              type='text'
              value={searchValue}
              placeholder='Search destination'
              className='input  base-100 w-40 h-5 max-w-xs'
              onChange={(e) => setSearchValue(e.target.value)} // Attach the new function here as well
            />
            </form>
          </div>
          {/* Calender section --------------------- */}
          <div onClick={handleCalendarOpen} id='calenderopen' className='border-x-[1px] relative p-2 rounded-xl text-sm'>
            <div className="flex gap-5">
              <div className='w-30 '>
                <h1 className='font-semibold'>Check in</h1>
                <p>Add dates</p>
              </div>
              <div className='w-30'>
                <h1 className='font-semibold'>Check out</h1>
                <p>Add dates</p>
              </div>
            </div>
            <span className='flex justify-center text-xs text-slate-400'>(click to select date)</span>
            {calendarOpen && (
              <div className='absolute top-full left-0 right-0 bg-white z-10 py-2 px-4 shadow-md rounded-lg'>
                <Calender calenderData={calenderData} setCalenderData={setCalenderData}/>
              </div>
            )}
          </div>
          {/* select section ------------------ */}
          <div onClick={handlSelectorOpen} className='flex'>
            <div className='block'>

            <h1 className='font-semibold'>Who</h1>
            <p className='text-sm'>Add guests</p>
            {selectorOpen && (
              <div className='w-96 flex items-center absolute top-full left-0 right-0 bg-white z-10 py-2 px-4 shadow-md rounded-lg'>
                <div>
                  <Selector />
                </div>
              </div>
            )}
            </div>
            <div
            
            className='p-2 bg-rose-500 rounded-3xl text-white flex gap-3 items-center w-28 h-10'
            onClick={handleSearchFieldClick} 
          >
            <BiSearch size={18} /> Search
          </div>
          </div>
        </div>
      )}

      <div id='navsearch' className={`flex flex-row items-center justify-between ${menuOpen ? 'hidden' : ''}`}>
        <div className='text-sm font-semibold px-6'>Anywhere</div>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          Any Week
        </div>
        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>Add Guests</div>
          <div
            className='p-2 bg-rose-500 rounded-full text-white'
            onClick={handleSearchFieldClick} // Attach the new function here
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
