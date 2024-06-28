import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setlength] = useState(8)
  const [number,setnumber] = useState(false)
  const [char,setchar] = useState(false)
  const [password,setpassword] = useState("")

  const passref=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str+="0123456789" 
    if(char) str+="!@#$%^&*()"
    for(let i=1;i<=length;i++){
      let chara = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(chara)
    }
    setpassword(pass)
    
  },[length,number,char,setpassword])
const copyPass=useCallback(()=>{
  passref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 '>
      <h1 className='text-white text-center '> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' ref={passref} readOnly />
        <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={20 } value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
          <label >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={number} id='numberinput' onChange={()=>{setnumber((prev)=>!prev)}} />
          <label htmlFor="numberinput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={char} id='characterinput' onChange={()=>{setchar((prev)=>!prev)}} />
          <label htmlFor="characterinput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

