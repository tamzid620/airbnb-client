import { LuSettings2 } from "react-icons/lu";

const FIlter = () => {


return (
   <div>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button 
className="btn btn-ghost btn-sm border-black" 
onClick={()=>document.getElementById('my_modal_4').showModal()}> <LuSettings2 /> Filters
</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
    );
};

export default FIlter;