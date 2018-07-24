import React from 'react';
// import style from './Navigation.css';
import grid from '../css/grid.css';
import InMovesInput from '../components/InMovesInput';
import SolveButton from './SolveButton';

class Navigation extends React.Component {
	constructor(props) {
        super(props);
        //inMovesValue
        //isGettingSolutionInProcess // boolean
	}

	render() {
		return (
			<div className={grid.row}>
                <div className={grid['col-1']}>
                    &nbsp;
                </div>
                <div className={grid['col-5']}>
                    Mate in <InMovesInput value={this.props.inMovesValue} onChange={this.props.onInMovesChange}/> moves
                </div>
                <div className={grid['col-1']}>
                    &nbsp;
                </div>
                <div className={grid['col-5']}>
                    <SolveButton 
                        onClick={this.props.onSolveClick} 
                        isGettingSolutionInProcess={this.props.isGettingSolutionInProcess}
                    />
                </div>
			</div>
		);
    }
}

export default Navigation;