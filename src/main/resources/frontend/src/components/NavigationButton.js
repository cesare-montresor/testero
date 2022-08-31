export function NavigationButton(props){
  return(
    <button name={props.id} id={props.id} className={props.className} onClick={props.onClick}><label htmlFor={props.id}>{props.label}</label></button>
  );
}
