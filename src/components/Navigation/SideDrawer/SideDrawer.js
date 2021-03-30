import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../Auxiliary/Auxiliary';
const sideDrawer = (props) => (
    <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed}/>
    <div className = {classes.SideDrawer} >
       <div className={classes.Logo}>
       <Logo></Logo>
       </div>
      
        <nav>
            <NavigationItems/>
        </nav>
    </div>


    </Auxiliary>

);

export default sideDrawer;