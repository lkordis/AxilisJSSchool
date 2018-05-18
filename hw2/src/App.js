import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/NavBar'
import RGB from './Containers/RGB'
import BW from './Containers/BW'

const PALETTE = ["#FFA500", "#FFB6C1", "#FFFF00", "#9ACD32", "#FF6347", "#008080", "#20B2AA","#1E90FF", "#90EE90", "#00FF00"]

class App extends Component {
  constructor() {
    super()

    this.state = {
      rows: Array.from({ length: 100 }, () => PALETTE[Math.floor(Math.random() * PALETTE.length)]),
      palette: PALETTE,
      isSelected: false,
      selectedCell: undefined
    }
  }


  handleClick = (index) => {
    this.setState({ selectedCell: index })
  }

  handlePaletteClick = (index) => {
    if (!this.state.selectedCell) return
    this.setState({
      rows: this.state.rows.map((value, i) => {
        console.log(i)
        if (i === this.state.selectedCell) {
          return this.state.palette[index]
        } else {
          return value
        }
      })
    })
    this.setState({selectedCell: undefined})
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Redirect exact from="/" to="/rgb" />
              <Route exact path="/rgb"
                render={() => <RGB rows={this.state.rows} palette={this.state.palette} onClick={this.handleClick} onPaletteClick={this.handlePaletteClick} />}
              />
              <Route exact path="/bw"
                render={() => <BW rows={this.state.rows} palette={this.state.palette} onClick={this.handleClick}/>}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
