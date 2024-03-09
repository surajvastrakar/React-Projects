import { useState } from "react";
import "./App.css";
import Test from "./components/Test";

const btns = [
  {
    label: "Pink",
    color: "bg-pink-500",
  },
  {
    label: "yellow",
    color: "bg-yellow-500",
  },
  {
    label: "blue",
    color: "bg-blue-500",
  },
  {
    label: "lime",
    color: "bg-lime-500",
  },
  {
    label: "orange",
    color: "bg-orange-500",
  },
];

function App() {
  const [bgColor, setBgColor] = useState("");
  return (
    <>
      <div
        className={`w-screen h-screen flex items-end justify-center p-4 ${bgColor}`}
      >
        <div className="text-center">
          <div className="flex gap-2 bg-black p-4 rounded-full">
            {btns.map((btn) => (
              <button
                key={btn.color}
                onClick={() => setBgColor(btn.color)}
                className={`rounded-full px-4 py-1 ${btn.color}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          {bgColor != "" && (
            <button
              onClick={() => setBgColor("")}
              className="rounded-full bg-gray-200 mt-3 py-1 px-4 border-2 border-black"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
