import { BiWorld } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'

const NavMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Aircnc btn */}
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
         Airbnb your home
        </div>
          <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'><BiWorld/></div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <BsFillPersonFill/>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <div className=' px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
              SignUp 
            </div>
              <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>
                Login
              </div>
              <hr />
                <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                  Arbnb your Home
                </div>
                <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                  Help Center
                </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default NavMenu;