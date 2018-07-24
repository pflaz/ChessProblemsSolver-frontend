import React from 'react';
import style from './SolveButton.css';



class SolveButton extends React.Component { 
        constructor(props) {
                super(props);
        }

        getText() {
                if (this.props.isGettingSolutionInProcess) {
                        return 'Solving... Please wait...';
                } else {
                        return "Solve! >>";
                }
        }

        render() {
              return(
                <button className={style.button} onClick={this.props.onClick} disabled={this.props.isGettingSolutionInProcess}>{this.getText()}</button> 
              );
        }
}

export default SolveButton;