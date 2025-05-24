function Form({ type = "default", children, onSubmit }) {
  const style = {
    default:
      "overflow-hidden text-sm py-6 px-10 bg-white border border-gray-200 rounded-md",
    modal: "overflow-hidden text-sm w-[800px]",
  };
  return (
    <form onSubmit={onSubmit} className={style[type]}>
      {children}
    </form>
  );
}

export default Form;
