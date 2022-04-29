import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export interface ExampleState {
  text: string;
  color: string;
}

interface ExampleProviderProps {
  children: React.ReactNode;
}

interface ExampleContextData {
  example: ExampleState;
  updateStateExample(example: ExampleState): void;
}

const ExampleContext = createContext<ExampleContextData>(
  {} as ExampleContextData,
);

const ExampleProvider: React.FC<ExampleProviderProps> = ({ children }) => {
  const [data, setData] = useState<ExampleState>({} as ExampleState);
  
  const updateStateExample = useCallback((teste: ExampleState) => {
    setData(teste);
  }, []);

  return (
    <ExampleContext.Provider value={{ example: data, updateStateExample }}>
      {children}
    </ExampleContext.Provider>
  );
};

function useExample(): ExampleContextData {
  const context = useContext(ExampleContext);

  if (!context) {
    throw new Error('useExample must be used within a ExampleProvider');
  }

  return context;
}

export { ExampleProvider, useExample };
 