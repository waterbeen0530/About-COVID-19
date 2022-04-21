import React, { useEffect, useState } from "react";
import axios from "axios";

const MainScreen = () => {
  const [domestic, setDomestic] = useState([]);

  const getData = () => {
    axios
      .request({
        url: "https://api.corona-19.kr/korea/beta/?serviceKey=LnJWSjMIRqfEzUNTiQ3VuCo749kGlehKY",
        method: "GET",
      })
      .then(({ data }) => {
        const arr = Object.keys(data)
          .filter((key) => key !== "API")
          .map((key) => {
            return data[key];
          });
        console.log(arr);
        setDomestic(arr);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {domestic.map((d) => (
          <p key={d.countryNm}>{d.countryNm}</p>
        ))}
      </div>
    </>
  );
};

export default MainScreen;
