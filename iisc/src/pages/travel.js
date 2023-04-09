import React, { useState } from "react";
// import "./travel.css";
import { Link } from 'react-router-dom';

function Travel() {
  const [q1Response, setQ1Response] = useState("");
  const [q2Response, setQ2Response] = useState("");

  const handleQ1Change = (event) => {
    setQ1Response(event.target.value);
  };
  const handleQ2Change = (event) => {
    setQ2Response(event.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-yellow-200 h-screen w-screen relative bootom-[40px] relative bottom-[2px]">
      <div className=" rounded-lg shadow-md p-8 mt-10 animate__animated animate__fadeIn w-3/4 h-3/4 fixed left-[180px] top-[50px] bg-green-300 ">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">
          Respondent Travel Profile
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="mb-8 md:mb-0 pe-8">
            <form>
              <div className="mb-5">
                <label
                  htmlFor="q1"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  What is your most frequently used means of travel from your
                  home to work location?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bus"
                      name="q1"
                      value="bus"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="bus"
                      className="text-lg font-medium text-gray-800"
                    >
                      Bus
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="metro"
                      name="q1"
                      value="metro"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="metro"
                      className="text-lg font-medium text-gray-800"
                    >
                      Metro
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="two-wheeler"
                      name="q1"
                      value="two-wheeler"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="two-wheeler"
                      className="text-lg font-medium text-gray-800"
                    >
                      Own Two-wheeler
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="car"
                      name="q1"
                      value="car"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="car"
                      className="text-lg font-medium text-gray-800"
                    >
                      Own Car
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="walk-bicycle"
                      name="q1"
                      value="walk-bicycle"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="walk-bicycle"
                      className="text-lg font-medium text-gray-800"
                    >
                      Walk / Bicycle
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="auto"
                      name="q1"
                      value="auto"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="auto"
                      className="text-lg font-medium text-gray-800"
                    >
                      Auto
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="app-based-ride-hailing"
                      name="q1"
                      value="app-based-ride-hailing"
                      onChange={handleQ1Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="app-based-ride-hailing"
                      className="text-lg font-medium text-gray-800"
                    >
                      {" "}
                      Ola / Uber
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="q2"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  What is the total distance between your home and workplace?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="less-than-five"
                      name="q2"
                      value="<5"
                      onChange={handleQ2Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="less-than-five"
                      className="text-lg font-medium text-gray-800"
                    >
                      &lt; 5 km
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="five-to-ten"
                      name="q2"
                      value="5-10"
                      onChange={handleQ2Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="five-to-ten"
                      className="text-lg font-medium text-gray-800"
                    >
                      5-10 km
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="ten-to-fifteen"
                      name="q2"
                      value="10-15"
                      onChange={handleQ2Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="ten-to-fifteen"
                      className="text-lg font-medium text-gray-800"
                    >
                      10-15 km
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="fifteen-to-twenty"
                      name="q2"
                      value="15-20"
                      onChange={handleQ2Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="fifteen-to-twenty"
                      className="text-lg font-medium text-gray-800"
                    >
                      15-20 km
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="twenty-to-twentyfive"
                      name="q2"
                      value="20-25"
                      onChange={handleQ2Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="twenty-to-twentyfive"
                      className="text-lg font-medium text-gray-800"
                    >
                      20-25 km
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="more-than-twentyfive"
                      name="q2"
                      value=">25"
                      onChange={handleQ2Change}
                      className="mr-2 h-5 w-5 text-white-600 focus:ring-white-500"
                    />
                    <label
                      htmlFor="more-than-twentyfive"
                      className="text-lg font-medium text-gray-800"
                    >
                      &gt; 25 km
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button  class="relative inline-flex items-center justify-center w-36 h-12 text-black bg-green-300 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 relative left-[1350px] top-[640px]">
  <span class="absolute top-0 left-0 w-full h-full transition-all duration-200 ease-in-out opacity-0 invisible flex items-center justify-center">
  <Link to={{
        pathname: "/Second",
        state: {
          q1Response: q1Response,
          q2Response: q2Response
        }
      }}>Next</Link>
    
  </span>
  <span class="relative z-10">Next</span>
</button>
    </div>
  );
}

export default Travel;
