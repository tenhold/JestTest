import React, { useState } from 'react';
import { sum } from '../data/sum';

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sumIt, setSum] = useState(null);

  const handleInput = () => {
    setSum(sum(num, num2));
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <input
          type='text'
          onChange={(e) => setNum(JSON.parse(e.target.value))}
        />
        <input
          type='text'
          onChange={(e) => setNum2(JSON.parse(e.target.value))}
        />
        <button onClick={handleInput}>get sum</button>
      </div>
      <h1>{sumIt}</h1>
    </div>
  );
};

export default App;
