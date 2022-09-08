import React from "react";

const InputElement = React.forwardRef((props, ref) => (
    <div className={ props.className }>
        <label htmlFor={ props.id }>{props.label}</label>
        <input ref={ref} type={ props.type } name={ props.id } id={ props.id }/>
        {props.children}
    </div>
));


const InputCheckbox = React.forwardRef((props, ref) => (
    <div className={ props.className }>
        <input ref={ref} type="checkbox" name={ props.id } id={ props.id }/>
        <label htmlFor={ props.id }>{props.label}</label>
        {props.children}
    </div>
));

const InputText = React.forwardRef((props, ref) => (
    <div className={ props.className }>
        <label htmlFor={ props.id }>{props.label}</label>
        <input ref={ref} type="text" name={ props.id } id={ props.id }/>
        {props.children}
    </div>
));

const InputRadioButton = React.forwardRef((props, ref) => (
    <div className={props.className}>
      <input type="radio" key={props.id} name={props.id} id={props.id} value={props.value} checked={props.checked}
             aria-labelledby={props.id + "_label"}
             onChange={props.onChange}/>
      <label id={props.id + "_label"}  htmlFor={ props.id }
      >{props.label}</label>
        {props.children}
    </div>
));

export {InputElement, InputCheckbox, InputText, InputRadioButton};
