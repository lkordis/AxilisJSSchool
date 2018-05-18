import React, { Component } from 'react';



class ColorCell extends Component {
    render() {
        const style = {
            height: '50px',
            width: '50px',
            backgroundColor: this.props.color
        }
        return (
            <div style={style} onClick={() => this.props.onClick(this.props.index)}/>
        );
    }
}

export default ColorCell;