# PasswordStrengthIndicator Component

The `PasswordStrengthIndicator` component provides a visual indicator of password strength based on user input. It includes a password input field, an optional color bar to represent strength, and a text label displaying the strength level.

## Props

- **enableColorBar** (boolean): Whether to show the color bar. Default is `true`.
- **calculateStrength** (function): Custom strength calculation logic. Takes a password string as an argument and returns a string indicating the strength. Default is `defaultCalculateStrength`.
- **forcedCharacters** (RegExp): Characters that must be present in the password.
- **bannedCharacters** (RegExp): Characters that must not be present in the password.
- **style** (object): Custom styles for various elements of the component.
    - **container** (ViewStyle): Style for the main container.
    - **input** (TextStyle): Style for the TextInput.
    - **strengthBarContainer** (ViewStyle): Style for the strength bar container.
    - **strengthBar** (ViewStyle): Style for the strength bar.
    - **strengthText** (TextStyle): Style for the strength text.

## Default Strength Calculation Logic

- If the password contains banned characters, the strength is "Invalid".
- If the password is missing required characters, the strength is "Missing Required Characters".
- If the password length is less than 6 characters, the strength is "Weak".
- If the password length is between 6 and 12 characters, the strength is "Medium".
- If the password length is 12 characters or more, the strength is "Strong".

## Usage

To use the `PasswordStrengthIndicator` component, import it into your project and include it in your JSX. You can customize its behavior and appearance using the available props.

### Example

```jsx
import React from 'react';
import { PasswordStrengthIndicator } from 'your-library';

const App = () => {
    return (
        <PasswordStrengthIndicator
            enableColorBar={true}
            calculateStrength={customCalculateStrength}
            forcedCharacters={/[A-Z]/}
            bannedCharacters={/[!@#$%^&*]/}
            style={{
                container: { margin: 10 },
                input: { borderColor: 'gray', borderWidth: 1 },
                strengthBarContainer: { height: 5, marginTop: 5 },
                strengthBar: { backgroundColor: 'green' },
                strengthText: { fontSize: 12, color: 'black' },
            }}
        />
    );
};

const customCalculateStrength = (password) => {
    // Custom logic to calculate password strength
    return 'Strong';
};

export default App;
```


### Default Strength Calculation Logic

The default strength calculation logic follows these rules:

- If the password contains banned characters, the strength is "Invalid".
- If the password is missing required characters, the strength is "Missing Required Characters".
- If the password length is less than 6 characters, the strength is "Weak".
- If the password length is between 6 and 12 characters, the strength is "Medium".
- If the password length is 12 characters or more, the strength is "Strong".