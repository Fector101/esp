import React from "react";
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([
    
  { state: "Abia", capital: "Umuahia" },
  { state: "Adamawa", capital: "Yola" },
  { state: "Akwa Ibom", capital: "Uyo" },
  { state: "Anambra", capital: "Awka" },
  { state: "Bauchi", capital: "Bauchi" },
  { state: "Bayelsa", capital: "Yenagoa" },
  { state: "Benue", capital: "Makurdi" },
  { state: "Borno", capital: "Maiduguri" },
  { state: "Cross River", capital: "Calabar" },
  { state: "Delta", capital: "Asaba" },
  { state: "Ebonyi", capital: "Abakaliki" },
  { state: "Edo", capital: "Benin City" },
  { state: "Ekiti", capital: "Ado-Ekiti" },
  { state: "Enugu", capital: "Enugu" },
  { state: "Gombe", capital: "Gombe" },
  { state: "Imo", capital: "Owerri" },
  { state: "Jigawa", capital: "Dutse" },
  { state: "Kaduna", capital: "Kaduna" },
  { state: "Kano", capital: "Kano" },
  { state: "Katsina", capital: "Katsina" },
  { state: "Kebbi", capital: "Birnin Kebbi" },
  { state: "Kogi", capital: "Lokoja" },
  { state: "Kwara", capital: "Ilorin" },
  { state: "Lagos", capital: "Ikeja" },
  { state: "Nasarawa", capital: "Lafia" },
  { state: "Niger", capital: "Minna" },
  { state: "Ogun", capital: "Abeokuta" },
  { state: "Ondo", capital: "Akure" },
  { state: "Osun", capital: "Oshogbo" },
  { state: "Oyo", capital: "Ibadan" },
  { state: "Plateau", capital: "Jos" },
  { state: "Rivers", capital: "Port Harcourt" },
  { state: "Sokoto", capital: "Sokoto" },
  { state: "Taraba", capital: "Jalingo" },
  { state: "Yobe", capital: "Damaturu" },
  { state: "Zamfara", capital: "Gusau" }
  ])
  const [stateValue, setStateValue] = useState('')
  const [capitalValue, setCapitalValue] = useState('')
  
  function addState() {
    setData(old => [...old, { state: stateValue, capital: capitalValue }])
    setCapitalValue('')
    setStateValue('')
  }
  
  
  return (
    <>
      <div className="rounded-3xl border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">Nigeria: States & Capitals</h1>
        <p className="mt-1 text-sm text-gray-600">FCT Abuja.</p>
      </div>

      <div className="input-box flex gap-[50px] w-[70%] mt-[20px]">
        <div className="w-[50%] flex flex-col">
          <h3 className="mb-[10px] text-[#060608] pt-[10%] font-medium">States</h3>
          <input
            value={stateValue}
            className="indent-[10px] bg-white border border-[#2e2e2c] text-black rounded-[10px] h-[50px]"
            onChange={(e) => setStateValue(e.target.value)}
          />
        </div>

        <div className="w-[50%] flex flex-col">
          <h3 className="mb-[10px] text-[#060608] pt-[10%] font-medium">Capital</h3>
          <input
            value={capitalValue}
            className="indent-[10px] bg-white border border-[#2e2e2c] text-black h-[50px] rounded-[10px]"
            onChange={(e) => setCapitalValue(e.target.value)}
          />
        </div>

        <button
          className="text-[17px] h-max self-end bg-blue-300 py-[10px] px-[25px] rounded-[15px]"
          id="btn"
          onClick={addState}
        >
          Add
        </button>
      </div>

      <section className="text-left flex flex-col mt-[10px]">
        <h3 className="text-[20px] font-extralight">Added Items</h3>
        <hr />
        <div className="added-item">
          <div className="card flex py-[10px] italic">
            <p className="min-w-[100px]">State</p>
            <p className="min-w-[100px]">Capital</p>
          </div>

          {data.map((each, index) => (
            <div className="card flex py-[10px] italic" key={index}>
              <p className="min-w-[100px]">{each.state}</p>
              <p className="min-w-[100px]">{each.capital}</p>
              <button
                className="bg-red-400 px-3 py-[3px] rounded-[5px]"
                onClick={() => {
                  const newData = data.filter((_, i) => i !== index)
                  setData(newData)
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App