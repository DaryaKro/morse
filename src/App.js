import React, { useState } from 'react';
import './App.css';
import { textToMorse, textToBinary, morseToText, binaryToText } from './translatorFunctions';

function App() {
  const [input, setInput] = useState('');
  const [morseOutput, setMorseOutput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState('');

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    setMorseOutput(textToMorse(userInput));
    setBinaryOutput(textToBinary(userInput));
  };

  const handleMorseChange = (e) => {
    const morseInput = e.target.value;
    setMorseOutput(morseInput);
    setInput(morseToText(morseInput));
    setBinaryOutput(textToBinary(morseToText(morseInput)));
  };

  const handleBinaryChange = (e) => {
    const binaryInput = e.target.value;
    setBinaryOutput(binaryInput);
    setInput(binaryToText(binaryInput));
    setMorseOutput(textToMorse(binaryToText(binaryInput)));
  };

  return (
    <div className="App">
      <div classname='mainBlock'>
        <h1>Перевод фразы в код морзе или двоичный код</h1>
        <div className='blocks'>
          <div className='block'>
            <h2>Текст</h2>
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Напишите любую фразу"
            />
          </div>
          <div className='block'>
            <h2>Код морзе</h2>
            <textarea
              value={morseOutput}
              onChange={handleMorseChange}
              placeholder="Напишите код морзе"
            />
          </div>
          <div className='block'>
            <h2>Двоичный код</h2>
            <textarea
              value={binaryOutput}
              onChange={handleBinaryChange}
              placeholder="Напишите двоичный код"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;