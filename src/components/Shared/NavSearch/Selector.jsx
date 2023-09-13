// import { useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';

// default system--------------

const Selector = ({count,setCount, count1,setCount1, count2,setCount2, count3,setCount3}) => {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount1 = () => {
    setCount1(count1 + 1);
  };
  const decreaseCount1 = () => {
    setCount1(count1 - 1);
  };

  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };
  const decreaseCount2 = () => {
    setCount2(count2 - 1);
  };

  const increaseCount3 = () => {
    setCount3(count3 + 1);
  };
  const decreaseCount3 = () => {
    setCount3(count3 - 1);
  };

  return (
    <div className='w-80'>
      <div id='selector1' className='flex justify-between'>
        <div className='p-3'>
          <h1 className='font-semibold'>Adults</h1>
          <p className='text-slate-400'>Ages 13 or Above</p>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={increaseCount}>
            <TiPlus />
          </div>
          <div>{count}</div>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={decreaseCount}>
            <TiMinus />
          </div>
        </div>
      </div>
      <hr />

      <div id='selector1' className='flex justify-between'>
        <div className='p-3'>
          <h1 className='font-semibold'>Children</h1>
          <p className='text-slate-400'>Ages 2–12</p>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={increaseCount1}>
            <TiPlus />
          </div>
          <div>{count1}</div>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={decreaseCount1}>
            <TiMinus />
          </div>
        </div>
      </div>
      <hr />

      <div id='selector1' className='flex justify-between'>
        <div className='p-3'>
          <h1 className='font-semibold'>Infants</h1>
          <p className='text-slate-400'>Under 2</p>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={increaseCount2}>
            <TiPlus />
          </div>
          <div>{count2}</div>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={decreaseCount2}>
            <TiMinus />
          </div>
        </div>
      </div>
      <hr />

      <div id='selector1' className='flex justify-between'>
        <div className='p-3'>
          <h1 className='font-semibold'>Pets</h1>
          <p className='text-slate-400 underline'>Bringing a service animal?</p>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={increaseCount3}>
            <TiPlus />
          </div>
          <div>{count3}</div>
          <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={decreaseCount3}>
            <TiMinus />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Selector;
