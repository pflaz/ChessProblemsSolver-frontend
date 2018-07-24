import React from 'react';
import style from './SquareWithColumnName.css';

class SquareWithColumnName extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className={this.getClassName(this.props.type)}>
			{this.props.columnName}
		</div>
		);
	}

	getClassName(type) {
		if (type == "first") {
			return style.square0;
		} else {
			return style.square;
		}
	}

}

// const SquareWithColumnName = props => 
// 	<div className={style.props.className}>
//         {props.columnName}
// 	</div>

export default SquareWithColumnName;