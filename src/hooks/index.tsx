import React from 'react';

import { ExampleProvider } from './example';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ExampleProvider>{children}</ExampleProvider>
);
export default AppProvider;
