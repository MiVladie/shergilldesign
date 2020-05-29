import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Step.module.css';

const step = ({ meta, main, description, image, linkTo, linkText, reversed }) => {
    return (
        <section className = { classes.Step } style = {{ flexDirection: reversed && 'row-reverse' }}>
            <div className = { classes.Text }>
                <p className = { classes.Meta }>{ meta }</p>
                <h2 className = { classes.Main }>{ main }</h2>
                <div className = { classes.Line } />
                <p className = { classes.Description }>{ description }</p>
                { linkTo && <Link className = { classes.Link } to = { linkTo }>{ linkText }</Link> }
            </div>

            <div className = { classes.Images } style = {{ left: reversed && 0, right: !reversed && 0 }}>
                <img className = { classes.Image } src = { image } alt = 'Architectural services' />
            </div>
    	</section>
    );
}

export default step;
