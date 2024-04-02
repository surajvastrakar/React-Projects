const Input = ({
  label,
  className = "",
  inputType = "text",
  containerClass = "",
  ...rest
}) => {
  return (
    <div className={`mb-4 text-white ${containerClass}`}>
      {label && (
        <label htmlFor={label} className="block mb-2">
          {label}
        </label>
      )}
      <input
        name={label}
        type={inputType}
        className={`block w-full ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
