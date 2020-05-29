import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Tabs.module.css';

const tabs = ({ data }) => {
    return (
    	<div className = { classes.Tabs }>
            { data.map(tab =>
                <div className = { classes.Tab } key = { tab.name }>
                    <img src = { tab.image } alt = { tab.name } />
                    <h2 className = { classes.Name }>{ tab.name }</h2>
                    <div className = { classes.Line } />
                    <p className = { classes.Description }>{ tab.description }</p>
                    <Link className = { classes.View } to = { tab.linkTo }>{ tab.linkText }</Link>
                </div>) }
    	</div>
    );
}

export default tabs;
