import React, {Component} from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        const {piece} = this.props;
    }

    redirectToPiece(loc) {
        window.location = loc
    }

    render() {
        const {piece} = this.props;

        return(
            <div>
                <h1
                onClick={() => this.redirectToPiece(piece.link)}
                >{piece.title}</h1>
                <p>{piece.desc}</p>
            </div>
        );
    }
}

export default Portfolio;