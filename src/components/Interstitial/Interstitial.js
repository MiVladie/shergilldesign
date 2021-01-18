import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Interstitial.module.scss';

const interstitial = ({ image, meta, main, description, linkTo, linkText, newTab }) => (
    <div className = { classes.Interstitial }>
        <div className = { classes.Image } style = {{ backgroundImage: 'url(' + image + ')' }} />
            
        <div className = { classes.Wrapper }>
            <Animation style = {{ margin: 0 , width: '100%'}}>
                { meta && <h2 className = { classes.Meta }>{ meta }</h2> }
                <h1 className = { classes.Main }>{ main }</h1>
                { meta && <div className = { classes.Line } /> }
            </Animation>
            
            <Animation style = {{ margin: 0 , width: '100%'}}>
                <p className = { classes.Description }>{ description }</p>
            </Animation>
        </div>

        { linkText && <Animation><a className = { classes.Link } href = { linkTo } target = { newTab && '_blank' }>{ linkText }</a></Animation> }
    </div>
);

export default interstitial;
