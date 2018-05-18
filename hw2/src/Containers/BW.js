import React, { Component } from 'react';
import ColorMatrix from '../Components/ColorMatrix'
import Color from 'color'

class BW extends Component {
    render() {
        let grayscaledPixels = this.props.rows.map(value => Color(value).grayscale())
        return (
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center'}}>
                <ColorMatrix rows={grayscaledPixels} onClick={this.props.onClick} />
                <br/>
            </div>
        );
    }
}

export default BW;