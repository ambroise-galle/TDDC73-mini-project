import React from 'react';
import PasswordStrengthIndicator from './passwordStrength';

interface StrengthResult {
  level: string;
  width: number;
  color: string;
}

const customCalculateStrength = (input: string): StrengthResult => {
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
    />
  );
};

export default App;