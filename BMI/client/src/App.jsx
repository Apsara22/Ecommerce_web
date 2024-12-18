import { useState } from "react"

function App() {

  const[weight, Setweight] = useState(0);
  const[height, Setheight] = useState(0)
  const[bmi, Setbmi]= useState("")
  const[message, SetMessage] = useState('');

  const calBmi =(e) =>{
    e.preventDefault();
    if (weight === 0 || height === 0){
      alert('Please enter a vaild weight and height')
    }
    else{
      const bmi = (weight / (height * height) *703);
      Setbmi(bmi.toFixed(1))
      if(bmi<25){
        SetMessage("you are under weight");
      }
      else if(bmi >=25 && bmi <30){
        SetMessage("your weight is Normal")
      }
      else{
        SetMessage("you are overweight")
      }
    }
  }

  const reload =()=>{
    window.location.reload();

  }
 
  return (
    <>
    <div className="App">
      <div className="container">
        <h2>BMI Calculater</h2>
        <form action="" onSubmit={calBmi}>
        <div>
          <label htmlFor="">Weight(lbs)</label>
          <input type="text" placeholder="Enter Weight Value" value={weight} onChange={(e) =>Setweight(e.target.value)}/>
          <label htmlFor="">Height(inch)</label>
          <input type="text" placeholder="Enter Weight Value" value={height} onChange={(e) =>Setheight(e.target.value)}/>

        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="submit" onClick={reload}>Reload</button>
        </div>
        <div className="result">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default App
