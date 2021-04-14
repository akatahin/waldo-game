function Button(props){
  return (
    <button class={`button ${props.className}`}>{props.buttonName}</button>
  );
}

export default Button;