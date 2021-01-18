import React, { useState } from 'react';
import axios from 'axios';

import Introduction from '../../Introduction/Introduction';
import Form from '../../Form/Form';
import { backendDomain } from '../../../config/constants';

const Auth = ({ login }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();  

    const onLoginHandler = (values) => {
        setLoading(true);

        let url = backendDomain + 'admin/shergilldesign';
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
                let errorMessage = err.response && err.response.data.message;
                console.log(errorMessage);

                setError(errorMessage);
            });
    }

    return (
    	<React.Fragment>
            <Introduction
                meta = 'Restricted access'
                main = 'Wow..this page is restriced!' />

            <div style = {{ width: '90%', maxWidth: '500px', margin: '4em auto' }}>
                <Form
                    data = {[
                        { name: 'email', placeholder: 'Your email', type: 'email', required: true },
                        { name: 'password', placeholder: 'Your password', type: 'password', required: true }
                    ]}
                    button = 'Sign in' centered
                    onSubmit = { onLoginHandler }
                    response = { error }
                    loading = { loading } />
            </div>                
        </React.Fragment>
    );
}

export default Auth;
