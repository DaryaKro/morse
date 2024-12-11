import React, { useState } from 'react';
import './App.css';
import { textToMorse, textToBinary } from './translatorFunctions';

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

  return (
    <div className="App">
      <div classname='mainBlock'>
        <h1>Перевод фразы в код морзе или двоичный код</h1>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Напишите любую фразу"
        />
        <div className='blocks'>
          <div className='block'>
            <h2>Код морзе</h2>
            <span>{morseOutput ? morseOutput : <span className='empty'>Напишите фразу для перевода</span>}</span>
          </div>
          <div className='block'>
            <h2>Двоичный код</h2>
            <span>{binaryOutput ? binaryOutput : <span className='empty'>Напишите фразу для перевода</span>}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;