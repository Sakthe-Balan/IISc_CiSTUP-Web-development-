import { useLocation } from "react-router-dom";
import { FaBus, FaBusAlt, FaTaxi, FaCar } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//best possible was is to import then manualy check
import a from "../json/sample_db_0km.json";
import b from "../json/sample_db_5km.json";
import c from "../json/sample_db_10km.json";
import d from "../json/sample_db_15km.json";
import e from "../json/sample_db_20km.json";
import f from "../json/sample_db_25km.json";

export default function Mode() {
  var db;
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const q1Response = queryParams.get("q1");
  const q2Response = queryParams.get("q2");
let c
  const crowd_json = {
    1: "Many seats available",
    2: "Some seats available",
    3: "All seats occupied; standing space available",
    4: "Fully crowded or packed",
  };
  const servtype_json = { 1: "Ordinary", 2: "Express Non-AC", 3: "Express AC" };

  switch (q2Response) {
    case "1":
      db = a.Data;
      break;
    case "2":
      db = b.Data;
      break;
    case "3":
      db = c.Data;
      break;
    case "4":
      db = d.Data;
      break;
    case "5":
      db = e.Data;
      break;
    case "6":
      db = f.Data;
      break;
    default:
      db = {};
      break;
  }
  var q;
  console.log(db);
  if (q1Response === "Auto") {
    q = db[0].mode_7;
  } else if (q1Response === "app-based-ride-hailing") {
    q = db[0].mode_5;
  } else {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      q = db[0].mode_7;
    } else {
      q = db[0].mode_5;
    }
  }

  return (
    <body className="bg-gradient-to-r from-teal-400 to-yellow-200 h-screen w-screen relative bottom-10">
    <table
      title="Mode choice table"
      className=" mx-auto my-8 border-seperate border-6 border-gray-500 p-4 border-double relative top-[90px]"
    >
      <tbody className="text-gray-600 border-gray-500 text-sm font-light border-seperate border border-double">
        <tr className="border-b border  bg-red-200  border-gray-400 ">
          <td className="py-3 px-6 text-center border border-r p-4 border-separate w-[200px]">
            {db[0].mode_1}
            <br />
            <span className="relative left-2">
              <input type="radio" name="row1" value="1"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-center border border-r border-gray-400 bg-blue-200">
            {db[0].mode_2}
            <br />
            <span className="relative left-2">
              <input type="radio" name="row1" value="2"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-center border-r border  border-gray-400 bg-yellow-200 w-[200px]">
            {q2Response === "1" ? "Walk/Bicycle" : db[0].mode_4}
            <br />
            <span className="relative left-2">
              <input type="radio" name="row1" value="3"></input>
            </span>
          </td>

          <td className="py-3 px-6 text-center border-r border  border-gray-400 bg-purple-200">
            {q1Response === "Own Car" ? db[0].mode_8 : db[0].mode_9}
            <br />
            <span className="relative left-[15px]">
              <input type="radio" name="row1" value="4"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-center border-r border  border-gray-400 bg-green-200">
            {q}
            <br />
            <span className="relative left-2">
              <input type="radio" name="row1" value="5"></input>
            </span>
          </td>
        </tr>
        <tr>
          {/* <td className="bg-orange-500"></td>
          <td className="bg-orange-500"></td> */}
          <td
            colspan={5}
            className="text-red-800 bg-orange-500 font-semibold text-center"
          >
            Total travel time spent while inside vehicle(s)
          </td>
          {/* <td className="bg-orange-500"></td>
          <td className="bg-orange-500"></td> */}
        </tr>

        <tr>
        <td className="border py-3 px-6 border-gray-500 text-center p-2 bg-red-200">
  {db[0]["mode_1.trans"] === 1 && (
    <p>Transfer 1</p>
  )}
  <div className="text-center flex justify-center">
    <FaBus />
    {db[0]["mode_1.trans"] === 1 && <FaBus />}
  </div>
  <p>{db[0]["mode_1.ivtt"]} m</p>
</td>

          <td className="border py-3 px-6 border-gray-500 text-center p-2 bg-blue-200">
  {db[0]["mode_2.trans"] === 1 && (
    <p>Transfer 1</p>
  )}
  <div className="text-center items-center flex justify-center">
    <FaBus />
    {db[0]["mode_2.trans"] === 1 && <FaBus />}
  </div>
  <p>{db[0]["mode_2.ivtt"]} m</p>
</td>
          <td className="border py-3 px-6 border-gray-500 text-center p-2 bg-yellow-200">
            <div className="text-center items-center flex justify-center">
              <FaBusAlt />
            </div>
            {db[0]["mode_4.ivtt"]} m
          </td>
          <td className="border py-3 px-6 border-gray-500 text-center p-2 bg-purple-200">
            <div className="text-center items-center flex justify-center">
              <FaCar />
            </div>
            {q1Response === "Own Car" ? db[0]["mode_8.ivtt"] : db[0]["mode_9.ivtt"]} m
          </td>
          <td className="border py-3 px-6 border-gray-500 text-center p-2 bg-green-200">
            <div className="text-center items-center flex justify-center">
              <FaTaxi />
            </div>
            {q1Response === "Own Car" ? db[0]["mode_7.ivtt"] : db[0]["mode_5.ivtt"]} m
          </td>
        </tr>
        <tr>
          <td
            colspan={5}
            className="bg-orange-500  text-red-700 font-semibold text-center"
          >
            Total travel time spent outside vehicle(s)
          </td>
        </tr>

        <tr className="border-b border  border-gray-500 hover:bg-gray-100">
          <td className="py-3 px-6 text-center border-r bg-red-200">
            {db[0]["mode_1.walktime"] + db[0]["mode_1.waittime"]}m
          </td>
          <td className="py-3 px-6   border-gray-500 text-center border-r bg-blue-200">
            {db[0]["mode_2.walktime"] + db[0]["mode_2.waittime"]}m
          </td>
          <td className="py-3 px-6  border-gray-500 text-center border-r bg-yellow-200">
            {db[0]["mode_4.walktime"] + db[0]["mode_4.waittime"]}m
          </td>
          <td className="py-3 px-6  border-gray-500 text-center border-r bg-purple-200">
            {q1Response === "Own Car"
              ? db[0]["mode_8.walktime"] + db[0]["mode_8.waittime"]
              : db[0]["mode_9.walktime"] + db[0]["mode_9.waittime"]}
            m
          </td>
          <td className="py-3 px-6  border-gray-500 text-center border-r bg-green-200">
            {q1Response === "Auto"
              ? db[0]["mode_7.walktime"] + db[0]["mode_7.waittime"]
              : db[0]["mode_5.walktime"] + db[0]["mode_5.waittime"]}
            m
          </td>
        </tr>
        <tr>
          <td
            colspan={5}
            className="bg-orange-500 text-red-700 text-center font-semibold"
          >
            Possible delay due to traffic congestion
          </td>
        </tr>

        <tr className="border-b border border-gray-400 hover:bg-gray-100">
          <td className="py-3 px-6 text-center border-r  border-gray-400 bg-red-200">
            upto {db[0]["mode_1.tvariab"]}m more
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-blue-200 ">
            upto {db[0]["mode_2.tvariab"]}m more
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-yellow-200">
            upto {db[0]["mode_4.tvariab"]}m more
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-purple-200">
            upto{" "}
            {q1Response === "Own Car"
              ? db[0]["mode_8.tvariab"]
              : db[0]["mode_9.tvariab"]}
            m more
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-green-200">
            upto{" "}
            {q1Response === "Auto" ? db[0]["mode_7.tvariab"] : db[0]["mode_5.tvariab"]}m
            more
          </td>
        </tr>
        <tr>
          <td
            colspan={5}
            className="bg-orange-500 text-red-700 font-semibold text-center"
          >
            Total one-way cost of travel
          </td>
        </tr>

        <tr className="border-b border border-gray-400 hover:bg-gray-100">
          <td className="py-3 px-6 text-center border-r  border-gray-400 bg-red-200">
            Rs.{db[0]["mode_1.tcost"]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-blue-200 ">
            Rs.{db[0]["mode_2.tcost"]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-yellow-200">
            Rs.{db[0]["mode_4.tcost"]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-purple-200">
            Rs.
            {q1Response === "Own Car" ? db[0]["mode_8.tcost"] : db[0]["mode_9.tcost"]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-green-200">
            {q1Response === "Auto" ? db[0]["mode_7.tcost"] : db[0]["mode_5.tcost"]}
          </td>
        </tr>

        <tr>
          <td
            colspan={5}
            className="bg-orange-500 text-red-700 font-semibold text-center"
          >
            Extent of crowding in the vehicle
          </td>
        </tr>

        <tr className="border-b border border-gray-400 hover:bg-gray-100">
          <td className="py-3 px-6 text-center border-r  border-gray-400 bg-red-200 w-1/7">
            {crowd_json[db[0]["mode_1.crowd"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-blue-200 ">
            {crowd_json[db[0]["mode_2.crowd"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-yellow-200">
            {crowd_json[db[0]["mode_4.crowd"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-purple-200">
            {q1Response === "Own Car"
              ? crowd_json[db[0]["mode_8.crowd"]]
              : crowd_json[db[0]["mode_9.crowd"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-green-200">
            {q1Response === "Auto"
              ? crowd_json[db[0]["mode_7.crowd"]]
              : crowd_json[db[0]["mode_5.crowd"]]}
          </td>
        </tr>
        <tr>
          <td
            colspan={5}
            className="bg-orange-500 text-red-700 font-semibold text-center"
          >
            {" "}
            &nbsp;Service type
          </td>
        </tr>

        <tr className="border-b border border-gray-400 hover:bg-gray-100">
          <td className="py-3 px-6 text-center border-r  border-gray-400 bg-red-200">
          {/* <FontAwesomeIcon icon="fa-duotone fa-person-seat-reclined" /> */}
          {servtype_json[db[0]["mode_1.serv"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-blue-200 ">
          {servtype_json[db[0]["mode_2.serv"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-yellow-200">
          {servtype_json[db[0]["mode_4.serv"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-purple-200">
          {q1Response==="Own Car"?servtype_json[db[0]["mode_8.serv"]]:servtype_json[db[0]["mode_9.serv"]]}
          </td>
          <td className="py-3 px-6 text-center border-r border-gray-400 bg-green-200">
          {q1Response==="Auto"?servtype_json[db[0]["mode_7.serv"]]:servtype_json[db[0]["mode_5.serv"]]}
          </td>
        </tr>
      </tbody>
    </table>
    </body>
  );
}
