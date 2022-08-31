import React from "react";

function InputElement(props){
  return (
    <div className={ props.className }>
      <label htmlFor={ props.id }>{props.label}</label>
      <input type={props.type} name={ props.id } id={ props.id }/>
    </div>
  );
}


function InputCheckbox(props){
    return ( <InputElement type="checkbox" className={props.className} id={props.id} label={props.label} />);
}

function InputText(props){
    return ( <InputElement type="text" className={props.className} id={props.id} label={props.label} />);
}

function InputRadioButton(props) {
  return (
    <div className={props.className}>
      <input type="radio" key={props.id} name={props.id} id={props.id} value={props.value} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={ props.id }>{props.label}</label>
    </div>
  );
}




export {InputElement, InputCheckbox, InputText, InputRadioButton};
