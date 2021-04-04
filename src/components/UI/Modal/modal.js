import React, { Component } from 'react';
import classes from './Modal.css';
import Auxiliary from '../../Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
//  Shows modal screen with order summary
class Modal extends Component {  
    shouldComponentUpdate(nextProps,nextState){
    
        return nextProps.show !== this.props.show ;

    }

    componentDidUpdate(){
        console.log("Modal Updated");
    }

    render(){

        return(
            <Auxiliary>
                <Backdrop 
                show = {this.props.show}
                clicked = {this.props.modalClosed}
                />
            <div className = {classes.Modal}
            style = {{
                transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}
            >
                {this.props.children}
            </div>
            </Auxiliary>
        );
    }


}

export default Modal;