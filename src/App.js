import "./App.css";
import React, { useState, useEffect } from "react";
import CityButton from "./components/CityButton";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import Time from "./components/Time";
import Loading from "./components/Loading";
import getformatForecastWeather from "./components/WeartherApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [input, setInput] = useState({ q: "istanbul" });
  const [units, setUnits] = useState("matric");
  const [weather, setWeather] = useState(null);

  const fetchData = async () => {
    const data = await getformatForecastWeather({ ...input, units });
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    toast.success("عملیات با موفقیت انجام شد");
  }, [input, units]);

  return (
    <div
      className={`max-w-screen-lg mx-auto py-5 px-12 bg-gradient-to-b from-cyan-800 to-blue-600 shadow-md shadow-gray-300 rounded-lg mb-10 mt-1 h-fit md:px-24`}
    >
      <Inputs
        setInput={setInput}
        units={units}
        setUnits={setUnits}
        weather={weather}
      />
      <CityButton setInput={setInput} />
      {weather ? (
        <>
          <Time weather={weather} />
          <Forecast title="hourly" items={weather.hourly} />
          <Forecast title="daily" items={weather.daily} />
        </>
      ) : (
        <Loading />
      )}
      <ToastContainer
        autoClose={3000}
        theme="colored"
        position="bottom-right"
        rtl={true}
      />
    </div>
  );
}

export default App;
