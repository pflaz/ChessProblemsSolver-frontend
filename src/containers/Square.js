import React from 'react';
import style from './Square.css';
import Piece from './Piece';

class Square extends React.Component {
	constructor(props) {
		super(props);
		// name
	}

	render() {
		let classNames = style.square;
		classNames += " " + this.getColor(this.props.name);
		return (
			<div className={classNames}>
				<div className={style.squareContent}>
					<Piece piece={this.props.piece} />
				</div>
			</div>
		);
	}

	getColor(squareName) {
		const columnDigit = squareName.charCodeAt(0);
		const sum = columnDigit + parseInt(squareName.charAt(1), 10);
		if (sum % 2 == 0) {
			return style.colorBlack;
		} else {
			return style.colorWhite;
		}
	}
}

export default Square;