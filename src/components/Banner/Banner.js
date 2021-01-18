import React from 'react';

import classes from './Banner.module.scss';

const banner = ({ image, meta, main, description, linkTo, linkText, scrollTo }) => {
    const scrollHandler = () => {
        document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
    	<section className = { classes.Banner }>
    		<div className = { classes.Background }>
                <img src = { image } alt = 'Architecture Design' />
            </div>

            <div className = { classes.Promo }>
                <h2 className = { classes.Meta }>{ meta }</h2>
                <h1 className = { classes.Main }>{ main }</h1>
                <p className = { classes.Description }>{ description }</p>
            </div>

            <div className = { classes.Extra }>
                { scrollTo && <button className = { classes.Scroll } onClick = { scrollHandler }><div className = { classes.Arrow } /></button> }
                { linkText && <a className = { classes.Request } href = { '#' + linkTo }>{ linkText }</a> }
            </div>
    	</section>
    );
}

export default banner;
