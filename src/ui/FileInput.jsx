function FileInput({ id, accept, ...rest }) {
  return (
    <input
      type="file"
      id={id}
      accept={accept}
      className="file-input"
      {...rest}
    />
  );
}

export default FileInput;
