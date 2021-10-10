import React from 'react';

import classes from './backdrop.module.css';

const Backdrop = ({ clicked }) => <div className={classes.backdrop} onClick={clicked}></div>

export default Backdrop;