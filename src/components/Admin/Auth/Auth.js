import React, { useState } from 'react';

import { API_URL } from '../../../config/constants';

import Introduction from '../../Introduction/Introduction';
import Form from '../../Form/Form';

import axios from 'axios';

const Auth = ({ login }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const onLoginHandler = async (credentials) => {
		setLoading(true);

		try {
			const { data } = await axios.post(API_URL + '/admin/shergilldesign', { credentials });

			localStorage.setItem('token', data.token);
			localStorage.setItem('expirationDate', data.expirationDate);

			setLoading(false);
			setError(null);

			login();
		} catch (error) {
			let errorMessage = error.response?.data?.message || 'Oops, something went wrong!';

			setError(errorMessage);
			setLoading(false);
		}
	};

	return (
		<React.Fragment>
			<Introduction meta='Restricted access' main='Wow..this page is restriced!' />

			<div style={{ width: '90%', maxWidth: '500px', margin: '4em auto' }}>
				<Form
					data={[
						{ name: 'email', placeholder: 'Your email', type: 'email', required: true },
						{ name: 'password', placeholder: 'Your password', type: 'password', required: true }
					]}
					button='Sign in'
					centered
					onSubmit={onLoginHandler}
					response={error}
					loading={loading}
				/>
			</div>
		</React.Fragment>
	);
};

export default Auth;
