
export function InputFields(props){
  return (
    <div className={ props.className }>
      <label htmlFor={ props.id }>{props.label}</label>
      <input type={props.type} name={ props.id } id={ props.id }/>
    </div>
  );
}

export function InputText(props){
  return (
    <div className={ props.className }>
      <label htmlFor={ props.id }>{props.label}</label>
      <input type={props.type} name={ props.id } id={ props.id }/>
    </div>
  );
}

export function InputRadioButton(props) {
  return (
    <div className={props.className}>
      <input type="radio" key={props.id} name={props.id} id={props.id} value={props.value} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={ props.id }>{props.label}</label>
    </div>
  );
}
