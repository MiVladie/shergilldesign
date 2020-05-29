import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Promotion.module.css';

import template_02 from '../../assets/images/template_02.jpg';

const promotion = ({ hide }) => {
    const hideHandler = () => {
        document.body.style.position = 'static';
        hide();
    }

    return (
    	<div className = { classes.Promotion }>
            <div className = { classes.Module } />

            <div className = { classes.Deal }>
                <div className = { classes.Main }>
                    <img src = { template_02 } alt = 'Architect services' />
                    <div className = { classes.Hidden } />
                    <h1 className = { classes.Name }>Architectural<br />Drawings</h1>
                    <h2 className = { classes.Meta }>New deal</h2>
                </div>

                <div className = { classes.Price }>
                    <h2 className = { classes.Meta }>Starting From</h2>
                    <h1 className = { classes.Number }>£299</h1>
                </div>

                <div className = { classes.Options }>
                    <Link className = { classes.Request } to = '/contact' onClick = { hideHandler }>Request</Link>
                    <button className = { classes.Hide } onClick = { hideHandler }>View later</button>
                </div>
            </div>
    	</div>
    );
}

export default promotion;
