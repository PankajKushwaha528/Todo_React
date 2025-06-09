import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wraper";

const Read = (props) => {
    const [todos,settodos] =useContext(todoContext);
   
  let deleteHandler = (id) => {
    console.log(id);
    let newtodo = todos.filter((todo) => todo.id != id)
    settodos(newtodo);
    toast.error("Todo Deleted!");
  }

  const randertodos = todos.map((todo) => {
    return (
     <li key={todo.id} className=" flex justify-between items-center  p-2 m-2 bg-gray-600 rounded">
      <span className="text-2xl font-normal text-white">{todo.title}</span>
      <button className="bg-green-500 px-3 font-normal hover:bg-green-700  text-white text-xl py-2 cursor-pointer rounded" onClick={() => deleteHandler(todo.id)}>Delete</button>
    </li>
    );
  });


  return (
    <div className="w-[40%]  p-6">
      <h1 className="text-6xl  text-white font-light mb-6">
        <span className="text-pink-400">Pending</span>Todos</h1>
      <ol className="px-3 py-1 bg-gray-400 mt-8 rounded">
        {randertodos}
      </ol>
    </div>
  )
}

export default Read