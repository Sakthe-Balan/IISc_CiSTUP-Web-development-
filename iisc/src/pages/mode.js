

import { useLocation } from "react-router-dom";


export default function Mode() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const q1Response = queryParams.get("q1");
  const q2Response = queryParams.get("q2");

  return (<div>
          hi

          </div>);
}