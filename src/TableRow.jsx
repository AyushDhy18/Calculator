import React from 'react';
function TableRow({ number, i }) {
  return (
    <>
      <div> {number} x {i} ={number * i} </div>
    </>
  );
}
export default TableRow;