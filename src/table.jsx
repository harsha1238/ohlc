export const table = ({ data }) => {
  console.log(data[0]);
  return Object.keys(data).length ? (
    <>
      <table>
        <tr>
          <th>Number</th>
          <th>Probabale</th>
        </tr>
        <tr>
          <td>0</td>
          <td>{data["0"]}%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>{data["1"]}%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{data["2"]}%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{data["3"]}%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>{data["4"]}%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>{data["5"]}%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>{data["6"]}%</td>
        </tr>
        <tr>
          <td>7</td>
          <td>{data["7"]}%</td>
        </tr>
        <tr>
          <td>8</td>
          <td>{data["8"]}%</td>
        </tr>
        <tr>
          <td>9</td>
          <td>{data["9"]}%</td>
        </tr>
        <tr>
          <td>10</td>
          <td>{data["10"]}%</td>
        </tr>
        <tr>
          <td>11</td>
          <td>{data["11"]}%</td>
        </tr>
        <tr>
          <td>12</td>
          <td>{data["12"]}%</td>
        </tr>
        <tr>
          <td>13</td>
          <td>{data["13"]}%</td>
        </tr>
        <tr>
          <td>14</td>
          <td>{data["14"]}%</td>
        </tr>

        <tr>
          <td>15</td>
          <td>{data["15"]}%</td>
        </tr>
      </table>
    </>
  ) : (
    <>Invalid Number</>
  );
};