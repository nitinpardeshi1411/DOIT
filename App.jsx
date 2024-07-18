import * as React from 'react';
import Navigation from './app/navigation/navigation';
import { PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

export default App;
