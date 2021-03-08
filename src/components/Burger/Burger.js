import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const burgerIngredients = Object
    .keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map(( _ , i) => {
           return <BurgerIngredient key ={igKey + i} type = {igKey}/>;
        }).reduce((arr,curr) => { return arr.concat(el)}, [])
        );
    } );
    return (
    <div className = {classes.Burger}>
        <BurgerIngredient type = "burger-top" ></BurgerIngredient>
        {burgerIngredients}
        <BurgerIngredient type = "burger-bottom" ></BurgerIngredient>

    </div>
    );
}

export default burger;