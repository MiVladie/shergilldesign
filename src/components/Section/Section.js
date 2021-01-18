import React from 'react';

import classes from './Section.module.scss';

const section = ({ children, id, color }) => (
    <section className = { classes.Section } style = {{ backgroundColor: color }} id = { id }>
        { children }
    </section>
);

export default section;
