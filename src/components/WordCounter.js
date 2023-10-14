import React, { useState } from 'react';
import './style.css';

function WordCount() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    setText(textValue);
    countWords(textValue);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="50"
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default WordCount;

