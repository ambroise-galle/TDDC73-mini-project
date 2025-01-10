import React from 'react';
import { StyleSheet } from 'react-native';
import PasswordStrengthIndicator from './passwordStrength';

const customStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const App = () => {
  return (
    <PasswordStrengthIndicator
      enableColorBar={true}
      forcedCharacters={/[!@#$%^&*]/} // Require at least one special character
      bannedCharacters={/[ ]/} // Disallow spaces
      style={customStyles} // Pass custom styles
    />
  );
};

export default App;