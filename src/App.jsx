
import { useState } from "react";
import Read from "./components/Read";
import Create from "./components/Create";
const App = () => {
  const [todos, settodos] = useState([
    // { id: null, title: "", isCompleted: false }
    // {}
  ]);

  return (
    <div className="flex w-full h-screen bg-gray-800  p-7">
      <Create todos={todos} settodos={settodos}/>
      <hr />
      <Read todos={todos} settodos={settodos} />
    </div>
  )
}

export default App