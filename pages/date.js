import axios from "axios";
import { useState } from "react";

const Date = () => {
  const [listdate, setListdate] = useState([]);

  const handleGetDate = () => {
    const userDateTime = new window.Date();
    const userDateTimeString = userDateTime.toISOString();
    ///api/user/get-date?datetime=2023-03-23T23:10:00.737Z
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://yahhayayyssy-001-site1.btempurl.com/api/user/get-date?datetime=${userDateTimeString}`,
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        }
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
