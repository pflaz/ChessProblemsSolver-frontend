import React from 'react';
import Square from './Square';
import style from './BoardRow.css';

class BoardRow extends React.Component {
    constructor(props) {
        super(props);
        //rowFen
        //rowNumber (1-8)
    }

    render() {
        const squareObjects = this.getSquares(this.props.rowFen);
        return (
            <div className={style.row}>
                <div className={style.rowNumberSquare}><div className={style.rowNumberContent}>{this.props.rowNumber}</div></div>
                {squareObjects}
            </div>
        );
    }

    getSquares(rowFen) {
        let squareObjects = [];
        let columnLetter = 'A';
        for (let i = 0; i < rowFen.length; i++) {
            if (['K', 'Q', 'R', 'B', 'N', 'P', 'k', 'q', 'r', 'b', 'n', 'p'].indexOf(rowFen[i]) > -1) {
                squareObjects.push(<Square key={columnLetter + this.props.rowNumber} name={columnLetter + this.props.rowNumber} piece={rowFen[i]}/>);
                columnLetter = this.nextLetter(columnLetter);
            } else if (rowFen[i] >= 1 && rowFen[i] <= 8) {
                for (let blankSquareCount = 0; blankSquareCount < rowFen[i]; blankSquareCount++) {
                    squareObjects.push(<Square key={columnLetter + this.props.rowNumber} name={columnLetter + this.props.rowNumber} piece={null}/>);
                    columnLetter = this.nextLetter(columnLetter);
                }
            } else {
                throw "Wrong sign in rowFen";
            }
        }
        return squareObjects;
    }

    nextLetter(letter) {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
    }
}

export default BoardRow;