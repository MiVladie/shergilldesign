import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Discuss.module.css';

const discuss = ({ meta, main, linkTo, linkText }) => {
    return (
        <section className = { classes.Discuss }>
            <h2 className = { classes.Meta }>{ meta }</h2>
            <p className = { classes.Main }>{ main }</p>
            <Link className = { classes.Button } to = { linkTo }>{ linkText }</Link>
        </section>
    );
}

export default discuss;
