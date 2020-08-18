import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../Burger/Burger';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        // salad: 3,
        // meat: 0,
        // cheese: 2,
        // bacon: 0,
      }
    };
  }

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
