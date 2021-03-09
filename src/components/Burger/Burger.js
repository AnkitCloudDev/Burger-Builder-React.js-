import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let burgerIngredients = Object
    .keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map(( _ , i) => {
           return <BurgerIngredient key ={igKey + i} type = {igKey}/>;
        }).reduce((arr,curr) => { return arr.concat(curr)}, [])});
        
        console.log(burgerIngredients);
    if(burgerIngredients.length === 0){
        burgerIngredients = <p>Please add topping of your choice</p>
    }
    return (
    <div className = {classes.Burger}>
        <BurgerIngredient type="bread-top" ></BurgerIngredient>
        {burgerIngredients}
        <BurgerIngredient type="bread-bottom" ></BurgerIngredient>
    </div>
    );
}

export default burger;