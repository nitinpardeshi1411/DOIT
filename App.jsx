import * as React from 'react';
import Navigation from './app/navigation/navigation';
import { PaperProvider } from 'react-native-paper';
import { enGB, registerTranslation } from 'react-native-paper-dates';

function App() {
  registerTranslation('en', enGB)
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

export default App;
