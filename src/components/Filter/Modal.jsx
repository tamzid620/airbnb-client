import { useState } from "react";
import PriceRange from "./PriceRange/PriceRange";
import PropertyType from "./PropertyType/PropertyType";
import RoomsAndBeds from "./RoomsAndBeds/RoomsAndBeds";
import TypeOfPlace from "./TypeOfPlace/TypeOfPlace";


const Modal = () => {

    // const [filter, setFilter] = useState([])
    const [pricerange, setPriceRange] = useState([213, 750])
    const [typeOfPlace , setTypeOfPlace]  = useState([])
    const [roomsAndBeds , setRoomsAndBeds]  = useState([])
    const [propertyType , setPropertyType]  = useState([])

console.log("price",pricerange);


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
            <TypeOfPlace  typeOfPlace={typeOfPlace} setTypePriceRange={setTypeOfPlace}/>
            {/* Rooms and Beds section------------ */}
            <RoomsAndBeds roomsAndBeds={roomsAndBeds} setRoomsAndBeds={setRoomsAndBeds} />
            {/* Property type section------------ */}
            <PropertyType propertyType={propertyType} setPropertyType={setPropertyType} />
            {/* search section--------- */}
            <div className=" flex justify-end mt-5">
                <button className="btn bg-black text-slate-400">Search</button>
            </div>

        </div>
    );
};

export default Modal;