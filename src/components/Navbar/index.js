import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    const {counter, score} = this.props

    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="score-timer-container">
          <li className="score-container">
            <p className="score-heading">Score:</p>
            <p className="score">{score}</p>
          </li>
          <li className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="score-heading">{counter} sec</p>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
