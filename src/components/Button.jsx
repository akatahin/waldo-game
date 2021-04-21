function Button(props){
  return (
    <button onClick={props.onClickHandler} class={`button ${props.className}`}>
      {props.buttonName}
    </button>
  );
}

export default Button;