import { useEffect, useState } from "react";
import PriceRange from "./PriceRange/PriceRange";
import RoomsAndBeds from "./RoomsAndBeds/RoomsAndBeds";
import PropertyType from "./PropertyType/PropertyType";
import TypeOfPlace from "./TypeOfPlace/TypeOfPlace";
import Rooms from "../Rooms/Rooms";


const Modal = () => {

    const [filter, setFilter] = useState([])

    const handleSearch = () => {
        fetch('http://localhost:5000/filter')
            .then(res => res.json())
            .then(data => setFilter(data));
    };  
    console.log("filter----------------", filter);

    const [pricerange, setPriceRange] = useState([213, 750]);
    const [typeOfPlace , setTypeOfPlace]  = useState([]);
    const [roomsAndBeds , setRoomsAndBeds]  = useState([]);
    const [roomsAndBeds1 , setRoomsAndBeds1]  = useState([]);
    const [roomsAndBeds2 , setRoomsAndBeds2]  = useState([]);
    const [propertyType , setPropertyType]  = useState([]);

console.log("price ------",pricerange);
console.log("typeOfPlace------",typeOfPlace);
console.log("roomsAndBeds------",roomsAndBeds);
console.log("roomsAndBeds1------",roomsAndBeds1);
console.log("roomsAndBeds2------",roomsAndBeds2);
console.log("propertyType------",propertyType);


    return (
        <div className="modal-box w-11/12 max-w-5xl">
            
            {/* close button and title section--------    */}
            <div className="modal-action  flex justify-start">
                <form method="dialog">
                    <button className="btn-sm  btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </form>
            </div>
            <div className="flex items-center justify-center ">
                <h3 className="font-bold text-lg -mt-10">Filters</h3>
            </div>

            <hr />
            {/* action seciton------------ */}


            {/* Price range section------------ */}
            <PriceRange  pricerange={pricerange} setPriceRange = {setPriceRange} />
            {/* Types Of Place section------------ */}
            <TypeOfPlace typeOfPlace={typeOfPlace} setTypeOfPlace={setTypeOfPlace}/>
            {/* Rooms and Beds section------------ */}
            <RoomsAndBeds 
            roomsAndBeds={roomsAndBeds} setRoomsAndBeds={setRoomsAndBeds} 
            roomsAndBeds1={roomsAndBeds1} setRoomsAndBeds1={setRoomsAndBeds1} 
            roomsAndBeds2={roomsAndBeds2} setRoomsAndBeds2={setRoomsAndBeds2} 
            />
            {/* Property type section------------ */}
            <PropertyType propertyType={propertyType} setPropertyType={setPropertyType} />
            {/* search section--------- */}
            <div className=" flex justify-end mt-5">
                <button onClick={handleSearch} className="btn bg-black text-slate-400">Search</button>
            </div>

        </div>
    );
};

export default Modal;