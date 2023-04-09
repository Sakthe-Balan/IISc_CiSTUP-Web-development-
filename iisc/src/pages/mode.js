
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function Mode() {
  const location = useLocation();
  const [q1Response, setQ1Response] = useState("");
  const [q2Response, setQ2Response] = useState("");

  useEffect(() => {
    // Retrieve the state from location
    if (location.state) {
      const { q1Response, q2Response } = location.state;
      setQ1Response(q1Response);
      setQ2Response(q2Response);
    }
  }, [location]);
  return (
    <div>hi
    </div>
  );
}