import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Animated, TextStyle, ViewStyle } from 'react-native';

// Interface defining the structure of the strength calculation result
interface StrengthResult {
  level: string; // Strength level description (e.g., Weak, Medium, Strong)
  width: number; // Percentage width for the strength bar
  color: string; // Color associated with the strength level
}

// Interface defining props for the PasswordStrengthIndicator component
interface PasswordStrengthIndicatorProps {
  enableColorBar?: boolean; // Whether to show the color bar
  calculateStrength?: (input: string) => StrengthResult; // Custom strength calculation logic
  forcedCharacters?: RegExp; // Characters that must be present in the password
  bannedCharacters?: RegExp; // Characters that must not be present in the password
  style?: {
    container?: ViewStyle; // Style for the main container
    input?: TextStyle; // Style for the TextInput
    strengthBarContainer?: ViewStyle; // Style for the strength bar container
    strengthBar?: ViewStyle; // Style for the strength bar
    strengthText?: TextStyle; // Style for the strength text
  };
}

// Default strength calculation function
const defaultCalculateStrength = (
  input: string,
  forcedCharacters?: RegExp,
  bannedCharacters?: RegExp
): StrengthResult => {
  // Check if the password contains banned characters
  if (bannedCharacters && bannedCharacters.test(input)) {
    return { level: 'Invalid', width: 0, color: 'red' };
  }
  // Check if the password is missing required characters
  if (forcedCharacters && !forcedCharacters.test(input)) {
    return { level: 'Missing Required Characters', width: 30, color: 'orange' };
  }
  // Evaluate password length to determine strength
  if (input.length < 6) return { level: 'Weak', width: 30, color: 'red' };
  if (input.length >= 6 && input.length < 12) return { level: 'Medium', width: 60, color: 'orange' };
  if (input.length >= 12) return { level: 'Strong', width: 100, color: 'green' };
  return { level: '', width: 0, color: '#ccc' }; // Default case
};

// PasswordStrengthIndicator component
const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  enableColorBar = true, // Show color bar by default
  calculateStrength = defaultCalculateStrength, // Use default strength calculation if none provided
  forcedCharacters, // Required characters for the password
  bannedCharacters, // Disallowed characters for the password
  style = {}, // Custom styles
}) => {
  // State to hold the entered password
  const [password, setPassword] = useState('');
  // State to hold the strength level text
  const [strength, setStrength] = useState('');
  // Animated value for the strength bar width
  const [barWidth] = useState(new Animated.Value(0));
  // State to hold the color of the strength bar
  const [barColor, setBarColor] = useState('#ccc');

  // Function to handle password input changes
  const handlePasswordChange = (input: string) => {
    setPassword(input); // Update password state

    // Calculate strength using the provided or default logic
    const { level, width, color } = calculateStrength(input, forcedCharacters, bannedCharacters);
    setStrength(level); // Update strength level
    setBarColor(color); // Update bar color

    // Animate the width of the strength bar
    Animated.timing(barWidth, {
      toValue: width, // Target width percentage
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: false, // Use the JavaScript thread for animation
    }).start();
  };

  return (
    <View style={[styles.container, style.container]}>
      
      <TextInput
        style={[styles.input, style.input]} // Apply default and custom styles
        secureTextEntry // Hide password input
        placeholder="Enter your password" // Placeholder text
        value={password} // Bind input value to state
        onChangeText={handlePasswordChange} // Handle text input changes
      />
      
      {enableColorBar && (
        <View style={[styles.barContainer, style.strengthBarContainer]}>
          <Animated.View
            style={[
              styles.strengthBar, // Default bar style
              style.strengthBar, // Custom bar style
              { width: barWidth.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }, // Animated width
              { backgroundColor: barColor }, // Dynamic color
            ]}
          />
        </View>
      )}
      
      <Text style={[styles.strengthText, style.strengthText]}>
        Strength: {strength}
      </Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
  },
  input: {
    borderWidth: 1, // Border thickness
    borderColor: '#ccc', // Border color
    borderRadius: 5, // Rounded corners
    padding: 10, // Padding inside the input field
    marginBottom: 10, // Space below the input field
  },
  barContainer: {
    height: 10, // Height of the strength bar container
    backgroundColor: '#f0f0f0', // Light background color
    borderRadius: 5, // Rounded corners
    overflow: 'hidden', // Ensure the strength bar stays within bounds
    marginBottom: 10, // Space below the bar container
  },
  strengthBar: {
    height: '100%', // Fill the height of the container
  },
  strengthText: {
    fontSize: 16, // Font size for the strength text
  },
});

export default PasswordStrengthIndicator;
