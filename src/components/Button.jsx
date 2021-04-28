function Button(props) {
  return (
    <button
      onClick={props.onClickHandler}
      className={`button ${props.className}`}
    >
      {props.buttonName}
    </button>
  );
}

export default Button;
