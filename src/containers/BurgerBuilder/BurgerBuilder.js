import React, { Component } from 'react';
import Auxiliary from '../../components/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../components/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1.0,
    cheese: 0.2,
    bacon: 0.8
}


class BurgerBuilder extends Component{
  
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount(){
        axios.get('https://reactburger-779e0.firebaseio.com/ingredients.json')
        .then(
            response => {
                this.setState({ingredients: response.data});
            }
        )
        .catch(error => {
            this.setState({error: true});

        });

    }

    updatePurchasableState(ingredients) {
        // const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce( ( sum, i ) => {
            return sum + i;
        } ,0);
        this.setState({
            purchasable: sum > 0
        });

    }
    addIngredientHandler = (type) => {
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
        this.updatePurchasableState(updatedIngredient);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        if(updatedCount < 0)
        return;
        const updatedIngredient = {
            ...this.state.ingredients 
        };
        updatedIngredient[type] = updatedCount;
        this.setState(
            {ingredients : updatedIngredient}
        );
        const priceAdd= INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAdd;
        this.setState({totalPrice:newPrice});
        this.updatePurchasableState(updatedIngredient);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {

        const queryParams = [];
        for (let i in this.state.ingredients) {
           queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?'+queryString
        
        });

        // alert('continue');
        // this.setState({loading:true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Ankit',
        //         address: {
        //             street: 'test st',
        //             city: 'Dublin'
        //         },
        //         email: 'fictionalData@123.com',
        //       },
        //       deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json',order).then(

        //     response => {
        //         this.setState({loading: false});
        //         this.setState({purchasing: false});
        //         console.log(response);
        // }
        // ).catch(
        //     error => {
        //         this.setState({loading: false});
        //         this.setState({purchasing: false});
        //         console.log(error);
        //     }
        // );



    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] =  disabledInfo[key] <= 0 ;
                
            }
         let orderSummary = null;

        if(this.state.loading) {    
            orderSummary = <Spinner></Spinner>
        }

        let burger = <Spinner></Spinner>;

        if(this.state.ingredients)
        {
            
         burger = (
            <Auxiliary>
        <Burger ingredients = {this.state.ingredients} ></Burger>
            <BuildControls
            ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredientHandler}
            disabled = {disabledInfo}
            price = {this.state.totalPrice}
            purchasable = {this.state.purchasable}
            order = {this.purchaseHandler}
            />
              </Auxiliary>
            );

            orderSummary =  <OrderSummary 
            ingredients = {this.state.ingredients}
            purchaseCancel = {this.purchaseCancelHandler}
            purchaseContinued = {this.purchaseContinueHandler}    
            price = {this.state.totalPrice}          
           />;

        }


        return (
            
      <Auxiliary>   
          <Modal
                show = {this.state.purchasing}
                modalClosed = {this.purchaseCancelHandler}
            >
            {orderSummary}
          </Modal>     
          {burger}
      
          
      </Auxiliary>
        );

    }
}
export default WithErrorHandler(BurgerBuilder,axios);