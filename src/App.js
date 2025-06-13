import "./styles.css"
import {useState} from 'react';

export default function App() {
  return (
    <div className='App'>
<Counter/>
    </div>
  )
}


function Counter(){
  const [step,setStep] =useState(1);
  const [count,setCount] =useState(1);
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + count);

  return(
    <div>
        <div>
        <button onClick={()=>setStep(s=>s - 1)}>-</button>
        <span>Step{step}</span>
        <button onClick={()=>setStep(s=>s + 1)}>+</button>
         </div>
  
         <div>
        <button onClick={()=>setCount(c=>c - step)}>-</button>
        <span>Count {count}</span>
        <button onClick={()=>setCount(c=>c + step)}>+</button>
        </div>
        <div>
          {/* <p>{count} days from today is {futureDate.toString()} </p> */}
          <span>{count === 0 ? "Today is ": count > 0 ? `${count} days from today is` : `${count} days ago was`} {futureDate.toString()} </span>
        </div>
      </div>
  )
}
