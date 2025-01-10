import React from 'react';
import { AppRegistry } from 'react-native';
import PasswordStrengthIndicator from './passwordStrengh';

const App = () => {
  // Pass the enableColorBar prop as needed
  return <PasswordStrengthIndicator enableColorBar={true} />;
};

export default App;