import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  constructor(props) {
    super(props);
  }

  renderBreadBottom = () => {
    return <div className={ classes.BreadBottom }></div>;
  }

  renderBreadTop = () => {
    return (
      <div className={ classes.BreadTop }>
        <div className={ classes.Seeds1 }></div>
        <div className={ classes.Seeds2 }></div>
      </div>
    );
  }

  renderMeat = () => {
    return <div className={ classes.Meat }></div>;
  }

  renderCheese = () => {
    return <div className={ classes.Cheese }></div>;
  }

  renderSalad = () => {
    return <div className={ classes.Salad }></div>;
  }

  renderBacon = () => {
    return <div className={ classes.Bacon }></div>;
  }

  render() {
    switch (this.props.type) {
      case 'bread-bottom':
        return this.renderBreadBottom();
      case 'bread-top':
        return this.renderBreadTop();
      case 'meat':
        return this.renderMeat();
      case 'cheese':
        return this.renderCheese();
      case 'salad':
        return this.renderSalad();
      case 'bacon':
        return this.renderBacon();
      default:
        return null;
    }
  }
}

export default BurgerIngredient;
