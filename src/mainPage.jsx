import React, { useState } from "react";
import { BKNFTY_DAILY_OHLC_BINARY, BKNFTY_1MIN_2021 } from "./constants";
import { table as Table } from "./table";
import { mapTheData } from "./utils";
import { Cards } from "./cards";
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
      resultFinal[key] = ((res[key] * 100) / count).toString().slice(0, 4);
    }
    setTable_data(resultFinal);
  };
  return (
    <>
      <select
        onChange={(e) => {
          let data = mapTheData(e.target.value);
          setData(data);
          handleDataChange(number, data);
        }}
      >
        <option value={"BKNFTY_DAILY_OHLC_BINARY"}>
          Banknifty daily --2015
        </option>
        <option value={"BKNFTY_1MIN_2021"}>Banknifty 1 Min --2021</option>
        <option value={"BNKFY_DAILY_2005_2023"}>BNKFY_DAILY_2005_2023</option>
        <option value={"BANKFY_WEEKLY_2008_2023"}>
          BANKFY_WEEKLY_2008_2023
        </option>
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
      <div style={{ display: "flex" }}>
        <Table data={table_data} />
        <Cards data={table_data} raw={data} />
      </div>
    </>
  );
};
