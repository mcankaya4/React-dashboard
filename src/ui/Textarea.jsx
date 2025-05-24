function Textarea({ id, defaultValue = "", ...rest }) {
  return (
    <textarea
      id={id}
      defaultValue={defaultValue}
      className="h-20 w-full rounded-sm border border-gray-300 bg-white px-3 py-2 shadow-sm"
      {...rest}
    ></textarea>
  );
}

export default Textarea;
