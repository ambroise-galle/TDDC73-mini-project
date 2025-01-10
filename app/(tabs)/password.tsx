import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native';

interface PasswordStrengthIndicatorProps {
  enableColorBar?: boolean; // Optional prop to enable or disable the password strength color bar
}

// PasswordStrengthIndicator component
const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  enableColorBar = true,
}) => {
  const [password, setPassword] = useState(''); // State to track the input password
  const [strength, setStrength] = useState(''); // State to store the calculated strength level (e.g., "Weak", "Medium", "Strong")
  const [barWidth] = useState(new Animated.Value(0));   // Animated value for controlling the width of the color bar
  const [barColor, setBarColor] = useState('#ccc'); // State for dynamically changing the color of the strength bar

  // Function to calculate password strength based on input length
  const calculateStrength = (input: string) => {
    if (input.length < 6) return { level: 'Weak', width: 30, color: 'red' };    // Weak: short passwords
    if (input.length >= 6 && input.length < 12) return { level: 'Medium', width: 60, color: 'orange' }; // Medium: passwords of moderate length
    if (input.length >= 12) return { level: 'Strong', width: 100, color: 'green' }; // Strong: longer passwords
    return { level: '', width: 0, color: '#ccc' };  // Default case for empty or invalid input
  };

  // Function to handle changes in the password input field
  const handlePasswordChange = (input: string) => {
    setPassword(input); // Update the password state with user input

    // Calculate password strength properties (level, width, color)
    const { level, width, color } = calculateStrength(input);
    setStrength(level); // Update strength level (e.g., "Weak")
    setBarColor(color); // Update bar color based on the strength level

    // Animate the bar width to reflect the calculated strength level
    Animated.timing(barWidth, {
      toValue: width,   // Target width based on calculated strength
      duration: 300,    // Animation duration in milliseconds
      useNativeDriver: false,   // Disable native driver because we're animating layout properties
    }).start();
  };

  // Component rendering
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter your password"
        value={password}
        onChangeText={handlePasswordChange}
      />
      {enableColorBar && (
        <View style={styles.barContainer}>
          <Animated.View
            style={[
              styles.strengthBar,
              {
                width: barWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
                backgroundColor: barColor,
              },
            ]}
          />
        </View>
      )}
      <Text style={styles.strengthText}>
        Strength: {strength}
      </Text>
    </View>
  );
};

// Style definitions for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  barContainer: {
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

export default PasswordStrengthIndicator;
