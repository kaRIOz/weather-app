import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "./WeartherApi";

function Time({ weather }) {
  const {
    dt,
    timezone,
    name,
    country,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  } = weather;
  return (
    <>
      <div className="flex flex-col items-center my-4">
        <p className="text-slate-300 text-lg text-center">
          {formatToLocalTime(dt, timezone)}
        </p>
        <p className="text-white text-2xl font-medium mt-4 mb-6">{`${name},${country}`}</p>

        <p className="capitalize font-md font-medium my-2 text-sky-200">
          {details}
        </p>
        <div
          className="flex flex-row items-center justify-between
        text-white py-2 w-full"
        >
          <img src={iconUrlFromCode(icon)} alt="icon" className="w-20" />
          <p className="text-3xl">{`${(temp - 273.15).toFixed()}`}°</p>
          <ul className="">
            <li className="flex flex-row gap-1 hover:text-orange-300">
              <UilTemperature size={18} />
              Real fell {`${(temp - 273.15).toFixed()}`}°
            </li>
            <li className="flex flex-row gap-1 hover:text-sky-300">
              <UilTear size={18} /> Hunidity {`${humidity}`}%
            </li>
            <li className="flex flex-row gap-1 hover:text-slate-200">
              <UilWind size={18} />
              Wind {`${speed.toFixed()}`}km/h
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-row items-center justify-center text-sm text-white space-x-3">
          <UilSun />
          <p className="font-light">
            Rise:{" "}
            <span className="font-medium">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="text-white">|</p>
          <UilSunset />
          <p className="font-light">
            Set:{" "}
            <span className="font-medium">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="text-white">|</p>
          <UilSun />
          <p className="font-light">
            High:{" "}
            <span className="font-medium">
              {`${(temp_max - 273.15).toFixed()}`}°
            </span>
          </p>
          <p className="text-white">|</p>
          <UilSunset />
          <p className="font-light">
            Low:{" "}
            <span className="font-medium">
              {`${(temp_min - 273.15).toFixed()}`}°
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Time;
