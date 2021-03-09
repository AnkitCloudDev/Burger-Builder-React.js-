import React, { Component } from 'react'
import Auxiliary from '../../components/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
  
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 3,
        }
    };

    render(){
        return (
      <Auxiliary>        
          <Burger ingredients = {this.state.ingredients} ></Burger>
      </Auxiliary>
        );

    }
}
export default BurgerBuilder;