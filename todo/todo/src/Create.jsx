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
    <div className="pt-12">
      <input
        type="text"
        placeholder="Enter the Task"
        className="w-[300px] p-[10px] font-serif outline-black border-b-[2px] rounded-sm"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd} className="p-[10px] bg-black text-white cursor-pointer">
        Add
      </button>
    </div>
  );
}
