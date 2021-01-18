import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.png';

import classes from './Navigation.module.scss';

const Navigation = () => {    
    const [scrolled, setScrolled] = useState(false);

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if(!expand) document.body.style.overflow = 'visible';
        else document.body.style.overflow = 'hidden';
    }, [expand]);

    const expandMenuHandler = (event) => {
        event.preventDefault();

        setExpand(!expand);
    };
    
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 75);  
    });

    return (
    	<nav className = { [classes.Navigation, scrolled ? classes.Scrolled : '', expand ? classes.Expand : ''].join(' ') }>
            <Link className = { classes.Brand } to = '/' onClick = { () => setExpand(false) }>
                <img className = { classes.Logo } src = { logo } alt = 'Shergill Design' />
            </Link>

            <button className = { classes.Menu } onClick = { expandMenuHandler } />

            <ul className = { classes.Links }>
                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '/#about' onClick = { () => setExpand(false) }>About</a>
                </li>

                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '/#services' onClick = { () => setExpand(false) }>Services</a>
                </li>                
                
                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '/#contact' onClick = { () => setExpand(false) }>Contact</a>
                </li>
            </ul>
    	</nav>
    );
}

export default Navigation;
