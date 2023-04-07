import React from 'react';
import Table from './Table';
import Header from './Header';
import Calculator from './Calculator'


//import TableNext from './TableNext';


function App() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-zinc-500 to-emerald-400 p-4">
      <div className="flex flex-col justify-center items-center border-2 border-black py-2 bg-black rounded-lg shadow shadow-white">
        <Header />
        <Calculator></Calculator>
      </div>
    </div>
  );
}

export default App;