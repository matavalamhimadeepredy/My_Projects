import { useState } from "react";
import Clickcounter from "./Component/Counter/Clickcounter";
import Counter from "./Component/Counter/Counter";
import HoveverCounter from "./Component/Counter/HoveverCounter";



function App() {
const[count,setcount]=useState(0)


const handleincrement=( )=> {
  setcount (count +1)
}

  return (
    <div className="App">
   
    <hr/>
    <br/>
    <Clickcounter/>
      <hr/>
      <br/>
     <HoveverCounter/>

      
      <Counter render={<Clickcounter count={count} handleincrement={handleincrement}/>} />

      <Counter render={<HoveverCounter count={count} handleincrement={handleincrement}/>} />
      
    </div>
  );
}
export default App;
