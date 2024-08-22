import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")
  let passref = useRef(null)

  const generatepass = useCallback(()=>{ // use callback for caching
    let passs = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num){
      str=str+"1234567890"
    }
    if(char){
      str=str+"!@#$%^&*()_+-=[]{},.;:'<>?/\\|"
    }
    for(let i=0;i<len;i++){
      passs+=str[Math.floor(str.length*(Math.random())+1)-1]

    }
    setPass(passs)




  }, [len, num, char, setPass]);// arrays is like paramters for functon for memorizTON


  useEffect(()=>{
    generatepass()
  },[len,num, char]) // for calling a fucnion when soimehting changes

  function copypass(){

    passref.current.select() // to highlight text on slkeection
    passref.current.setSelectionRange(0,2) //highlight obky [0,2] index
    window.navigator.clipboard.writeText(pass)
  }


  

  


  return (
    <>
     
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-black'>
        <div className='flex shadow rounded-md overflow-hidden mb-4'>
          <input ref={passref} type='text' value={pass} className='w-full py-1 px-2' placeholder='password' readOnly/>
          <button className='bg-violet-400 text-white' onClick={copypass}>Copy</button>
        </div>
        <div className='text-sm flex gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={100} value={len} onChange={(e)=>setLen(e.target.value)}/>
            <label>Length : {len}</label>
            <label>  Number</label>
            <input type="checkbox" defaultChecked={num} id='numm' onChange={()=>{setNum(!num)}}/>
            <label>  character</label>
            <input type="checkbox" defaultChecked={char} id='charr' onChange={()=>{setChar(!char)}}/>

            


          </div> 

        </div>
      </div>


    </>
  )
}

export default App
