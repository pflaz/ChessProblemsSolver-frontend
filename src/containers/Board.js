import React from 'react';
import BoardRow from './BoardRow';
import style from './Board.css';
import BoardRowWithColumnNames from './BoardRowWithColumnsNames';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const fenParts = this.splitFenToParts(this.props.fen);
        const fenRows = this.splitFenToRows(fenParts[0]);
        let rowsObjects = [];
        let partToRead = 0;
        for (let i = 8; i > 0; i--) {
            partToRead = 8 - i;
            rowsObjects.push(
                <BoardRow key={i} rowFen={fenRows[partToRead]} rowNumber={i}/>
            );
        }
        return (
            <div className={style.board}>
                {rowsObjects}
                <BoardRowWithColumnNames />
            </div>
        );
    }

    splitFenToRows(fen) {
        return fen.split("/");
    }

    splitFenToParts(fen) {
        return fen.split(" ");
    }
}

export default Board;