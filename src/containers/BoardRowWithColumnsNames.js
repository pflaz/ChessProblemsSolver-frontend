import React from 'react';
import SquareWithColumnName from './SquareWithColumnName';
import style from './BoardRowWithColumnsNames.css';

class BoardRowWithColumnsNames extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const squareObjects = this.getSquaresWithLetters();
        return (
            <div className={style.row}>
                <SquareWithColumnName key="first" columnName="&nbsp;" type="first"/>
                {squareObjects}
            </div>
        );
    }

    nextLetter(letter) {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
    }

    getSquaresWithLetters() {
        let columnName = 'A';
        let squareObjects = [];
        for (let i = 0; i < 8; i++) {
            squareObjects.push(<SquareWithColumnName key={columnName} columnName={columnName} type="normal"/>);
            columnName = this.nextLetter(columnName);
        }
        return squareObjects;
    }
}

export default BoardRowWithColumnsNames;