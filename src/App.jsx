import Card from './Card.jsx';
import "./App.css";
import { useState } from 'react';

function App(){

  const [count, setCount] = useState(0);

  return(
    <div>
      <span>count:{count}</span>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count- 1)}>Decrease</button>
      <Card title="Samsung galaxy s24" brand="Samsung"/>
      <Card title ="OnePlus Nord" brand="OnePlus" price={20000}/>
      <Card title ="Iphone 14" brand="Apple" price={149999}/>
    
    </div>
  );
};
export default App;