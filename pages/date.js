import axios from "axios";
import { useState } from "react";

const Date = () => {
  const [listdate, setListdate] = useState([]);

  const handleGetDate = () => {
    const userDateTime = new window.Date();
    const userDateTimeString = userDateTime.toISOString();

    axios
      .get(
        `https://localhost:7246/api/user/get-date?datetime=${userDateTimeString}`
      )
      .then((res) => {
        let arr = [...res.data.list];
        arr = arr.map((date) => {
          const serverDateTime = new window.Date(date);
          const userDateTimeString = serverDateTime.toLocaleString();
          return userDateTimeString;
        });

        setListdate([...arr]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      {listdate.map((date, i) => (
        <div key={i}>
          <h2>{date}</h2>
        </div>
      ))}
      <button
        onClick={() => {
          handleGetDate();
        }}
      >
        Get Dates
      </button>
    </div>
  );
};

export default Date;
