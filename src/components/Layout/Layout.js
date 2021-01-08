import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDraverClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return(
      <Wrapper>
        <Toolbar />
        <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDraverClosedHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
      </Wrapper>
    )
  }
}

export default Layout;
