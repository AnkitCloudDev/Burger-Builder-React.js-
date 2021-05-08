import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component{
    state = {
        email: '',
        name: '',
        address: {
            street: '',
            postalcode: '',
        },
        loading: false,
        
    
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ankit',
                email: 'nktdongre@gmail.com',
                address: {
                    street: '112A',
                    postalcode: 'D07'
                }
            }
        };
        axios.post('/orders.json',order).then( response => {
        this.setState({loading: false});
        // this.setState({purchasing: false});
        console.log(response);
        this.props.history.push('/');
        }).catch(error => {
                this.setState({loading: false});
                // this.setState({purchasing: false});
                console.log(error);
            }
        );
    }
    render(){
        let form = (
            <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
            <input className={classes.Input} type="text" name="email" placeholder="E-Mail"/>
            <input className={classes.Input} type="text" name="street" placeholder="Your Street"/>
            <input className={classes.Input} type="text" name="postalcode" placeholder="Your Postal Code"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER HERE</Button>
        </form>
        );
        if (this.state.loading)
        {
            form = <Spinner/>;
        }
        return(<div className={classes.ContactData}>
            <h4>Enter your Contact Details:</h4>
                {form}
        </div>);
    }
}

export default ContactData;