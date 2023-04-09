import { useLocation } from "react-router-dom";
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
  const q1 = queryParams.get("q1");
  const q2 = queryParams.get("q2");

  // if condition to choose the right dbbase

  switch (q2) {
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
  var q
  console.log(db);
  if (q1 === "Auto") {
    q = db[0].mode_7;
  } else if (q1 === "app-based-ride-hailing") {
    q = db[0].mode_5;
  } else {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      q = db[0].mode_7;
    } else {
      q = db[0].mode_5;;
    }
  }

  return (
    <table className="table-auto mx-auto my-8 border-seperate border-2 border-gray-400 border-spacing-1">
      {/* <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Column 1</th>
        <th className="py-3 px-6 text-left">Column 2</th>
        <th className="py-3 px-6 text-left">Column 3</th>
        <th className="py-3 px-6 text-left">Column 4</th>
        <th className="py-3 px-6 text-left">Column 5</th>
      </tr>
    </thead> */}
      <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">
            {db[0].mode_1}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="1"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            {db[0].mode_2}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="2"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            {q2 === "1" ? "Walk/Bicycle" : db[0].mode_4}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="3"></input>
            </span>
          </td>

          <td className="py-3 px-6 text-left">
            {q1 === "Own Car" ? db[0].mode_8 : db[0].mode_9}
            <br />
            <span className="relative left-[50px]">
              <input type="radio" name="row1" value="4"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            {q}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="5"></input>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 2, Column 1</td>
          <td className="py-3 px-6 text-left">Row 2, Column 2</td>
          <td className="py-3 px-6 text-left">Row 2, Column 3</td>
          <td className="py-3 px-6 text-left">Row 2, Column 4</td>
          <td className="py-3 px-6 text-left">Row 2, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 3, Column 1</td>
          <td className="py-3 px-6 text-left">Row 3, Column 2</td>
          <td className="py-3 px-6 text-left">Row 3, Column 3</td>
          <td className="py-3 px-6 text-left">Row 3, Column 4</td>
          <td className="py-3 px-6 text-left">Row 3, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 4, Column 1</td>
          <td className="py-3 px-6 text-left">Row 4, Column 2</td>
          <td className="py-3 px-6 text-left">Row 4, Column 3</td>
          <td className="py-3 px-6 text-left">Row 4, Column 4</td>
          <td className="py-3 px-6 text-left">Row 4, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 5, Column 1</td>
          <td className="py-3 px-6 text-left">Row 5, Column 2</td>
          <td className="py-3 px-6 text-left">Row 5, Column 3</td>
          <td className="py-3 px-6 text-left">Row 5, Column 4</td>
          <td className="py-3 px-6 text-left">Row 5, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 6, Column 1</td>
          <td className="py-3 px-6 text-left">Row 6, Column 2</td>
          <td className="py-3 px-6 text-left">Row 6, Column 3</td>
          <td className="py-3 px-6 text-left">Row 6, Column 4</td>
          <td className="py-3 px-6 text-left">Row 6, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 7, Column 1</td>
          <td className="py-3 px-6 text-left">Row 7, Column 2</td>
          <td className="py-3 px-6 text-left">Row 7, Column 3</td>
          <td className="py-3 px-6 text-left">Row 7, Column 4</td>
          <td className="py-3 px-6 text-left">Row 7, Column 5</td>
        </tr>
      </tbody>
    </table>
  );
}
