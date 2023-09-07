import { LuSettings2 } from "react-icons/lu";
import Modal from "./Modal";

const Filter = () => {


return (
   <div>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button 
className="btn btn-ghost btn-sm border-black" 
onClick={()=>document.getElementById('my_modal_4').showModal()}> <LuSettings2 /> Filters
</button>
<dialog id="my_modal_4" className="modal">
<Modal/>
</dialog>
</div>
    );
};

export default Filter;