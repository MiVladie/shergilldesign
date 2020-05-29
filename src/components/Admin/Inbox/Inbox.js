import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Intro from '../../Intro/Intro';
import Preview from './Preview/Preview';
import Message from './Message/Message';
import Spinner from '../../UI/Spinner/Spinner';

const Inbox = () => {
    const [expandKey, setExpandKey] = useState();
    const [messages, setMessages] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = () => {
        setLoading(true);

        let url = 'https://access-server.herokuapp.com/admin/shergilldesign/messages';
        let token = localStorage.getItem('token');
        
        axios.get(url, { headers: { Authorization: 'Bearer ' + token } })
          .then(response => {
            setMessages(response.data.messages);
            setLoading(false);
          })
          .catch(error => {
            console.log(error.response);
            setLoading(false);
          })
    }
    
    const expandCollapseHandler = (key) => {
        setExpandKey(key);
    }

    const removeKeyHandler = (key) => {
      setLoading(true);
      
      let url = 'https://access-server.herokuapp.com/admin/shergilldesign/messages/';
      let token = localStorage.getItem('token');
        
      axios.delete(url + key, { headers: { Authorization: 'Bearer ' + token } })
        .then(response => {
          setExpandKey(null);
          fetchMessages();
        })
        .catch(error => {
          console.log(error.response);
          setLoading(false);
        })
    }

    return (
    	<React.Fragment>
        <Intro main = 'Incoming messages' />

        { 
          loading 
            ? <div style = {{ width: '100%', display: 'flex', justifyContent: 'center' }}><Spinner /></div>  
            : !expandKey
              ? <Preview 
                  messages = { messages } 
                  expand = { expandCollapseHandler } />
              : <Message 
                  message = { messages[expandKey] } 
                  back = { () => expandCollapseHandler(null) } 
                  remove = { () => removeKeyHandler(expandKey) } />
        }
        </React.Fragment>
    );
}

export default Inbox;
