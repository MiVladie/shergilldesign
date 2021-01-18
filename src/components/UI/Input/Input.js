import React from 'react';

import classes from './Input.module.scss';

const input = ({ type, placeholder, value, required, onChange }) => {
    let element;

    switch (type) {        
        case 'textarea': 
            element = 
                <textarea
                    className = { classes.Textarea }
                    placeholder = { placeholder + (required ? '*' : '') }
                    value = { value }
                    onChange = { (event) => onChange(event.target.value) } />
            break;

        default:
            element = 
                <input
                    className = { classes.Input }
                    type = { type }
                    placeholder = { placeholder + (required ? '*' : '') }
                    value = { value }
                    onChange = { (event) => onChange(event.target.value) } />
            break;
    }


    return element
};

export default input;
