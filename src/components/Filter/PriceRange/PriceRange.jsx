import { useState } from 'react';
import Slider from '@mui/material/Slider';

const PriceRange = () => {

    const [value, setValue] = useState([213, 750]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const valuetext = (value) => {
        return `${value}`;
    };


    return (
        <div>
            <h1 className="py-4 font-semibold text-2xl ">Price range</h1>
            <p className="font-semibold text-slate-400">The average nightly price is $750</p>
            <div className='flex justify-center mb-10'>
                <div className='w-96'>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={213}
                        max={750}
                        step={1}
                    />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-center gap-10'>
                <div className='border p-5 font-semibold rounded-xl'>
                    <h1 className='text-slate-400'>Minium</h1>
                    <p>${value[0]}</p>
                </div>
                <div className='border p-5 font-semibold rounded-xl'>
                    <h1 className='text-slate-400'>Maximun</h1>
                    <p>${value[1]}</p>
                </div>
            </div>
            <hr className='mt-10' />
        </div>

    );
};

export default PriceRange;