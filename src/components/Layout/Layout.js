import React from 'react';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
const layout = (props) => (
    <Auxiliary>
<div>Project under Construction.</div>
<main className={classes.Content}>
{props.children}
</main>
    </Auxiliary>

);

export default layout;