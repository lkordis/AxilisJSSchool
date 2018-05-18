import React, { Component } from 'react';
import MatrixRow from './MatrixRow'
import uuidv1 from 'uuid/v1'

class ColorMatrix extends Component {
    render() {
        let rows = []
        for (let i = 0; i < 10; i++) {
            rows.push(
                <MatrixRow
                    row={this.props.rows.slice(i*10,i*10 + 10)}
                    key={uuidv1()}
                    index={i*10}
                    onClick={this.props.onClick} />
            )
        }

        return (
            <div>
                {
                    rows.map((r) => { return r })
                }
            </div>
        );
    }
}

export default ColorMatrix;