import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

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
        <BuildControls />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
