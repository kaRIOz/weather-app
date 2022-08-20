import React from "react";
import { iconUrlFromCode } from "./WeartherApi";

function Forecast({ title, items }) {
  return (
    <>
      <p className="text-white font-medium mt-8 uppercase">{title} forecast</p>
      <hr className="my-1" />
      <div className="flex flex-row items-center justify-between">
        {items.map((item, idx) => {
          const temp = item.temp - 273.15;
          return (
            <ul key={idx}>
              <li className="flex flex-col items-center justify-center text-white text-sm font-light">
                <p>{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="" className="w-20" />
                <span>{`${temp.toFixed()}`}°</span>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Forecast;
