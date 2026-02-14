import { useState } from "react";
import Child from "./Child";
function Parent() {
  const [count, setCount] = useState(0);
  const [uname, setuname] = useState("Ganesh");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child name={uname} />
      <input type="text" value={uname} onChange={(e)=>{
        setuname(e.target.value);
      }} />
    </>
  );
}

export default Parent;