import PriceRange from "./PriceRange/PriceRange";
import PropertyType from "./PropertyType/PropertyType";
import RoomsAndBeds from "./RoomsAndBeds/RoomsAndBeds";
import TypeOfPlace from "./TypeOfPlace/TypeOfPlace";


const Modal = () => {
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
<PriceRange/>
{/* Types Of Place section------------ */}
<TypeOfPlace/>
{/* Rooms and Beds section------------ */}
<RoomsAndBeds/>
{/* Property type section------------ */}
<PropertyType/>
{/* search section--------- */}
<div className=" flex justify-end mt-5">
    <button className="btn bg-black text-slate-400">Search</button>
</div>

        </div>
    );
};

export default Modal;