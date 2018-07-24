import React from 'react';
import style from './SolutionField.css';
import SolutionsNumber from './SolutionsNumber';
import Solution from './Solution';

class SolutionField extends React.Component {
	constructor(props) {
		super(props);
		//solutions (array)
	}

	getSolutions() {
		if (this.props.solutions === false) {
			return;
		}

		if (this.props.solutions[0].error != null) {
			console.log("Error from solving system: " + this.props.solutions[0].error);
			return 'Error from solving system.';
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
				/>
			);
		}
		
		return result;
	}

	render() {
		return (
			<div className={style.field}>
				{this.getSolutions()}
			</div>
		);
	}

}

export default SolutionField;