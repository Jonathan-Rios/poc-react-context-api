import React, { useCallback, useEffect } from 'react';
import { useExample, ExampleState } from '../hooks/example';

const App: React.FC = () => {
  const { example, updateStateExample } = useExample();

  useEffect(() => {
    updateStateExample({ text: 'Eu vim da context api! xD', color: '#ff9000' } as ExampleState);
  }, [updateStateExample]);

  const handleColors = useCallback((option: string) => {
    updateStateExample({...example, color: option})
  }, [example, updateStateExample]);
  
  return (
    <div>
      <h2 style={{color: example.color || '#c4c4c4'}} >
      Apresentado os dados que atribuimos no context api: 
      </h2>
      <h1>{example.text}</h1>
      <div>
        <p>Altere a cor:</p>
        <button onClick={() => handleColors('red')}>Red</button>
        <button onClick={() => handleColors('blue')}>Blue</button>
        <button onClick={() => handleColors('#f99000')}>Default</button>
      </div>
    </div>
  );
};

export default App;
