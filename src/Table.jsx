import React, { useState } from 'react';
import TableRow from './TableRow';
function Table() {
  const [num, UpdateNum] = useState(1);

  function NextTable() {

    UpdateNum(num + 1);
  }
  return (

    <>
      <div className="border border-black rounded p-1 shadow shadow-red-700">
        <TableRow number={num} i={1}></TableRow>
        <TableRow number={num} i={2} ></TableRow>
        <TableRow number={num} i={3}></TableRow>
        <TableRow number={num} i={4}></TableRow>
        <TableRow number={num} i={5}></TableRow>

      </div>
      <div>
        <button onClick={NextTable} className="Border bg-amber-400 py-2 px-3 rounded-md">Next</button>
      </div>
    </>
  );
}
export default Table;