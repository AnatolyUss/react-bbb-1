import React, { Component } from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ classes.Burger }>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}

export default Burger;
