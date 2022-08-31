import React from "react";

const InputElement = React.forwardRef((props, ref) => (
    <div className={ props.className }>
        <label htmlFor={ props.id }>{props.label}</label>
        <input ref={ref} type={props.type} name={ props.id } id={ props.id }/>
        {props.children}
    </div>
));


const InputCheckbox = React.forwardRef((props, ref) => (
    <InputElement type="checkbox" {...props} ref={ref}/>
));

const InputText = React.forwardRef((props, ref) => (
    <InputElement type="text" {...props} ref={ref}/>
));

const InputRadioButton = React.forwardRef((props, ref) => (
    <div className={props.className}>
        <input type="radio" key={props.id} name={props.id} id={props.id} value={props.value} checked={props.checked} onChange={props.onChange} />
        <label htmlFor={ props.id }>{props.label}</label>
        {props.children}
    </div>
));

export {InputElement, InputCheckbox, InputText, InputRadioButton};
