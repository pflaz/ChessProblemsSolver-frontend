import React from 'react';
import style from './InMovesInput.css';

const InMovesInput = props => 
    <input type="number" name="inMoves" id="inMoves" step="1" min="1" max="2" value={props.value} onChange={props.onChange} className={style.input} />


export default InMovesInput;