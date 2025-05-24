function Input({ type, id, defaultValue, ...rest }) {
  return (
    <input
      defaultValue={defaultValue || ""}
      id={id}
      type={type}
      className="rounded-sm border border-gray-300 bg-white px-3 py-2 shadow-sm"
      {...rest}
    />
  );
}

export default Input;
