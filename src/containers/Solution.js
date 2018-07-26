import React from 'react';
import Move from './Move';
import style from './Solution.css';

class Solution extends React.Component {
	constructor(props) {
		super(props);
		//solutionNumber
		//moveWithBoard
		//onMoveClick
		//highlightMove
	}

	render() {
		return (
			<div className={style.solution}>
				<div className={style.solutionNumber}>
					Solution {this.props.solutionNumber}
				</div>
				<div>
					<Move 
						id={this.props.solutionNumber}
						moveName=""
						longNotation="Start position"
						fen={this.props.fenStart} 
						nextMoves={null}
						onClick={this.props.onMoveClick}
						highlightMove={this.props.highlightMove}
						nestLevel={0}
					/>
					<Move 
						id={this.props.solutionNumber + '_' + this.props.moveWithBoard.moveName}
						moveName={this.props.moveWithBoard.moveName}
						longNotation={this.props.moveWithBoard.longNotation} 
						fen={this.props.moveWithBoard.fen} 
						nextMoves={this.props.moveWithBoard.nextMoves}
						onClick={this.props.onMoveClick}
						highlightMove={this.props.highlightMove}
						nestLevel={1}
					/>
				</div>
			</div>
		);
	}

}

export default Solution;