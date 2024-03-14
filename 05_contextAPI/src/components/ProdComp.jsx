import React from "react";
import useProdContext from "../contexts/productionLevelContexts/ProductionContext";

const ProdComp = () => {
  const { isProdUse, setIsProdUse, prodName, setProdName } = useProdContext();
  return (
    <>
      <div>
        <input
          id="prod"
          type="checkbox"
          onChange={(e) => {
            e.target.checked ? setIsProdUse(true) : setIsProdUse(false);
          }}
        />
        <label htmlFor="prod">Use Prod Data</label>
        {isProdUse && <h1>{prodName}</h1>}
      </div>
    </>
  );
};

export default ProdComp;
