import React from 'react';
import style from './SolutionField.css';
import SolutionsNumber from './SolutionsNumber';
import Solution from './Solution';

class SolutionField extends React.Component {
	constructor(props) {
		super(props);
		//solutions (array)
		//highlightMove
	}


	getWelcomeText() {
		const welcomeText = `<strong>Chess Problems Solver</strong> allows you to train your chess skills by solving chess problems.<br>
		<br>
		<strong>How to use it:</strong><br>
		<ol>
			<li>After launching you can see random chess problem.
			<li>Under the chessboard you can see problem's type (for example: checkmate in 2 moves).
				<ol style="list-style-type: lower-alpha">
					<li>If there is not specified what colour begins, it means white begins.
					<li>If there is not specified how many solutions the problem has, it means there is one solution.
				</ol>
			<li>After solving the problem (on your own) you can verify the correctness of your solution by ordering the system to find a solution (<strong>Solve!</strong> button)
			<li>After displaying the solution (on the right side of the chessboard), you can perform the analysis by clicking on each move.
			<li>With any position on the chessboard, you can order the system to find a solution in the indicated number of moves.
			<li>At any time you can get the new chess problem and choose the number of moves to the checkmate (<strong>Random</strong> button).
		</ol>
		<br>
		Feel free to contact us: <a href="mailto:chessproblems@chessproblems.eu">chessproblems@chessproblems.eu</a><br>
		<br>
		Have a nice solving! :)`;

		return {__html: welcomeText};
	}

	getSolutions() {
		if (this.props.solutions === false) {
			return <div dangerouslySetInnerHTML={this.getWelcomeText()} />;
		}

		if (this.props.solutions.length > 0) {
			if (this.props.solutions[0].error != null) {
				console.log("Error from solving system: " + this.props.solutions[0].error);
				return 'Error from solving system.';
			}
		}

		let result = [];
		result.push(<SolutionsNumber key="solutionNumber" solutionsNumber={this.props.solutions.length} />);

		for (let i = 0; i < this.props.solutions.length; i++) {
			result.push(
				<Solution 
					key={i} 
					solutionNumber={i + 1} 
					moveWithBoard={this.props.solutions[i]} 
					onMoveClick={this.props.onMoveClick}
					highlightMove={this.props.highlightMove}
					fenStart={this.props.fenStart}
				/>
			);
		}
		
		return result;
	}

	render() {
		const solutions = this.getSolutions();
		return (
			<div className={style.field}>
				{this.getSolutions()}
			</div>
		);
	}

}

export default SolutionField;