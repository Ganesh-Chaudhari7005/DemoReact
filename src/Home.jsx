import { useEffect, useState } from "react";
import "./App.css";

export default function Home() {
const[index, setindex] = useState(0);
let initial_val = 600;
const[tranclass , settranclass] = useState('tran1');

// useEffect(()=>{
//   setInterval(() => {
//     setindex((prev)=>{
//       if(prev >= 4){
//         settranclass('tran2');
//         return 0;
//       }else{
//         settranclass('tran1');
//         return prev + 1;
//       }
//     }
     
//     )
    
//   },2000);
// },[])

useEffect(()=>{
  let int101 = setInterval(()=>{
      setindex((prev) => prev + 1);
  },3000)

  return ()=> clearInterval(int101);
},[])


useEffect(()=>{
  if(index == 4){
    let time1001 = setTimeout(()=>{
      settranclass("tran2");
      setindex(0);
    },500)

    return ()=> clearTimeout(time1001);
  }else{
    settranclass('tran1')
  }

}, [index])


   return (
     <div className="container-fluid flex flex-col items-center justify-center py-5">
       <div className="container py-5 flex justify-center">
         <div className="img-cont-slider">
           <div
             className={`slider-track ${tranclass}`}
             style={{ transform: `translateX(-${index * initial_val}px)` }}
           >
             <img className="slider-img" src="/img1.avif" />
             <img className="slider-img" src="/img2.jfif" />
             <img className="slider-img" src="/img3.jfif" />
             <img className="slider-img" src="/img4.jfif" />
             <img className="slider-img" src="/img1.avif" />
           </div>
         </div>
       </div>
       {/* <div className="flex">
         <button onClick={() => backimage()} className="backward">
           Back
         </button>
         <button onClick={() => nextimage()}  className="forward">
           Next
         </button>
       </div> */}
     </div>
   );
}
