import React, { Component } from 'react';

import classes from './BurgerIngrediant.module.css';
import PropTypes from 'prop-types';

class BurgerIngrediant extends Component {    
    render() {
    let ingredient = null;
    
    switch(this.props.type) {
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>                
            );
            break;
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;        
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('tomato'):
            ingredient = <div className={classes.Tomato}></div>;
            break;
        case ('curly'):
            ingredient = <div className={classes.Curly}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;        
    }
}

BurgerIngrediant.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngrediant;