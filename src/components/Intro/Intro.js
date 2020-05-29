import React from 'react';

import classes from './Intro.module.css';

const intro = ({ meta, main, description }) => {
    return (
    	<div className = { classes.Intro } id = 'intro'>
    		<h2 className = { classes.Meta }>{ meta }</h2>
            <h1 className = { classes.Main }>{ main }</h1>
            <div className = { classes.Line } />
            { description && <p className = { classes.Description }>{ description }</p> }
    	</div>
    );
}

export default intro;
