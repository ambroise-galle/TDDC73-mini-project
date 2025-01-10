import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import PasswordStrengthIndicator from './passwordStrength';

const customStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'red',
  },
  strengthBarContainer: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  strengthBar: {
    height: '100%',
  },
  strengthText: {
    fontSize: 16,
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