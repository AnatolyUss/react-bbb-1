import React, { Component } from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {
  constructor(props) {
    super(props);
  }

  hasNoIngredients = () => {
    return Object.keys(this.props.ingredients).length === 0
      || Object.values(this.props.ingredients).reduce((acc, val) => {
        acc += val;
        return acc;
      }, 0) === 0;
  }

  renderIngredients = () => {
    const ingredients = { ...this.props.ingredients };

    if (this.hasNoIngredients()) {
      return <p>Please, add some ingredients.</p>;
    }

    return Object.keys(ingredients).map((ingredient, index) => {
      const renderedIngredientOfSameType = [];

      for (let i = 0; i < ingredients[ingredient]; ++i) {
        renderedIngredientOfSameType.push(<BurgerIngredient type={ingredient} key={`${index}-${i}`} />);
      }

      return renderedIngredientOfSameType;
    });
  }

  render() {
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type={'bread-top'} />
        {this.renderIngredients()}
        <BurgerIngredient type={'bread-bottom'} />
      </div>
    );
  }
}

export default Burger;
