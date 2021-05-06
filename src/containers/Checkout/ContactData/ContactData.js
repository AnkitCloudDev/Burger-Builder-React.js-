import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component{
    state = {
        email: '',
        name: '',
        address: {
            street: '',
            postalcode: '',
        }
    }
    render(){
        return(<div className={classes.ContactData}>
            <h4>Enter your Contact Details:</h4>
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={classes.Input} type="text" name="email" placeholder="E-Mail"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your Street"/>
                <input className={classes.Input} type="text" name="postalcode" placeholder="Your Postal Code"/>
                <Button btnType="Success">ORDER HERE</Button>
            </form>
        </div>);
    }
}

export default ContactData;