import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 0,

        },
        price: 0,
    }

    componentDidMount() {
        console.log("Inside Checkout");
        console.log(this.props.location.search);
            const urlParams = new URLSearchParams(this.props.location.search);
            const ingredients = {};
            for(let param of urlParams.entries())
            {   
                if(param[0] === 'price') 
                {
                            this.setState({price: param[1]});
                            continue;
                }
                ingredients[param[0]] = +param[1];
                
            }
            
            this.setState({ingredients: ingredients});
        
    }
    
        checkoutCancelledHandler = () => {
            this.props.history.goBack();
        }

        checkoutContinuedHandler = () => {
            this.props.history.replace('/checkout/contact-data')
        }
    render(){
        
        return (
        <div>
            <CheckoutSummary
             ingredients={this.state.ingredients} 
             checkoutCancelled={this.checkoutCancelledHandler} 
             checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                path={this.props.match.path + '/contact-data'}
                render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>}></Route>
        </div>);
    }
}

export default Checkout;
