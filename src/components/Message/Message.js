import React, { useState } from 'react';

import Form from '../Form/Form';

import axios from 'axios';
import { backendDomain } from '../../config/constants';

import Animation from '../../hoc/Animation/Animation';
import classes from './Message.module.scss';

const Contact = ({ id, image, main, description }) => {
    const [response, setResponse] = useState({ message: {}, result: null, loading: false });   

    const sendMessageHandler = (message) => {
        setResponse({ message: message, result: null, loading: true });

        axios.post(backendDomain + 'message/shergilldesign', { message: message })
            .then(response => {
                setResponse({ message: null, result: 'Your message has been delivered.', loading: false });                
            })
            .catch(error => {
                setResponse({ ...response, result: 'Something went wrong! Please, try again.', loading: false });
            });
    };
    
    return (
        <div className = { classes.Message } id = { id }>
            <img className = { classes.Image } src = { image } alt = 'Architectural services' />

            <div className = { classes.Content }>
                <div className = { classes.Wrapper }>
                    <Animation style = {{ margin: 0, width: '100%' }}>
                        <h1 className = { classes.Main }>{ main }</h1>
                        <div className = { classes.Line } />
                    </Animation>

                    <Animation style = {{ margin: 0, width: '100%' }}>
                        <p className = { classes.Description }>{ description }</p>
                    </Animation>

                    <Animation style = {{ margin: 0, width: '100%' }}>
                        <div className = { classes.Form }>
                            <Form
                                data = {[
                                    { name: 'name', placeholder: 'Your name', type: 'text', required: true },
                                    { name: 'email', placeholder: 'Your email', type: 'email', required: true },
                                    { name: 'phone', placeholder: 'Your phone', type: 'tel' },
                                    { name: 'message', placeholder: 'Write message', type: 'textarea', required: true },
                                ]}
                                button = 'Submit'
                                onSubmit = { sendMessageHandler }
                                inputs = { response.message }
                                response = { response.result }
                                loading = { response.loading } />
                        </div>
                    </Animation>
                </div>
            </div>
        </div>
    );
}

export default Contact;
