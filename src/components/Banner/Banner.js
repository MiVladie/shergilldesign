import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Banner.module.css';

const banner = ({ meta, main, description, background, hideScroll }) => {
    return (
    	<section className = { classes.Banner }>
    		<div className = { classes.Background }>
                <img src = { background } alt = 'Architecture Design' />
            </div>

            <div className = { classes.Promo }>
                <h2 className = { classes.Meta }>{ meta }</h2>
                <h1 className = { classes.Main }>{ main }</h1>
                <p className = { classes.Description }>{ description }</p>
            </div>

            <div className = { classes.Extra }>
                { !hideScroll && <button className = { classes.Scroll } onClick = { () => document.getElementById('intro').scrollIntoView({ behavior: 'smooth' }) }></button> }
                <Link className = { classes.Request } to = '/contact'>Request a quote</Link>
            </div>
    	</section>
    );
}

export default banner;
