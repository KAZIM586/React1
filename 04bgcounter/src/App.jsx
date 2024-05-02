import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
   
     <div className="w-full h-screen duration-500"
    style={{backgroundColor: color}}
    >
<div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center  shadow-lg bg-white gap-3 rounded px-3 py-2">
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-black text-2xl" onClick={() => setColor("yellow")}style={{backgroundColor: "yellow"}}>Yellow</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("blue")}
    style={{backgroundColor: "blue"}}>Blue</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl"onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("orange")} style={{backgroundColor: "orange"}}>Orange</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("red")}
    style={{backgroundColor: "red"}}>Red</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("pink")}
    style={{backgroundColor: "pink"}}>Pink</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("purple")}
    style={{backgroundColor: "purple"}}>Purple</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("black")}
    style={{backgroundColor: "black"}}>Black</button>
    <button className=" px-4 py-3 outline-none rounded shadow-lg text-white text-2xl" onClick={() => setColor("gray")}
    style={{backgroundColor: "gray"}}>Gray</button>
  </div>
</div>

     </div>
   
    
     
  )
}

export default App
