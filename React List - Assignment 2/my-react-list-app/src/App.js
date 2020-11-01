import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: '',
    textLength: 0,
    textArray: []
  };

  textInputHandler = (event) => {
    const textArray = [...event.target.value];
    this.setState({text : textArray.join('')});
    this.setState({textLength : textArray.length});
    this.setState({textArray : textArray});
  }

  deleteCharHandler = (index) => {
    const newTextArray = this.state.textArray;
    newTextArray.splice(index, 1);
    this.setState({textArray : newTextArray});
    this.setState({textLength : newTextArray.length});
    this.setState({text : newTextArray.join('')});
  }

  render() {

    let charComponent = null;

    if (this.state.textLength) {
      charComponent = (
        <div>
          {this.state.textArray.map((char, index) => {
            return <CharComponent 
              char = {char}
              del = {() => this.deleteCharHandler(index)}
            />
          })}
        </div>
      )
    }

    return (
      <div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr />
        <div>
          <input type="text" onChange={this.textInputHandler} value={this.state.text}/>
          <p>Text inputted: {this.state.text}</p>
          <p>Text Length: {this.state.textLength}</p>
          <ValidationComponent length={this.state.textLength} />
          {charComponent}
        </div>
      </div>
    );
  }
}

export default App;
