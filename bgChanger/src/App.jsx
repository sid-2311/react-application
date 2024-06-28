import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 left-0 right-0 flex justify-center px-2">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
