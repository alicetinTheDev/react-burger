import React, { Component } from "react";

import Wrapper from "../../hoc/Wrapper";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    curly: 0.5,
    tomato: 0.7,
    cheese: 0.7,  
    meat: 1.3      
}

class BurgerBuilder extends Component {

  state = {
        ingredients: {
            curly: 0,
            tomato: 0,
            cheese: 0,
            meat: 0            
        },
        totalPrice: 4,
        purchasable: false
  }

  // call this every add and remove
  updatePurchaseState() {
    const ingredients = {
      ...this.state.ingredients
    };
    const sum = Object.keys(ingredients)
        .map(ingKey => {
            return ingredients[ingKey];
        })
        // if total sum greater than init
        .reduce((sum, e) => {
            return sum + e;
        }, 0);
        this.setState({purchasable: sum > 0})
  };

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //      ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  // }

  // More effective and clean way to do the same thing
  addIngredientHandler = (type) => {
    let {ingredients, totalPrice} = this.state;
    ingredients[type] += 1;
    totalPrice += INGREDIENT_PRICES[type];
    this.setState({ingredients, totalPrice});
    this.updatePurchaseState();
  }; 

  removeIngredientHandler = (type) => {
    let {ingredients, totalPrice} = this.state;
    const ingredientCount = ingredients[type];
    if(ingredientCount > 0) {
     ingredients[type] -= 1;
     totalPrice -= INGREDIENT_PRICES[type];
    }
    this.setState({ingredients, totalPrice});
    this.updatePurchaseState();
  }; 

  render() {
    const disabledInfo = {
        ...this.state.ingredients
    };

    for(let key in disabledInfo){
        // is it reduceable ?
        disabledInfo[key] = disabledInfo[key] <= 0
    };

    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
            ingredientAdded={this.addIngredientHandler} 
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable} />            
      </Wrapper>
    );
  }
}

export default BurgerBuilder;





