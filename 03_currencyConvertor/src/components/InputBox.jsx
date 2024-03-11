import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = {},
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const uniqueId = useId();

  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className="flex-1">
        <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
          className="outline-none w-full bg-transparent py-1.5"
        />
      </div>

      <div className="flex-1 flex flex-wrap justify-end text-right">
        <label className="text-black/40 mb-2 w-full">Currency Type</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
