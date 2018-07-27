import React from 'react';
import style from './App.css';
import grid from '../css/grid.css';
import Board from './Board';
import Navigation from './Navigation';
import SolutionField from './SolutionField';
import ProblemDescription from './ProblemDescription';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			startFen: "8/8/8/8/8/8/8/8 w - - 0 1",
			fen: "8/8/8/8/8/8/8/8 w - - 0 1",
			problemDescriptionAuthor: "",
			problemDescriptionMovesNumber: 0,
			problemDescriptionSolutionsNumber: 0,
			inMoves: 2,
			newPositionInMovesValue: 2,
			isGettingSolutionInProcess: false,
			solutions: false,
			error: false
		}
	}

	componentDidMount() {
		this.setRandomProblem(this.state.newPositionInMovesValue);
	}

	render() {
		return(
			<div className={style.MainAppContainer}>
				<div className={grid.row}>
					<div className={grid['col-6']}>
						<div className={grid.row}>
							<div className={grid['col-12']}>
								<Board fen={this.state.fen} />
							</div>
						</div>
						<div className={grid.row}>
							<div className={grid['col-12']}>
								<ProblemDescription 
									movesNumber={this.state.problemDescriptionMovesNumber} 
									solutionsNumber={this.state.problemDescriptionSolutionsNumber} 
									author={this.state.problemDescriptionAuthor}
								/>
							</div>
						</div>
						<div className={grid.row}>
							<div className={grid['col-12']}>
								<Navigation 
								onSolveClick={this.handleSolveClick} 
								onRandomClick={this.handleRandomClick}
								onInMovesChange={this.handleInMovesChange} 
								inMovesValue={this.state.inMoves} 
								isGettingSolutionInProcess={this.state.isGettingSolutionInProcess}
								newPositionInMovesValue={this.state.newPositionInMovesValue}
								newPositionOnInMovesChange={this.handleNewPositionInMovesChange}

								/>
							</div>
						</div>
					</div>
					<div className={grid['col-6']}>
						<SolutionField 
							solutions={this.state.solutions}
							onMoveClick={this.handleMoveClick}
							highlightMove={this.state.highlightMove}
							fenStart={this.state.startFen}
							error={this.state.error}
							onSetErrorStatus={this.handleSetErrorStatus}
						/>
					</div>
				</div>
			</div>
		);
	}

	handleSolveClick = (event) => {
		this.setState({isGettingSolutionInProcess: true}, function() {
			const fen=this.state.fen;
			const url="http://api.chessproblems.eu/v1/solution/getSolution?fen=" + fen + "&inMoves=" + this.state.inMoves;
	
			let solutions;
	
			fetch(url)
				.then(response => {
					if (response.ok) {
						return response;
					} else {
						throw Error(`Error`);
					}
				})
				.then(response => response.json())
				.then(responseJson => solutions = responseJson)
				.then(() => {
					this.setState({
						error: false,
						solutions: solutions,
						isGettingSolutionInProcess: false
					});
				})
				.catch(() => {
					console.log('catch');
					this.setState({
						solutions: false,
						error: "There is no answer from solving system.",
						isGettingSolutionInProcess: false
					});
				});
		});
	}

	handleRandomClick = (event) => {
		this.setRandomProblem(this.state.newPositionInMovesValue);
	}

	setRandomProblem(moves) {
		const drawnProblem = this.randomFen(moves);
		this.setState({
			startFen: drawnProblem.fen,
			fen: drawnProblem.fen,
			inMoves: drawnProblem.movesNumber, // check
			problemDescriptionAuthor: drawnProblem.author,
			problemDescriptionMovesNumber: drawnProblem.movesNumber,
			problemDescriptionSolutionsNumber: drawnProblem.solutionsNumber,
		});
	}

	randomFen(moves) {
		let positions = [];

		positions[1] = [];
		positions[1].push({
			fen: "5k2/p2pp1pp/1RRN4/2p5/5pP1/1B3P2/PPrr3P/5K2 w - - 0 1",
			author: "",
			movesNumber: 1,
			solutionsNumber: 2
		});
		positions[1].push({
			fen: "2k5/5R2/8/8/7R/8/8/2K5 w - - 0 1",
			author: "",
			movesNumber: 1,
			solutionsNumber: 1
		});
		positions[1].push({
			fen: "1N3k2/R7/8/4Q3/3K4/8/8/8 w - - 0 1",
			author: "",
			movesNumber: 1,
			solutionsNumber: 1
		});

		positions[2] = [];
		positions[2].push({
			fen: "8/8/2Qp2K1/4k3/4N3/6p1/2R5/8 w - - 0 1",
			author: "Gerhard LATZEL (1956)",
			movesNumber: 2,
			solutionsNumber: 1
		});
		positions[2].push({
			fen: "8/8/8/7B/1N6/1K6/QB1k2N1/1r6 w - - 0 1",
			author: "Matti MYLLINIEMI (1956)",
			movesNumber: 2,
			solutionsNumber: 1
		});
		positions[2].push({
			fen: "8/1np5/R1R5/1k2K3/1P6/2Q5/4b3/8 w - - 0 1",
			author: "Nils Gustav Gerard VAN DIJK (1957)",
			movesNumber: 2,
			solutionsNumber: 1
		});

		positions[3] = [];
		positions[3].push({
			fen: "B1n3Q1/k7/8/8/8/8/K6B/8 w - - 0 1",
			author: "Cenek KAINER (1922)",
			movesNumber: 3,
			solutionsNumber: 1
		});
		positions[3].push({
			fen: "8/8/2K5/4kP2/3N4/7Q/8/2R5 w - - 0 1",
			author: "Josef CUMPE (1916)",
			movesNumber: 3,
			solutionsNumber: 1
		});
		positions[3].push({
			fen: "5Q2/K7/8/8/4P3/4k3/1N6/4B3 w - - 0 1",
			author: "Zdenek MACH (1932)",
			movesNumber: 3,
			solutionsNumber: 1
		});

		if (positions[moves] == null) {
			return null;
		}

		if (positions[moves].length == 0) {
			return null;
		}

		const r = Math.random();
		const min = 0;
		const max = positions[moves].length - 1;
		
		const drawn = Math.floor(r * (max - min + 1) + min);
		return positions[moves][drawn];
	}

	handleInMovesChange = (event) => {
		this.setState({inMoves: event.target.value});
	}

	handleNewPositionInMovesChange = (event) => {
		this.setState({newPositionInMovesValue: event.target.value});
	}

	handleMoveClick = (event) => {
		this.setState({
			fen: event.target.attributes.fen.value,
			highlightMove: event.target.attributes.id.value
		});
	}
}

export default App;