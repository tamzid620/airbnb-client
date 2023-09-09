/* eslint-disable react/prop-types */
import { GiHouse } from "react-icons/gi";
import { BsFillHouseDownFill, BsBuildingDown } from "react-icons/bs";
import { LuHotel } from "react-icons/lu";

const PropertyType = ({propertyType,setPropertyType}) => {

  const handleButtonClick = (index) => {
    if (propertyType.includes(index)) {
      setPropertyType(propertyType.filter((item) => item !== index));
    } else {
      setPropertyType([...propertyType, index]);
    }
  };

  const isButtonpropertyType = (index) => propertyType.includes(index);

  return (
    <div>
      <h1 className="py-4 font-semibold text-2xl">Property type</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div
          className={`btn h-32 w-44 block ${
            isButtonpropertyType(0) ? "bg-black text-white" : ""
          }`}
          onClick={() => handleButtonClick(0)}
        >
          <div className="mt-5">
            <GiHouse style={{ fontSize: `${30}px` }} />
          </div>
          <div className="flex justify-start mt-6 text-base">House</div>
        </div>

        <div
          className={`btn h-32 w-44 block ${
            isButtonpropertyType(1) ? "bg-black text-white" : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          <div className="mt-5">
            <BsBuildingDown style={{ fontSize: `${30}px` }} />
          </div>
          <div className="flex justify-start mt-6 text-base">Flat</div>
        </div>

        <div
          className={`btn h-32 w-44 block ${
            isButtonpropertyType(2) ? "bg-black text-white" : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          <div className="mt-5">
            <BsFillHouseDownFill style={{ fontSize: `${30}px` }} />
          </div>
          <div className="flex justify-start mt-6 text-base">Guest House</div>
        </div>

        <div
          className={`btn h-32 w-44 block ${
            isButtonpropertyType(3) ? "bg-black text-white" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          <div className="mt-5">
            <LuHotel style={{ fontSize: `${30}px` }} />
          </div>
          <div className="flex justify-start mt-6 text-base">Hotel</div>
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default PropertyType;
