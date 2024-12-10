import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Create from "./Create";
export default function Home() {
  const [todos, settodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/get")
      .then((result) => settodo(result.data))
      .catch((err) => console.log(err));
  }, [])

  const handleEdit = (id) =>{
    axios
      .put("http://localhost:8000/update"+id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

  }


  return (
    <>
      <h2 className="font-bold text-2xl pt-14">Todo List</h2>
      <hr />
    <Create className=""/>

      {todos.length == 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) :(
        todos.map((todo) => (
          <div className="flex w-[345px] items-center justify-between bg-black text-white h-[35px] mt-1 p-[2px 5px 2px 5px]">
          <div className="" onClick={() => handleEdit(todo._id)}>
            <FaRegCircle/>
            <p className="flex">{todo.task}</p>
            

          </div>
          <div>
            <span>
            <MdDeleteOutline/>
              
            </span>
          </div>
          </div>
        ))
      )}
      
    </>
  );
}
