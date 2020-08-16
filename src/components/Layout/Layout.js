import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

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
        <main>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
