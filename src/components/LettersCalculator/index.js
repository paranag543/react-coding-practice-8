// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    phraseInput: '',
  }

  onChangePhraseInput = event => {
    this.setState({phraseInput: event.target.value})
  }

  render() {
    const {phraseInput} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="container">
            <h1 className="heading">Calculate the Letters you enter </h1>
            <label className="label" htmlFor="textInput">
              Enter the phrase
            </label>
            <input
              type="text"
              id="textInput"
              className="phrase-input"
              placeholder="Enter the phrase"
              value={phraseInput}
              onChange={this.onChangePhraseInput}
            />
            <p className="button-class">No.of letters: {phraseInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image-class"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
