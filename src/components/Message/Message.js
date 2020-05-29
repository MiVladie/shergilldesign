import React from 'react';

import classes from './Message.module.css';

import Form from './Form/Form';

const Message = ({ image }) => {
    return (
            <div className = { classes.Message }>
                <div className = { classes.Image }>                    			
                    <img src = { image } alt = 'Architectural services' />
                </div>

                <div className = { classes.Container }>
                    <div className = { classes.Wrapper }>
                        <h1 className = { classes.Main }>Get in touch</h1>
                        <div className = { classes.Line } />
                        <p className = { classes.Description }>Have any questions? Feel free to use contact form below to get in touch with us. We will answer you as soon as possible!</p>

                        <Form />
                    </div>
                </div>
            </div>
    );
}

export default Message;
