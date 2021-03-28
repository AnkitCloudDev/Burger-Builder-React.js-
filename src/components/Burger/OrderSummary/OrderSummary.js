import React from 'react';
import Auxiliary from '../../Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        key => {
        return   <li key = {key}> 
            <span style = {{textTransform: 'capitalize'}}> {key} 
            </span>: {props.ingredients[key]} 
            </li>
        }
    );
    
    return (
        <Auxiliary>

            <p> Your Order: </p>
            <p> A Delicious burger with the following ingredients: </p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Continue to Checkout ? </p>
            <Button clicked = {props.purchaseCancel} btnType = "Danger" > CANCEL </Button>
            <Button clicked = {props.purchaseContinued} btnType = "Success" > CONTINUE </Button>
        </Auxiliary>
    )
};

export default orderSummary;
