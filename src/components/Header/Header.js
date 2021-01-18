import React from 'react';

import classes from './Header.module.scss';

const header = () => (
    <div className = { classes.Header }>
        <div className = { classes.Contact }>
            <a className = { classes.Phone } href = 'tel:07773 555 120'> </a>            
            <a className = { classes.Text } href = 'tel:07773 555 120'>07773 555 120</a>
            
            <a className = { classes.Email } href = 'mailto:k.shergill@mail.com'> </a>
            <a className = { classes.Text } href = 'mailto:k.shergill@mail.com'>shergilldesign@yahoo.com</a>
        </div>

        
        <div className = { classes.Social }>
            <div className = { classes.Square } />
            
            <a className = { classes.Facebook } href = 'https://www.facebook.com/Shergill-Design-104287344670159' target = '_blank' rel = 'noopener noreferrer'> </a>
            <div className = { classes.Line } />
            <a className = { classes.Twitter } href = 'https://twitter.com/shergilldesign' target = '_blank' rel = 'noopener noreferrer'> </a>
        </div>
    </div>
);

export default header;
