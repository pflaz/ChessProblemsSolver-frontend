import React from 'react';
import style from './ProblemDescription.css';
import grid from '../css/grid.css';

class ProblemDescription extends React.Component {
	constructor(props) {
		super(props);
	}

	getMovesAndSolutionDescription() {
		let result="Checkmate in " + this.props.movesNumber + " ";
		if (this.props.movesNumber == 1) {
			result += "move";
		} else {
			result += "moves";
		}

		if (this.props.solutionsNumber > 1) {
			result += " (" + this.props.solutionsNumber + " solutions)";
		}
		return result;
	}

	getAuthorDescription() {
		let result="";
		if (this.props.author) {
			result = "The problem's author: " + this.props.author;
		}
		return result;
	}
	

	render() {
		const movesAndSolutionsDescription = this.getMovesAndSolutionDescription();
		const authorDescription = this.getAuthorDescription();

		return (
			<div>
				<div className={grid['row'] + " " + style.problemDescription} >
					<div className={grid['col-12']}>
						{movesAndSolutionsDescription}
					</div>
				</div>
				<div className={grid['row'] + " " + style.problemDescription} >
					<div className={grid['col-12']}>
						{authorDescription}
					</div>
				</div>
			</div>
		);
	}

}

export default ProblemDescription;