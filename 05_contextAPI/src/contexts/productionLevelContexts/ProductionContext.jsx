import { createContext, useContext, useState } from "react";

export const ProdContext = createContext();

export const ProdContextProvider = ({ children }) => {
  const [isProdUse, setIsProdUse] = useState(false);
  const [prodName, setProdName] = useState("Using Prod Name Test");

  const prodData = {
    isProdUse,
    setIsProdUse,
    prodName,
    setProdName,
  };

  return (
    <ProdContext.Provider value={prodData}>{children}</ProdContext.Provider>
  );
};

export default function useProdContext() {
  return useContext(ProdContext);
}
