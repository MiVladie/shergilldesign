import React, { useState, useEffect } from 'react';

import Banner from '../../components/Banner/Banner';
import Auth from '../../components/Admin/Auth/Auth';
import Inbox from '../../components/Admin/Inbox/Inbox';

import bannerImage from '../../assets/images/template_02.jpg';

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        checkingLogin();
    });
  
    const checkingLogin = () => {        
        let token = localStorage.getItem('token');
        let expirationDate = localStorage.getItem('expirationDate');

        if(!token || !expirationDate) {
            return setLoggedIn(false);
        }

        if(expirationDate < new Date()) {
            return setLoggedIn(false);
        }

        if(!loggedIn) {
            return setLoggedIn(true);
        }
    }
    
    return (
        <React.Fragment>            
            <Banner 
                meta = 'Restricted' 
                main = 'Admin page' 
                description = 'This page is for the administator only.'
                background = { bannerImage } />

            { loggedIn ? <Inbox /> : <Auth login = { checkingLogin } /> }

            <div style = {{ paddingBottom: '2em' }} />
        </React.Fragment>
    );}

export default Admin;
