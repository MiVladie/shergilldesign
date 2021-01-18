import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Bio.module.scss';

const bio = ({ meta, main, description, phone, email, image }) => {
    return (
    	<div className = { classes.Bio }>
            <Animation>
                <div className = { classes.Picture }>
                    <img src = { image } alt = 'Architect Designer' />
                </div>
            </Animation>

            <div className = { classes.Text }>
                <Animation>
                    <h2 className = { classes.Meta }>{ meta }</h2>
                    <h1 className = { classes.Main }>{ main }</h1>
                    <div className = { classes.Line } />
                </Animation>

                <Animation style = {{ width: '100%' }}>
                    <p className = { classes.Description }>{ description }</p>
                    <a className = { classes.Contact } href = { 'tel:' + phone }>Tel: { phone }</a>
                    <a className = { classes.Contact } href = { 'mailto:' + email }>Email: { email }</a>
                </Animation>
            </div>
    	</div>
    );
}

export default bio;
