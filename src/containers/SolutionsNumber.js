import React from 'react';
import style from './SolutionsNumber.css';

class SolutionNumber extends React.Component {
	constructor(props) {
		super(props);
		//solutionsNumber
	}

	getText() {
		
		if (this.props.solutionsNumber == 0) {
			return "No solution";
		}
		return "Solutions: " + this.props.solutionsNumber;
	}

	render() {
		return (
			<div className={style.solutionsNumber}>{this.getText()}</div>
		);
	}

}

export default SolutionNumber;