import React from 'react';

import { Link } from 'react-router-dom';

import marker from '../../assets/icons/address.png';
import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/email.png';

import classes from './Footer.module.css';

const footer = () => {
    return (
    	<footer className = { classes.Footer }>
            <div className = { classes.Main }>
                <div className = { classes.About }>
                    <h1 className = { classes.Name }>About us</h1>
                    <div className = { classes.Line } />
                    <p className = { classes.Description }>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum, Tempora Aliquid Labore Minus. Nemo Maxime, Veniam!</p>
                </div>

                <div className = { classes.Links }>
                    <h1 className = { classes.Name }>Links</h1>
                    <div className = { classes.Line } />
                    <ul className = { classes.Pages }>
                        <li className = { classes.Page }><Link to = '/about'>About</Link></li>
                        <li className = { classes.Page }><Link to = '/process'>Process</Link></li>
                        <li className = { classes.Page }><Link to = '/services'>Services</Link></li>
                        <li className = { classes.Page }><Link to = '/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className = { classes.Question }>
                    <h1 className = { classes.Name }>Have questions?</h1>
                    <div className = { classes.Line } />
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { marker } alt = 'marker' />
                        <p className = { classes.Text }>570 Whitton Ave, Greenford,<br/>London, UB6 0EF</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { phone } alt = 'phone' />
                        <p className = { classes.Text }>07773 555 120</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { mail } alt = 'mail' />
                        <p className = { classes.Text }>shergilldesign@yahoo.com</p>
                    </div>
                </div>
            </div>

            <p className = { classes.Extra }>Copyright Shergill Design &copy;{ new Date().getFullYear() } All rights reserved</p>
            <p className = { classes.Extra }>Website created by <a href = 'https://letscomit.com/' target = '_blank' rel = 'noopener noreferrer'>letscomit</a></p>
        </footer>
    );
}

export default footer;
