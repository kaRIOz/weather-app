import React from "react";
import data from "../data";

function CityButton({ setInput }) {
  return (
    <div className="flex items-center justify-between my-4">
      {data.map((item) => {
        return (
          <button
            key={item.id}
            className="mybtn text-slate-800 font-medium text-md"
            onClick={() => setInput({ q: item.title })}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}

export default CityButton;
