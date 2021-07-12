import React from "react";
import "./App.css";
import buttons from "./data";
import ButtonList from "./components/ButtonList"
import {useState} from "react"
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  padding: 20px;
  margin: 0px;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
button {
  padding: 20px;
}
`

const App = () => {
  const [isClicked, setIsClicked] = useState(buttons)
  const handleClick = (key) => {
    const currentState = [...isClicked]
    currentState[key].isClicked = true
    setIsClicked(currentState)
  }
  const clearClicks = () => {
    const currentState = [...isClicked]
    for (let i=0; i<currentState.length; i++) {
      currentState[i].isClicked = false
    }
    setIsClicked(currentState)
  }
  return (
    <div>
    <GlobalStyle />
      <h1>Buttons buttons buttons</h1>
      <ButtonList buttons={buttons} handleClick={handleClick} clearClicks={clearClicks}/>
    </div>
  );
};

export default App;

