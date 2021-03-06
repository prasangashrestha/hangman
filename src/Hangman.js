import React, { Component } from "react";
import {Fragment} from 'react';
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    words: ['apple', 'banana', 'mango']
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: this.randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.randomWord = this.randomWord.bind(this);
    this.restart = this.restart.bind(this);
    
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */

  randomWord() {
    return this.props.words[Math.floor(Math.random() * 3)]
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  restart(){
    this.setState({
        nWrong: 0,
        guessed: new Set(),
        answer: this.randomWord()
      
    })
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key = {ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        
        <h3>Guessed Wrong: {this.state.nWrong}</h3>
        
        {this.state.nWrong < 6 
        ?
        <Fragment>
          <img 
            src={this.props.images[this.state.nWrong]}
            alt= {this.state.nWrong} />
          <p className='Hangman-word'>{this.guessedWord()}</p>
          <p className='Hangman-btns'>{this.generateButtons()}</p>
        </Fragment>  
        : 
        <Fragment>
          <p> You lose. Correct word: {this.state.answer}</p>
          <button className='Restart' onClick={this.restart}>Restart</button>
        </Fragment>
        
          
        }
        
        
      </div>
    );
  }
}

export default Hangman;
