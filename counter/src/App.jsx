import { useState } from 'react'



function App() {
  let [count, setCount] = useState(0)

  const AddValue=()=>{
    setCount(count+1)
  }
  const RemoveValue=()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h2>Counter Value : {count}</h2>
      <button onClick={AddValue}
      >Add Value</button>
      <br />
      <button onClick={RemoveValue}
      >Remove Value</button>
    </>
  )
}

export default App
