import React from 'react';
import style from './Navigation.css';
import grid from '../css/grid.css';
import InMovesInput from '../components/InMovesInput';
import SolveButton from './SolveButton';
import RandomButton from './RandomButton';

class Navigation extends React.Component {
	constructor(props) {
        super(props);
        //inMovesValue
        //isGettingSolutionInProcess // boolean
	}

	render() {
		return (
			<div className={grid.row + " " + style.navigation}>
                <div className={grid['col-1']}>
                    &nbsp;
                </div>


                <div className={grid['col-5'] + " " + style['new-position-field']}>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            New position
                        </div>
                    </div>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            Mate in <InMovesInput value={this.props.newPositionInMovesValue} onChange={this.props.newPositionOnInMovesChange}/> moves
                        </div>
                    </div>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            <RandomButton 
                            onClick={this.props.onRandomClick} 
                            isGettingSolutionInProcess={this.props.isGettingSolutionInProcess}
                            />
                        </div>
                    </div>
                </div>


                <div className={grid['col-1']}>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            &nbsp;
                        </div>
                    </div>
                </div>

                <div className={grid['col-5'] + " " + style['search-field']}>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            Search solution
                        </div>
                    </div>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            Mate in <InMovesInput value={this.props.inMovesValue} onChange={this.props.onInMovesChange}/> moves
                        </div>
                    </div>
                    <div className={grid.row}>
                        <div className={grid['col-12']}>
                            <SolveButton 
                            onClick={this.props.onSolveClick} 
                            isGettingSolutionInProcess={this.props.isGettingSolutionInProcess}
                            />
                        </div>
                    </div>
                </div>

			</div>
		);
    }
}

export default Navigation;