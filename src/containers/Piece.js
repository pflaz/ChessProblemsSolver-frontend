import React from 'react';
import style from './Piece.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'
import { faChessQueen} from '@fortawesome/free-solid-svg-icons'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import { faChessBishop } from '@fortawesome/free-solid-svg-icons'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'

library.add(faChessKing)
library.add(faChessQueen)
library.add(faChessRook)
library.add(faChessBishop)
library.add(faChessKnight)
library.add(faChessPawn)

class Piece extends React.Component {
    constructor(props) {
        super(props);
        // piece
    }

    render() {
        if (this.props.piece == null) {
            return <div>&nbsp;</div>;
        }
        return(
            <div className={this.getColor(this.props.piece)}>
                {this.getPiece(this.props.piece)}
            </div>
        );
    }


    getPiece(piece) {
        switch (piece.toUpperCase()) {
            case 'K':
                return <FontAwesomeIcon icon="chess-king" />
                break;
            case 'Q':
                return <FontAwesomeIcon icon="chess-queen" />
                break;   
            case 'R':
                return <FontAwesomeIcon icon="chess-rook" />
                break;  
            case 'B':
                return <FontAwesomeIcon icon="chess-bishop" />
                break;  
            case 'N':
                return <FontAwesomeIcon icon="chess-knight" />
                break;  
            case 'P':
                return <FontAwesomeIcon icon="chess-pawn" />
                break;       
            default:
                throw("Invalid piece");    
        }
    }

    getColor(piece) {
        if (piece == piece.toUpperCase()) {
            return style.colorWhite;
        } else if (piece == piece.toLowerCase()) {
            return style.colorBlack;
        } else {
            throw ("Invalid piece's color.");
        }
    }

}

export default Piece;