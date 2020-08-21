import React, { Component } from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const controls = [
      { label: 'Meat', type: 'meat' },
      { label: 'Cheese', type: 'cheese' },
      { label: 'Salad', type: 'salad' },
      { label: 'Bacon', type: 'bacon' },
    ];

    const renderedControls = controls.map(control => <BuildControl label={control.label} key={control.label} />);

    return (
      <div className={classes.BuildControls}>
        {renderedControls}
      </div>
    );
  }
}

export default BuildControls;
