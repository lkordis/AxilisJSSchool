import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const linkStyle = {
    padding: '8px 16px',
    border: 'solid 1px transparent'
}

const barStyle = {
    display: 'flex',
    height: '50px',
    'justifyContent': 'space-around',
    'alignItems': 'center',
}

class NavBar extends Component {


    render() {
        return (
            <div style={barStyle}>
                <Link style={linkStyle} to="/rgb">RGB</Link>
                <Link style={linkStyle} to="/bw">BW</Link>
            </div>
        );
    }
}

export default NavBar;