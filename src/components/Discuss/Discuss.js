import React from 'react';

import { Link } from 'react-router-dom';

import Animation from '../../hoc/Animation/Animation';
import classes from './Discuss.module.scss';

const discuss = ({ meta, main, linkTo, linkText }) => {
    return (
        <section className = { classes.Discuss }>
            <Animation style = {{ width: '100%' }}><h2 className = { classes.Meta }>{ meta }</h2></Animation>
            <Animation style = {{ width: '100%' }}><p className = { classes.Main }>{ main }</p></Animation>
            <Animation style = {{ width: '100%' }}><Link className = { classes.Link } to = { linkTo }>{ linkText }</Link></Animation>
        </section>
    );
}

export default discuss;
