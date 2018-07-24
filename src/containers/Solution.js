import React from 'react';
import Move from './Move';
import style from './Solution.css';

class Solution extends React.Component {
	constructor(props) {
		super(props);
		//solutionNumber
		//moveWithBoard
	}

	render() {
		return (
			<div className={style.solution}>
				<div className={style.solutionNumber}>
					Solution {this.props.solutionNumber}
				</div>
				<div>
					<Move 
						number="" 
						longNotation={this.props.moveWithBoard.longNotation} 
						fen={this.props.moveWithBoard.fen} 
						nextMoves={this.props.moveWithBoard.nextMoves}
						onClick={this.props.onMoveClick}
					/>
				</div>
			</div>
		);
	}

}

export default Solution;