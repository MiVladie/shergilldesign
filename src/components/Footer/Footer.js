import React from 'react';

import marker from '../../assets/icons/address.png';
import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/email.png';

import classes from './Footer.module.scss';

const footer = () => {
    return (
    	<footer className = { classes.Footer }>
            <div className = { classes.Main }>
                <div className = { classes.About }>
                    <h1 className = { classes.Name }>About us</h1>
                    <div className = { classes.Line } />
                    <p className = { classes.Description }>We have been investing in buy-to-let properties over 20 years if you are interested in buy-to-let investment! We have our team of builders to carry out on any projects.</p>
                </div>

                <div className = { classes.Links }>
                    <h1 className = { classes.Name }>Links</h1>
                    <div className = { classes.Line } />
                    <ul className = { classes.Pages }>
                        <li className = { classes.Page }><a href = '/#about'>About</a></li>
                        <li className = { classes.Page }><a href = '/#services'>Services</a></li>
                        <li className = { classes.Page }><a href = '/#contact'>Contact</a></li>
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
