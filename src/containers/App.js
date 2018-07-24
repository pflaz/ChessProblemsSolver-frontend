import React from 'react';
import style from './App.css';
import grid from '../css/grid.css';
import Board from './Board';
import Navigation from './Navigation';
import SolutionField from './SolutionField';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fen: "5k2/p2pp1pp/1RRN4/2p5/5pP1/1B3P2/PPrr3P/5K2 w - - 0 1",
			inMoves: 2,
			isGettingSolutionInProcess: false,
			solutions: false
		}
	}

	render() {
		return(
			<div className={style.MainAppContainer}>
				<div className={grid.row}>
					<div className={grid['col-8']}>
						<Board fen={this.state.fen} />
					</div>
					<div className={grid['col-4']}>
						<SolutionField 
							solutions={this.state.solutions} 
							onMoveClick={this.handleMoveClick}
						/>
					</div>
				</div>
				<div className={grid.row}>
					<div className={grid['col-8']}>
						<Navigation 
							onSolveClick={this.handleSolveClick} 
							onInMovesChange={this.handleInMovesChange} 
							inMovesValue={this.state.inMoves} 
							isGettingSolutionInProcess={this.state.isGettingSolutionInProcess}
						/>
					</div>
					<div className={grid['col-4']}>
						&nbsp;
					</div>
				</div>
			</div>
		);
	}

	handleSolveClick = (event) => {
		this.setState({isGettingSolutionInProcess: true}, function() {
			const fen=this.state.fen + ' w KQkq - 0 1';
			const url="http://localhost:8080/v1/solution/getSolution?fen=" + fen + "&inMoves=" + this.state.inMoves;
	
			let solutions;
	
			fetch(url)
				.then(response => response.json())
				.then(responseJson => solutions = responseJson)
				.then(() => {
					this.setState({
						solutions: solutions,
						isGettingSolutionInProcess: false
					});
				})
				.catch(() => {
					this.setState({
						solutions: "Cannot connect to the solving system.",
						isGettingSolutionInProcess: false
					});
				})
		});
	}

	handleInMovesChange = (event) => {
		this.setState({inMoves: event.target.value});
	}

	handleMoveClick = (event) => {
		this.setState({fen: event.target.attributes.fen.value});
	}
}

export default App;