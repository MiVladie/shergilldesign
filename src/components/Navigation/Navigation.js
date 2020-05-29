import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.png';

import classes from './Navigation.module.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if(expand && window.screen.width >= 1025)
            setExpand(false);

        if(!expand) document.body.style.overflow = 'visible';
        else document.body.style.overflow = 'hidden';
    }, [expand]);

    const expandMenuHandler = (event) => {
        event.preventDefault();

        setExpand(!expand);
    }
    
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 75);  
    });

    return (
    	<nav className = { [classes.Navigation, scrolled ? classes.Scrolled : '', expand ? classes.Expand : ''].join(' ') }>

            <Link className = { classes.Brand } to = '/' onClick = { () => setExpand(false) }>
                <img className = { classes.Logo } src = { logo } alt = 'Shergill Design' />
            </Link>

            <button className = { classes.Menu } onClick = { (event) => expandMenuHandler(event) } />

            <ul className = { classes.Links }>
                <li className = { classes.Link }>
                    <Link className = { classes.Text } to = '/about' onClick = { () => setExpand(!expand) }>About</Link>
                </li>
                
                <li className = { classes.Link }>
                    <Link className = { classes.Text } to = '/process' onClick = { () => setExpand(!expand) }>Process</Link>
                </li>

                <li className = { classes.Link }>
                    <Link className = { classes.Text } to = '/services' onClick = { () => setExpand(!expand) }>Services</Link>
                </li>                
                
                <li className = { classes.Link }>
                    <Link className = { classes.Text } to = '/contact' onClick = { () => setExpand(!expand) }>Contact</Link>
                </li>
            </ul>
    	</nav>
    );
}

export default Navigation;
