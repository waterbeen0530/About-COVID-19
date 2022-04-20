import React, { useEffect, useState } from "react";
import axios from "axios";

const MainScreen = () => {
  const [domestic, setDomestic] = useState(null);

  const getData = () => {
    axios
      .request({
        url: "https://api.corona-19.kr/korea/beta/?serviceKey=LnJWSjMIRqfEzUNTiQ3VuCo749kGlehKY",
        method: "GET",
      })
      .then((res) => {
        setDomestic(res.data);
        console.log(res.data);
      });
  };

  return (
    <>
      <p>앙 개꿀</p>
    </>
  );
};

export default MainScreen;
