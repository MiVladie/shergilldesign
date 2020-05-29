import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Interstitial.module.css';

const interstitial = ({ image, meta, main, description, linkTo, linkText, newTab }) => (
    <div className = { classes.Interstitial }>
        <div className = { classes.Image } style = {{ backgroundImage: 'url(' + image + ')' }} />
            
        <div className = { classes.Wrapper }>
            { meta && <h2 className = { classes.Meta }>{ meta }</h2> }
            <h1 className = { classes.Main }>{ main }</h1>
            { meta && <div className = { classes.Line } /> }
            <p className = { classes.Description }>{ description }</p>
        </div>

        { linkText && <Link className = { classes.Link } to = { linkTo } target = { newTab && '_blank' }>{ linkText }</Link> }
    </div>
);

export default interstitial;
