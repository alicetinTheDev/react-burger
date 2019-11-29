import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Wrapper>
    <Toolbar/>
    <Sidedrawer/>
    <main className={classes.Content}>
        {props.children}
    </main>
  </Wrapper>
);

export default layout;
