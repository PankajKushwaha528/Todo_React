import { nanoid } from "nanoid";
import { useState } from "react";
const Create = (props) => {
  let todos = props.todos;
  let settodos = props.settodos;

  const [title, settitle] = useState("")

  const submitHandler = (e) => {

    e.preventDefault();
    let newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false
    }
    console.log(newtodo);

    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);

    // settodos([...todos , newtodo])

    settitle("");
  }

  return (
    <div className="w-[60%]  p-6">
      <h1 className="text-6xl  text-white font-light mb-4" >Set <span className="text-red-400">Reminders</span> for <br /> Tasks </h1>
      <form onSubmit={submitHandler}>
        <input
        className="w-full text-2xl text-white outline-none border-b-2 border-amber-50 my-6"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title" />

        <br /><br />
        <button className="px-4 py-2 border-none text-2xl font-medium text-white rounded-xl my-4 active:scale-95 hover:bg-green-800 cursor-pointer bg-green-600">Create Todos</button>
      </form>
    </div>
  )
}

export default Create