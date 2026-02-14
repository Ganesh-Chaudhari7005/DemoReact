import { use, useEffect, useState ,useRef} from 'react'
import './App.css'
export function PassGen() {
  let [pass, setpass] = useState("");
  let [len , setLen] = useState(8);
  let [charAllowed , setcharAllowed] = useState(false);
  let [numAllowed , setnumAllowed] = useState(false);
  const passRef = useRef(null);
  const heading = useRef(null);
  const passwordGenerator =()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let temp = ''
    if(numAllowed) str += '0123456789';
    if(charAllowed) str += '@$(){}[]!^*';
    
    for(let i = 0; i < len; i ++){
      let rannum = Math.floor(Math.random() * str.length);
      temp += str.charAt(rannum);
      
    }  
    setpass(temp);  
    

  }

  useEffect(()=>{
    passwordGenerator();
  }, [len,charAllowed,numAllowed]);

  const copyFunc = ()=>{
    passRef.current.select();
    window.navigator.clipboard.writeText(passRef.current.value);
    console.log(heading.current.innerText)
  }
  return (
    <div className="py-10  flex flex-row justify-center items-center bg-blue-50">
      <div className="outerCont bg-blue-950 rounded-lg">
        <h1 ref={heading} className="text-3xl text-white text-center mt-5">
          Password Generator
        </h1>
        <input
          type="text"
          className="m-5 passfield rounded font-medium text-xl p-3"
          value={pass}
          ref={passRef}
        />
        <button
          onClick={copyFunc}
          className="cpbtn bg-blue-500 hover:bg-blue-700"
        >
          Copy
        </button>
        <br />
        <input
          type="range"
          className="m-5"
          min={8}
          max={20}
          value={len}
          onChange={(e) => {
            setLen(Number(e.target.value));
          }}
        />
        <label className="text-white font-medium text-xl mr-16">
          Length : {len}
        </label>
        <input
          className="mr-5"
          type="checkbox"
          checked={charAllowed}
          onChange={() => setcharAllowed((prev) => !prev)}
        />
        <label className="text-white font-medium text-xl mr-5">
          Special Characters
        </label>
        <input
          className="mr-5"
          type="checkbox"
          checked={numAllowed}
          onChange={() => setnumAllowed((prev) => !prev)}
        />
        <label className="text-white font-medium text-xl">
          Numbers Allowed
        </label>
      </div>
    </div>
  );
}


