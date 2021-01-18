import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Introduction.module.scss';

const introduction = ({ meta, main, description }) => {
    description = description && ("" + description).split('\n').flatMap((value, index, array) =>
            array.length - 1 !== index
                ? [value, <React.Fragment><br/><br/></React.Fragment>]
                : value,
    );

    return (
        <div className = { classes.Introduction }>
            <div className = { classes.Wrapper }>
                <Animation style = {{ width: '100%' }}>
                    { meta && <h2 className = { classes.Meta }>{ meta }</h2> }
                    <h1 className = { classes.Main }>{ main }</h1>
                    <div className = { classes.Line } />
                </Animation>

                <Animation style = {{ width: '100%' }}>
                    { description && <p className = { classes.Description }>{ description }</p> }
                </Animation>
            </div>
        </div>
    )
};

export default introduction;
