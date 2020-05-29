import React, { useState } from 'react';
import axios from 'axios';

import Intro from '../../Intro/Intro';
import Form from '../../Form/Form';
import Spinner from '../../UI/Spinner/Spinner';

const Auth = ({ login }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const onLoginHandler = (values) => {
        setLoading(true);

        let url = 'https://access-server.herokuapp.com/admin/shergilldesign';
        let credentials = { credentials: values };

        axios.post(url, credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', response.data.expirationDate);
                
                setLoading(false);
                setError(null);
                
                login();
            })
            .catch(err => {
                setLoading(false);
                let errorMessage = err.response.data.message;

                setError(errorMessage);
            });
    }

    return (
    	<React.Fragment>
            <Intro main = 'Wow..this page is restriced!' />

            { loading 
                ? <div style = {{ width: '100%', display: 'flex', justifyContent: 'center' }}><Spinner /></div> 
                : <Form 
                    data = {[
                        { 
                            title: 'email', 
                            fields: [
                                { name: 'email', type: 'email', placeholder: 'Enter email', required: true }] 
                        },
                        {
                            title: 'password', 
                            fields: [
                                { name: 'password', type: 'password', placeholder: 'Enter password', required: true }
                            ]
                        }]
                    }
                    submit = { { name: 'login', onSubmit: onLoginHandler } }
                    error = { error } />
            }
                
            <div style = {{ paddingTop: '5em' }} />
        </React.Fragment>
    );
}

export default Auth;
