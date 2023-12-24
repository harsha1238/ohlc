import React, { useState } from "react";
import { BKNFTY_DAILY_OHLC_BINARY, BKNFTY_1MIN_2021 } from "./constants";
import { table as Table } from "./table";
export const MainPage = () => {
  const [data, setData] = useState(BKNFTY_DAILY_OHLC_BINARY);
  const [number, setNumber] = useState(0);
  const [table_data, setTable_data] = useState({});
  let handleDataChange = (num, arr) => {
    let res = {};
    let resultFinal = {};
    let count = 0;
    arr.map((item, index) => {
      if (num == item) {
        count++;
        if (`${arr[index + 1]}`) {
          if (res.hasOwnProperty(arr[index + 1])) {
            res[arr[index + 1]] = res[arr[index + 1]] + 1;
          } else {
            res[arr[index + 1]] = 1;
          }
        }
      }
    });

    for (let key in res) {
      resultFinal[key] = ((res[key] * 100) / count).toString().slice(0, 2);
    }
    setTable_data(resultFinal);
  };
  return (
    <>
      <select
        onChange={(e) => {
          setData(
            e.target.value == "BKNFTY_1MIN_2021"
              ? BKNFTY_1MIN_2021
              : BKNFTY_DAILY_OHLC_BINARY
          );
          handleDataChange(number, data);
        }}
      >
        <option value={"BKNFTY_DAILY_OHLC_BINARY"}>
          Banknifty daily --2015
        </option>
        <option value={"BKNFTY_1MIN_2021"}>Banknifty 1 Min --2021</option>
      </select>
      <input
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type="number"
      />
      <button
        onClick={() => {
          handleDataChange(number, data);
        }}
      >
        Go
      </button>
      <hr />
      <Table data={table_data} />
    </>
  );
};
