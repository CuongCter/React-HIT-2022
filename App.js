
import { useEffect, useState } from 'react';
import './App.css';
import ChangeColor from './ChangeColor';
import   SetName  from './SetName';
import Counter from './Counter';


function App() {
  const a = 'Chuyển màu'
  const [counter, setCounter] = useState(1)
  const [name , setName] = useState('HIT');
   const [color , setColor] = useState('red');
  
  return (
    <div className="App">
      {/* <h1>{counter}</h1>
      <button onClick={handlenIncrease}>Increase</button> */}
      <SetName  name = {name} setName = {setName}/>
      {/* <Cos  name = {a} color = {color} setColor = {setColor}/> */}
      <Counter counter = {counter} setCounter = {setCounter}/>
      <ChangeColor string = {a} color = {color} setColor = {setColor} />
    </div>  
  );
}

export default App;
