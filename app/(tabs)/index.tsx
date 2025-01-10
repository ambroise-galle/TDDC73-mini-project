import React from 'react';
import PasswordStrengthIndicator from './passwordStrength';

const customCalculateStrength = (input: string, forcedCharacters?: RegExp, bannedCharacters?: RegExp) => {
  if (bannedCharacters && bannedCharacters.test(input)) {
    return { level: 'Invalid', width: 0, color: 'red' };
  }
  if (forcedCharacters && !forcedCharacters.test(input)) {
    return { level: 'Missing Required Characters', width: 30, color: 'orange' };
  }
  if (input.length < 8) return { level: 'Too Short', width: 20, color: 'red' };
  if (input.length >= 8 && input.match(/[A-Z]/) && input.match(/[0-9]/)) {
    return { level: 'Secure', width: 80, color: 'green' };
  }
  return { level: 'Average', width: 50, color: 'orange' };
};

const App = () => {
  return (
    <PasswordStrengthIndicator
      enableColorBar={true}
      calculateStrength={customCalculateStrength}
      forcedCharacters={/[!@#$%^&*]/} // Require at least one special character
      bannedCharacters={/[ ]/} // Disallow spaces
    />
  );
};

export default App;
