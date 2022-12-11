import React, { useState, useEffect } from 'react';

import { API_URL } from '../../../config/constants';

import Introduction from '../../Introduction/Introduction';
import Preview from './Preview/Preview';
import Message from './Message/Message';
import Spinner from '../../UI/Spinner/Spinner';

import axios from 'axios';

const Inbox = () => {
	const [expandKey, setExpandKey] = useState();
	const [messages, setMessages] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMessages();
	}, []);

	const fetchMessages = async () => {
		setLoading(true);

		try {
			let token = localStorage.getItem('token');

			const { data } = await axios.get(API_URL + '/admin/shergilldesign/messages', {
				headers: { Authorization: 'Bearer ' + token }
			});

			setMessages(data.messages);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	const expandCollapseHandler = async (key) => {
		setExpandKey(key);
	};

	const removeKeyHandler = async (key) => {
		setLoading(true);

		try {
			let token = localStorage.getItem('token');

			await axios.delete(API_URL + '/admin/shergilldesign/messages/' + key, {
				headers: { Authorization: 'Bearer ' + token }
			});

			setExpandKey(null);
			fetchMessages();
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<React.Fragment>
			<Introduction main='Incoming messages' />

			{loading ? (
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<Spinner />
				</div>
			) : !expandKey ? (
				<Preview messages={messages} expand={expandCollapseHandler} />
			) : (
				<Message
					message={messages[expandKey]}
					back={() => expandCollapseHandler(null)}
					remove={() => removeKeyHandler(expandKey)}
				/>
			)}
		</React.Fragment>
	);
};

export default Inbox;
