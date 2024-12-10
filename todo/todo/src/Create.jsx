import { useState } from "react";
import axios from 'axios'

export default function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios.post('http://localhost:8000/add', {task:task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Task"
        className="w-[300px] p-[10px] fn"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
