import React from 'react';
import style from './Move.css';

class Move extends React.Component {
	constructor(props) {
		super(props);
		//id - unique ID: solutionNumber_moveName1_moveName2 ... 
		//moveName
		//longNotation
		//fen
		//nextMoves
		//hightlightMove
		//fen
	}

	render() {
		const moveNumber = this.getMoveNumber();
		return (
			<div style={{marginLeft: this.props.nestLevel * 5 + 'px'}}>
				<span 
					className={style.move + (this.props.highlightMove == this.props.id ? ' ' + style.highlighted : '')} 
					onClick={this.props.onClick} 
					fen={this.props.fen} 
					id={this.props.id}
					>{moveNumber + " " + this.props.longNotation}
				</span>
				{this.getNextMoves()}
			</div>
		);
	}

	getNextMoves() {
		let nextMoves = [];
		if (this.props.nextMoves == null) {
			return;
		}
		for (let i = 0; i < this.props.nextMoves.length; i++) {
			const nestedMove = this.props.nextMoves[i];
			nextMoves.push(
					<Move
						key={nestedMove.moveName}
						id={this.props.id + '_' + nestedMove.moveName}
						moveName={nestedMove.moveName}
						longNotation={nestedMove.longNotation}
						fen={nestedMove.fen}
						nextMoves={nestedMove.nextMoves}
						onClick={this.props.onClick}
						highlightMove={this.props.highlightMove}
						nestLevel={this.props.nestLevel + 1}
					/>
			);
		}
		return nextMoves;
	}

	getMoveNumber() {
		if (this.props.moveName == "") {
			return "";
		}
		let result;
		const fenParts = this.props.fen.split(" ");
		const currentColorOnTheMove = fenParts[1];
		const currentMoveNumber = fenParts[5];

		if (currentColorOnTheMove == 'w') { // it was blacks' move
			result = (currentMoveNumber - 1) + '...';
		} else { // it was whites' move
			result = currentMoveNumber + '.';
		}
		return result;
	}

}

export default Move;