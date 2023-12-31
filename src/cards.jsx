export const Cards = ({ data, raw }) => {
  const getProbability = (arr) => {
    let countObj = {};
    let res = 0;
    raw.map((item) => {
      if (countObj.hasOwnProperty(item)) {
        countObj[item] += 1;
      } else {
        countObj[item] = 1;
      }
    });

    for (let key in countObj) {
      if (arr.includes(Number(key))) {
        res = res + Number(countObj[key]) / raw.length;
      }
    }
    return res * 100;
  };
  const getCount = (arr) => {
    let higherHigh = 0;
    for (let key in data) {
      if (arr.includes(Number(key))) {
        higherHigh += Number(data[key]);
      }
    }
    return {
      higherHigh: higherHigh.toString().slice(0, 4) + "%",
    };
  };
  return Object.keys(data).length ? (
    <>
      <table>
        <tr>
          <th>Condition</th>
          <th>Probabale Temp</th>
          <th>Probs Actual</th>
        </tr>
        <tr>
          <td>Chances of opening Higher</td>
          <td>{getCount([8, 9, 10, 11, 12, 13, 14, 15]).higherHigh}</td>
          <td>{getProbability([8, 9, 10, 11, 12, 13, 14, 15])}</td>
        </tr>
        <tr>
          <td>Chances of opening Lower</td>
          <td>{getCount([0, 1, 2, 3, 4, 5, 6, 7]).higherHigh}</td>
          <td>{getProbability([0, 1, 2, 3, 4, 5, 6, 7])}</td>
        </tr>
        <tr>
          <td>Chances of Higher High</td>
          <td>{getCount([4, 5, 6, 7, 12, 13, 14, 15]).higherHigh}</td>
          <td>{getProbability([4, 5, 6, 7, 12, 13, 14, 15])}</td>
        </tr>
        <tr>
          <td>Chances of Lower Low</td>
          <td>{getCount([0, 1, 4, 5, 8, 9, 12, 13]).higherHigh}</td>
          <td>{getProbability([0, 1, 4, 5, 8, 9, 12, 13])}</td>
        </tr>
        <tr>
          <td>Chances of Closing High</td>
          <td>{getCount([1, 3, 5, 7, 9, 11, 13, 15]).higherHigh}</td>
          <td>{getProbability([1, 3, 5, 7, 9, 11, 13, 15])}</td>
        </tr>
        <tr>
          <td>Chances of Opening Low and making Lower Low</td>
          <td>{getCount([0, 1, 4, 5]).higherHigh}</td>
          <td>{getProbability([0, 1, 4, 5])}</td>
        </tr>
        <tr>
          <td>Chances of Opening Low and making Higher High</td>
          <td>{getCount([4, 5, 6, 7]).higherHigh}</td>
          <td>{getProbability([4, 5, 6, 7])}</td>
        </tr>
        <tr>
          <td>Chances of Opening High and making Higher High</td>
          <td>{getCount([12, 13, 14, 15]).higherHigh}</td>
          <td>{getProbability([12, 13, 14, 15])}</td>
        </tr>
        <tr>
          <td>Chances of Opening High and making Higher Low</td>
          <td>{getCount([10, 11, 14, 15]).higherHigh}</td>
          <td>{getProbability([10, 11, 14, 15])}</td>
        </tr>
      </table>
    </>
  ) : null;
};
