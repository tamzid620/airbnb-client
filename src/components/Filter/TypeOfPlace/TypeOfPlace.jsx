import { useState } from 'react';

const TypeOfPlace = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h1 className="py-4 font-semibold text-2xl">Types Of Place</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="form-control">
          <label
            className={`label cursor-pointer flex justify-start ${
              selectedOptions.includes('Entire place') ? 'checked:bg-black' : ''
            }`}
            onClick={() => handleOptionChange('Entire place')}
          >
            <input type="checkbox" name="radio-10" className="radio" />
            <div>
              <h1 className="label-text ms-4 text-lg font-semibold">Entire place</h1>
              <p className="ms-4 text-sm text-slate-400">A place all to yourself</p>
            </div>
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label cursor-pointer flex justify-start ${
              selectedOptions.includes('Room') ? 'checked:bg-black' : ''
            }`}
            onClick={() => handleOptionChange('Room')}
          >
            <input type="checkbox" name="radio-10" className="radio" />
            <div>
              <h1 className="label-text ms-4 text-lg font-semibold">Room</h1>
              <p className="ms-4 text-sm text-slate-400">Your own room, plus access to shared spaces</p>
            </div>
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label cursor-pointer flex justify-start ${
              selectedOptions.includes('Shared room') ? 'checked:bg-black' : ''
            }`}
            onClick={() => handleOptionChange('Shared room')}
          >
            <input type="checkbox" name="radio-10" className="radio" />
            <div>
              <h1 className="label-text ms-4 text-lg font-semibold">Shared room</h1>
              <p className="ms-4 text-sm text-slate-400">A sleeping space and common areas that may be shared with others</p>
            </div>
          </label>
        </div>
      </div>
      <hr className='mt-10' />
    </div>
  );
};

export default TypeOfPlace;
