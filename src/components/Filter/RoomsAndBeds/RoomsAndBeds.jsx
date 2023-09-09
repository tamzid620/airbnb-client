import { useState } from 'react';

const RoomsAndBeds = ({roomsAndBeds,setRoomsAndBeds}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);

    const options = [
        { id: 1, label: '1' },
        { id: 2, label: '2' },
        { id: 3, label: '3' },
        { id: 4, label: '4' },
        { id: 5, label: '5' },
        { id: 6, label: '6' },
        { id: 7, label: '7' },
        { id: 8, label: '8+' },
    ];
    const options1 = [
        { id: 1, label: '1' },
        { id: 2, label: '2' },
        { id: 3, label: '3' },
        { id: 4, label: '4' },
        { id: 5, label: '5' },
        { id: 6, label: '6' },
        { id: 7, label: '7' },
        { id: 8, label: '8+' },
    ];
    const options2 = [
        { id: 1, label: '1' },
        { id: 2, label: '2' },
        { id: 3, label: '3' },
        { id: 4, label: '4' },
        { id: 5, label: '5' },
        { id: 6, label: '6' },
        { id: 7, label: '7' },
        { id: 8, label: '8+' },
    ];

    const handleChange = (id) => {
        setSelectedOption(id);
    };
    const handleChange1 = (id) => {
        setSelectedOption1(id);
    };
    const handleChange2 = (id) => {
        setSelectedOption2(id);
    };


    return (
        <div>
<h1 className="py-4 font-semibold text-2xl ">Rooms and Beds</h1>

 {/* Bedrooms section ------ */}
<h1 className='font-semibold mb-3 text-slate-400'>Bedrooms</h1>
<div className="flex flex-row gap-3 items-center">
{
     options.map((option) => (
 <label key={option.id} 
 className={`w-16 h-10 flex items-center justify-center rounded-lg border cursor-pointer
  ${selectedOption === option.id ? 'bg-black text-white' : 'bg-white text-black' }`}>
     <input type="radio" 
     name="options" 
     className="sr-only"
      value={option.id}
       checked={selectedOption === option.id}
       onChange={() => handleChange(option.id)} 
       /> {option.label} 
 </label>
     ))
 }
</div>

 {/* Beds section ------ */}
<h1 className='font-semibold mb-3 text-slate-400 mt-7'>Beds</h1>
<div className="flex flex-row gap-3 items-center">
{
     options1.map((option) => (
 <label key={option.id} 
 className={`w-16 h-10 flex items-center justify-center rounded-lg border cursor-pointer
  ${selectedOption1 === option.id ? 'bg-black text-white' : 'bg-white text-black' }`}>
     <input 
     type="radio" 
     name="options" 
     className="sr-only"
      value={option.id} 
      checked={selectedOption1 === option.id}
      onChange={() => handleChange1(option.id)} 
      /> {option.label} 
      </label>
     ))
 }
</div>

 {/* Bathrooms section ------ */}
<h1 className='font-semibold mb-3 text-slate-400 mt-7'>Bathrooms</h1>
<div className="flex flex-row gap-3 items-center">
{
     options2.map((option) => (
 <label key={option.id} 
 className={`w-16 h-10 flex items-center justify-center rounded-lg border cursor-pointer
  ${selectedOption2 === option.id ? 'bg-black text-white' : 'bg-white text-black' }`}>
     <input 
     type="radio" 
     name="options" 
     className="sr-only"
      value={option.id} 
      checked={selectedOption2 === option.id}
      onChange={() => handleChange2(option.id)} 
      /> {option.label} 
      </label>
     ))
 }
</div>
<hr className='mt-10' />
        </div>
    );
};

export default RoomsAndBeds;