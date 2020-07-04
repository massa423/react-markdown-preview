import React, { useState } from 'react';
import './App.css';
import Remarkable from 'remarkable';

const App: React.FC = () => {
  const [input, updateInput] = useState("Input your markdown");

  return (
    <div className="App">
      <h3>Input Markdown</h3>
      <textarea
        id="markdown-content"
        onChange={(e: any) =>{
          updateInput(e.target.value);
        }}
        defaultValue={input}
      />

      <h3>Output</h3>
      <div
        className="md"
        dangerouslySetInnerHTML={{__html:new Remarkable().render(input)}}
      />
    </div>
  );
};

export default App;
