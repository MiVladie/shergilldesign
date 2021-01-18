import React, { useState, useEffect } from 'react';

import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';

import { isFormValid } from '../../util/formValidation';

import classes from './Form.module.scss';

const Form = ({ data, centered, button, onSubmit, inputs, response, loading }) => {
    const [values, setValues] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        setValues(inputs);
        setResult(response);
    }, [inputs, response]);

    const submitHandler = () => {
        let err = isFormValid(data, values);

        if(err == null) {            
            values.time = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes();
            
            for(let input in values) 
                values[input] = values[input] === '' ? null : values[input];

            onSubmit(values);
        } else {
            setResult(err);
        }
    };

    return (
        <div className = { classes.Form }>
            { loading && <div className = { classes.Modal }><Spinner /></div> }

            <form className = { classes.Area }>
                { data.map(input =>
                    <Input
                        type = { input.type }
                        placeholder = { input.placeholder }
                        required = { input.required }
                        value = { values != null && values[input.name] != null ? values[input.name] : '' }
                        onChange = { (value) => setValues({...values, [input.name]: value }) }
                        key = { input.name } />) }
            </form>

            { result && <p className = { classes.Result }>{ result }</p> }

            <button
                className = { classes.Submit }
                style = { centered && { margin: '0 auto' } }
                onClick = { submitHandler }
                disabled = { loading }>
                { button }
            </button>
        </div>
    )
};

export default Form;
