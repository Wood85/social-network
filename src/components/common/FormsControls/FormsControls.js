import React from "react"
import classes from "./FormsControls.module.css"
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div>
            <div>
                <textarea{...input} {...props} className={classes.formControl + '' + (hasError ? classes.error : '')}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + '' + (hasError ? classes.error : '')}>
            <div>
                <input{...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createFild = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}/>{text}
    </div>)