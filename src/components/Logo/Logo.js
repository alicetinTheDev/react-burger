import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    // We can set style dynamically because of logo component will use in both of
    // sidedrawer and the toolbar with different heights. 
    // But we used different approch for this. Instead of setting the props dynamicly,
    // we used css for <div> sections with the same .Logo component 
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;