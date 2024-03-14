import "./App.css";
import { useContext, useState } from "react";
import UserContext from "./contexts/UserContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { ProdContextProvider } from "./contexts/productionLevelContexts/ProductionContext";
import ProdComp from "./components/ProdComp";

function App() {
  const { userName, password, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);
  return (
    <>
      <h1>Hello World</h1>

      {isLoggedIn ? <Login /> : <SignUp />}

      <p
        onClick={() => setIsLoggedIn((prev) => !prev)}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        for {!isLoggedIn ? "login" : "sign up"} click here
      </p>

      <div>
        <h2>Most common production level implementation of context API</h2>
        <ProdContextProvider>
          <ProdComp />
        </ProdContextProvider>
      </div>
    </>
  );
}

export default App;
