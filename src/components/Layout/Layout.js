import React, { Component } from 'react';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
        console.log("Side Drawer Called");
    }

    toggleSideDrawer = () => {
        const show = this.state.showSideDrawer;
        this.setState({showSideDrawer: !show});

    }
render(){

    return ( 
    <Auxiliary>
        <Toolbar drawerToggleClicked = {this.toggleSideDrawer}></Toolbar>
        <SideDrawer 
        open = {this.state.showSideDrawer} 
        closed={this.SideDrawerClosedHandler}
         />
         
        <main className = {classes.Content}>
        {this.props.children}
        </main>
    </Auxiliary>
            
            );
}

}

export default Layout;