# PasswordStrengthIndicator Component Documentation

## Overview

The `PasswordStrengthIndicator` component is a React Native component that provides a visual indication of the strength of a password. It evaluates the password based on length and optional character requirements, displaying a color-coded strength bar and descriptive text.

## Props

### `enableColorBar: boolean`

- **Type**: Boolean
- **Required**: No
- **Default**: `true`
- **Description**: Determines whether to show the color bar indicating password strength.

### `calculateStrength: (input: string) => StrengthResult`

- **Type**: Function
- **Required**: No
- **Default**: `defaultCalculateStrength`
- **Description**: Custom function to calculate the strength of the password. It should return an object with `level`, `width`, and `color`.

### `forcedCharacters: RegExp`

- **Type**: RegExp
- **Required**: No
- **Description**: Regular expression defining characters that must be present in the password.

### `bannedCharacters: RegExp`

- **Type**: RegExp
- **Required**: No
- **Description**: Regular expression defining characters that must not be present in the password.

### `style: ViewStyle`

- **Type**: Object
- **Required**: No
- **Description**: Custom styles for various parts of the component.

## Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import PasswordStrengthIndicator from './path/to/PasswordStrengthIndicator';

const App = () => {
    return (
        <View>
            <PasswordStrengthIndicator
                enableColorBar={true}
                forcedCharacters={/[A-Z]/}
                bannedCharacters={/[!@#\$%\^&\*]/}
                style={{
                    container: { marginTop: 20 },
                    input: { borderColor: 'blue' },
                    strengthBarContainer: { backgroundColor: '#e0e0e0' },
                    strengthBar: { height: 10 },
                    strengthText: { fontSize: 14 },
                }}
            />
        </View>
    );
};

export default App;
```

## Component Structure

### `StrengthResult`

```ts
interface StrengthResult {
    level: string;
    width: number;
    color: string;
}
```

### `PasswordStrengthIndicatorProps`

```ts
interface PasswordStrengthIndicatorProps {
    enableColorBar?: boolean;
    calculateStrength?: (input: string) => StrengthResult;
    forcedCharacters?: RegExp;
    bannedCharacters?: RegExp;
    style?: {
        container?: ViewStyle;
        input?: TextStyle;
        strengthBarContainer?: ViewStyle;
        strengthBar?: ViewStyle;
        strengthText?: TextStyle;
    };
}
```

## Internal State and Refs

- `password`: Holds the entered password.
- `strength`: Holds the strength level text.
- `barWidth`: Animated value for the strength bar width.
- `barColor`: Holds the color of the strength bar.

## Functions

### `handlePasswordChange`

Handles password input changes, calculates the strength, and updates the state.

### `defaultCalculateStrength`

Default function to calculate password strength based on length and optional character requirements.

## Styles

- `container`: Adds space at the top and padding inside the container.
- `input`: Styles for the TextInput, including border and padding.
- `barContainer`: Styles for the strength bar container, including height and background color.
- `strengthBar`: Styles for the strength bar, including height.
- `strengthText`: Styles for the strength text, including font size.

## Example

```tsx
<PasswordStrengthIndicator
    enableColorBar={true}
    forcedCharacters={/[A-Z]/}
    bannedCharacters={/[!@#\$%\^&\*]/}
    style={{
        container: { marginTop: 20 },
        input: { borderColor: 'blue' },
        strengthBarContainer: { backgroundColor: '#e0e0e0' },
        strengthBar: { height: 10 },
        strengthText: { fontSize: 14 },
    }}
/>
```

This example demonstrates how to use the `PasswordStrengthIndicator` component with custom styles and character requirements.