import React from 'react';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
const layout = (props) => (
    <Auxiliary>
<div>Toolbar,sidebar,drawer</div>
<main className={classes.Content}>
{props.children}
</main>
    </Auxiliary>

);

export default layout;