import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&{}";
    }

    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);
  return (
    <>
      <div className="flex justify-center flex-col w-1/2 mx-auto my-5 py-8 px-5 rounded-3xl bg-gray-700">
        <h1 className="text-center font-semibold text-3xl">
          Generate Password
        </h1>
        <div className="my-2 flex rounded-full">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-grow  bg-white text-black p-1 outline-none border-none rounded-s-xl"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 py-1 px-3 outline-none border-none rounded-e-xl"
          >
            Copy
          </button>
        </div>
        <div className="my-2 flex items-center gap-10">
          <div className="flex gap-2 items-center">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
