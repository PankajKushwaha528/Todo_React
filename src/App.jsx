
import { useState } from "react";
import Read from "./components/Read";
import Create from "./components/Create";
const App = () => {
 

  return (
    <div className="flex w-full h-screen bg-gray-800  p-7">
      <Create />
      <hr />
      <Read/>
    </div>
  )
}

export default App