import { useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti'; 

const Selector = () => {
  const [count, setCount] = useState(0); 

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className='flex gap-2'>
      <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={increaseCount}>
        <TiPlus />
      </div>
      <div>{count}</div>
      <div className='rounded-full flex justify-center items-center border w-7 h-7' onClick={decreaseCount}>
        <TiMinus />
      </div>
    </div>
  );
};

export default Selector;
