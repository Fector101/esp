import React, { useState } from "react";

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
  ]);
  
  const [stateValue, setStateValue] = useState("");
  const [capitalValue, setCapitalValue] = useState("");
  
  function addState() {
    if (!stateValue || !capitalValue) return;
    setData((old) => [...old, { state: stateValue, capital: capitalValue }]);
    setCapitalValue("");
    setStateValue("");
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Nigeria: States & Capitals
        </h1>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <div className="flex flex-col w-64">
          <label className="mb-2 text-gray-700 font-medium">State</label>
          <input
            value={stateValue}
            placeholder="Enter state"
            className="indent-2 border border-gray-300 rounded-lg h-12 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={(e) => setStateValue(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-64">
          <label className="mb-2 text-gray-700 font-medium">Capital</label>
          <input
            value={capitalValue}
            placeholder="Enter capital"
            className="indent-2 border border-gray-300 rounded-lg h-12 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={(e) => setCapitalValue(e.target.value)}
          />
        </div>

        <button
          className="self-end bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={addState}
        >
          Add
        </button>
      </div>

      <section className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Added Items
        </h3>
        <div className="space-y-3">
          {data.map((each, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <div>
                <p className="font-bold text-gray-800">{each.state}</p>
                <p className="text-gray-600">{each.capital}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => {
                  setData(data.filter((_, i) => i !== index));
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;