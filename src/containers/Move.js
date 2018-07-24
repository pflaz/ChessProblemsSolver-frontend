import React from 'react';
import style from './Move.css';

class Move extends React.Component {
	constructor(props) {
		super(props);
		//number
		//longNotation
		//fen
		//nextMoves
	}

	render() {
		return (
			<div>
				<span className={style.move} onClick={this.props.onClick} fen={this.props.fen}>{this.props.longNotation}</span>
			</div>
		);
	}

}

export default Move;