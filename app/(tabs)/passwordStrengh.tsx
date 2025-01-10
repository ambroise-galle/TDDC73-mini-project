import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native';

interface PasswordStrengthIndicatorProps {
  enableColorBar?: boolean; // Whether to show the color bar
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  enableColorBar = true,
}) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [barWidth] = useState(new Animated.Value(0));
  const [barColor, setBarColor] = useState('#ccc');

  const calculateStrength = (input: string) => {
    if (input.length < 6) return { level: 'Weak', width: 30, color: 'red' };
    if (input.length >= 6 && input.length < 12) return { level: 'Medium', width: 60, color: 'orange' };
    if (input.length >= 12) return { level: 'Strong', width: 100, color: 'green' };
    return { level: '', width: 0, color: '#ccc' };
  };

  const handlePasswordChange = (input: string) => {
    setPassword(input);

    const { level, width, color } = calculateStrength(input);
    setStrength(level);
    setBarColor(color);

    Animated.timing(barWidth, {
      toValue: width,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

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
