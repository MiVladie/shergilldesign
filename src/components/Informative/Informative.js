import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Informative.module.scss';

const informative = ({ meta, main, description, image, linkTo, linkText, reversed }) => (
    <div className = { classes.Informative } style = {{ flexDirection: reversed && 'row-reverse' }}>
        <div className = { classes.Content }>
            <div className = { classes.Wrapper }>
                <Animation style = {{ margin: 0, width: '100%' }}>
                    { meta && <h2 className = { classes.Meta }>{ meta }</h2> }
                    <h1 className = { classes.Main }>{ main }</h1>
                    { meta && <div className = { classes.Line } /> }
                </Animation>
                
                <Animation style = {{ margin: 0, width: '100%' }}>
                    <p className = { classes.Description }>{ description }</p>
                </Animation>
            </div>
            
            { linkTo && <Animation style = {{ margin: 0, width: 'auto' }}><a className = { classes.Link } href = { linkTo }>{ linkText }</a></Animation> }
        </div>
        
        <img className = { classes.Image } src = { image } alt = { main } style = {{ left: reversed && 0, right: !reversed && 0 }} />    
    </div>
);

export default informative;
