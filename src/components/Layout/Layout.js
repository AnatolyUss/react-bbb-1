import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Auxiliary>
        <div>
          Toolbar, SideDrawer, Backdrop
        </div>
        <main className={ classes.Content }>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
