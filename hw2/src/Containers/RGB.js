import React, { Component } from 'react';
import ColorMatrix from '../Components/ColorMatrix'
import ColorPalette from '../Components/ColorPallete'

class RGB extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center'}}>
                <ColorMatrix rows={this.props.rows} onClick={this.props.onClick} />
                <br/>
                <h1> Pick a color</h1>
                <ColorPalette rows={this.props.palette} onClick={this.props.onPaletteClick}/>
            </div>
        );
    }
}

export default RGB;