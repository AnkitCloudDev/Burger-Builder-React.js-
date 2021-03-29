import React from 'react';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <Auxiliary>
<Toolbar></Toolbar>
<main className={classes.Content}>
{props.children}
</main>
    </Auxiliary>

);

export default layout;