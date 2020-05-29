import React from 'react';

import classes from './Bio.module.css';

const bio = ({ meta, main, description, phone, email, image }) => {
    return (
    	<div className = { classes.Bio }>
    		<div className = { classes.Picture }>
                <img src = { image } alt = 'Architect Designer' />
            </div>

            <div className = { classes.Text }>
                <h2 className = { classes.Meta }>{ meta }</h2>
                <h1 className = { classes.Main }>{ main }</h1>
                <div className = { classes.Line } />
                <p className = { classes.Description }>{ description }</p>
                <a className = { classes.Contact } href = { 'tel:' + phone }>Tel: { phone }</a>
                <a className = { classes.Contact } href = { 'mailto:' + email }>Email: { email }</a>
            </div>
    	</div>
    );
}

export default bio;
