import React, { Component } from 'react';
import MatrixRow from './MatrixRow'


class ColorPallete extends Component {
    render() {
        return (
            <div>
                <MatrixRow
                    row={this.props.rows}
                    index={0}
                    onClick={this.props.onClick} />
            </div>
        );
    }
}

export default ColorPallete;