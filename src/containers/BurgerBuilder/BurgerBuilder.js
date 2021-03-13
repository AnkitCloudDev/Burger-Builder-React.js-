import React, { Component } from 'react'
import Auxiliary from '../../components/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1.0,
    cheese: 0.2,
    bacon: 0.8
}
class BurgerBuilder extends Component{
  
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 0
    };
addIngredientHandler = (type) =>{
    console.log("Type is "+type);
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
        ...this.state.ingredients 
    };
    updatedIngredient[type] = updatedCount;
    this.setState(
        {ingredients : updatedIngredient}
    );
    const priceAdd= INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({totalPrice:newPrice});

}

removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
        ...this.state.ingredients 
    };
    updatedIngredient[type] = updatedCount;
    this.setState(
        {ingredients : updatedIngredient}
    );
    const priceAdd= INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({totalPrice:newPrice});
}
    render(){
        return (
      <Auxiliary>        
          <Burger ingredients = {this.state.ingredients} ></Burger>
          <BuildControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          />
      </Auxiliary>
        );

    }
}
export default BurgerBuilder;