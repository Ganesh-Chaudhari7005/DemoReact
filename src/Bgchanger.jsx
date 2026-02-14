import { useState } from "react";
export function Bgchanger() {
    const [bg, setbg] = useState("white");
    let colors = [
      "red",
      "green",
      "blue",
      "cyan",
      "pink",
      "brown",
      "black",
      "grey",
    ];
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: bg }}>
      <div className="">
        {colors.map((n, index) => (
          <button
            key={index}
            onClick={() => setbg(n)}
            className="bg-blue-600 m-2 p-3 pl-5 pr-5 text-white rounded font-medium shadow-xl hover:bg-blue-800"
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
