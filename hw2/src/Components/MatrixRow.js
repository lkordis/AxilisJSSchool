import React, { Component } from 'react';
import ColorCell from './ColorCell'

class MatrixRow extends Component {
    render() {
        let cells = []
        for (let i in this.props.row) {
            cells.push(
                <ColorCell
                    key={this.props.index + i}
                    index={parseInt(this.props.index) + parseInt(i)}
                    color={this.props.row[i]}
                    onClick={this.props.onClick}
                />
            )
        }
        return (
            <div style={{display: 'flex'}}>
                {
                    cells.map((c) => {
                        return c
                    })
                }
            </div>
        );
    }
}

export default MatrixRow;