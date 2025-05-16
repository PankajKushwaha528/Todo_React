import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Create = (props) => {
  let todos = props.todos;
  let settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id= nanoid();
    console.log(data);

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    reset();
      
  }
  // console.log(errors.title.message);
  
  return (
    <div className="w-[60%]  p-6">
      <h1 className="text-6xl  text-white font-light mb-4" >Set <span className="text-red-400">Reminders</span> for <br /> Tasks </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="w-full text-2xl text-white outline-none border-b-2 border-amber-50 mt-6"
          {...register("title" ,{required:"Input can not be empty"})}
          type="text"
          placeholder="title" 
          />
          {errors && errors.title && errors.title.message && <small className="text-xl font-light text-red-500 ">{errors.title.message}</small>}

          {/* <small>{errors?.title?.message}</small> */} //for one line 

        <br /><br />
        <button className="px-4 py-2 border-none text-2xl font-medium text-white rounded-xl mt-4 active:scale-95 hover:bg-green-800 cursor-pointer bg-green-600">Create Todos</button>
      </form>
    </div>
  )
}

export default Create