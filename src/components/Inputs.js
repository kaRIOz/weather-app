import React, { useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setInput, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchBtn = () => {
    if (city) {
      setInput({ q: city });
    } else {
      toast.error("لطفا فیلد را پر کنید");
    }
    setCity("");
  };

  const handleLocationBtn = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setInput({ lat, lon });
      });
    }
  };

  const handleCBtn = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div className="flex flex-row items-center justify-between my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search city ..."
          className="text-lg  font-normal py-1 px-3 w-full shadow-lg focus:outline-none rounded-md capitalize placeholder:lowercase"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 hover:text-orange-500"
          onClick={handleSearchBtn}
        />
        <UilMapMarker
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 hover:text-orange-500"
          onClick={handleLocationBtn}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="matric"
          className="text-white text-lg font-light transition ease-out hover:scale-125"
          onClick={handleCBtn}
        >
          &#8451;
        </button>
        <p className="text-white mx-2">|</p>
        <button
          name="imperial"
          className="text-white text-lg font-light transition ease-out hover:scale-125"
          onClick={handleCBtn}
        >
          °K
        </button>
      </div>
    </div>
  );
}

export default Inputs;
