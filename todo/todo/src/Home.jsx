import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [todos, settodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/get")
      .then((result) => settodo(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div>
            <p>{todo.task}</p>

          </div>
          <div>
    </>
  );
}
