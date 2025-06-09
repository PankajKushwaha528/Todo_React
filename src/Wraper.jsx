import { createContext, useState } from "react";

export const todoContext = createContext(null);
const Wraper = (props) => {
     const [todos, settodos] = useState([
    // { id: null, title: "", isCompleted: false }
    
  ]);
    
  return (
    <todoContext.Provider value={[todos,settodos]}>
      {props.children}
    </todoContext.Provider>
  )
}

export default Wraper