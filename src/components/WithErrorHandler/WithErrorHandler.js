import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../UI/Modal/modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component
    {
        state = {
            error: null,


        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        componentWillUnmount(){
            console.log("WithErrorHandler WillUnmount() called");
                axios.interceptors.request.eject(this.requestInterceptor);
                axios.interceptors.response.eject(this.responseInterceptor);
        }

        componentWillMount (){
          this.requestInterceptor =  axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
           this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        

        render() {
            return(<Auxiliary>
                    <Modal 
                    show = {this.state.error}
                    modalClosed = {this.errorConfirmedHandler} > 
                       
                       {this.state.error?this.state.error.message : null}</Modal>
                        <WrappedComponent {...this.props}/>
                 </Auxiliary>
)
        }
    } 
}

export default withErrorHandler;