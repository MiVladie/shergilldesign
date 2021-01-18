import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Cards.module.scss';

const cards = ({ data }) => (
    <ul className = { classes.Cards }>
        { data.map(card =>
            <Animation style = {{ width: 'auto' }} key = { card.name }>
                <li className = { classes.Card }>
                        <img className = { classes.Image } src = { card.image } alt = { card.name } />

                        <div className = { classes.Content }>
                            <div className = { classes.Wrapper }>
                                <h1 className = { classes.Name }>{ card.name }</h1>
                                <div className = { classes.Line } />
                                <p className = { classes.Description }>{ card.description }</p>
                            </div>

                            <a className = { classes.Link } href = { card.linkTo }>{ card.linkText }</a>
                        </div>              
                </li>
            </Animation>) }
    </ul>
);

export default cards;
