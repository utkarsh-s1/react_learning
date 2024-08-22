import { useState } from "react"


function App() {
  let [counter, setCounter] = useState(10)
  function adding(){
  if(counter ==20){

  }
  else{
    setCounter(counter+1)
  }
  console.log(counter)// async so one step behind
   // changes value everywhere in dom wherre counter is used
  }
  function remover(){
    if(counter==0){

    }
    else{
    setCounter(counter-1)

    }
    console.log(counter) // async so one step behind
  } 
  

  return (
    <>
      <h1>uttu don</h1>

      <h2>Counter Valie : {counter}</h2>
      <button id="adder" onClick={adding} >add value</button>
      <br></br>
      <button id="remover" onClick={remover}>remove value</button>
    </>
  )
}

export default App
