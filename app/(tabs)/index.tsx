import React from 'react';
import { View, StyleSheet, ImageStyle, Alert, TouchableOpacity, Text } from 'react-native';
import Carousel from './carousel'; // Importing the Carousel component
import PasswordStrengthIndicator from './password'; // Importing the PasswordStrengthIndicator component

const App = () => {
  // Array of image objects to be displayed in the Carousel
  const images = [
    { id: 1, uri: require('../../assets/images/image1.png') }, // First image
    { id: 2, uri: require('../../assets/images/image3.png') }, // Second image
    { id: 3, uri: require('../../assets/images/image2.png') }, // Third image
  ];

  const customCalculateStrength = (input: string, forcedCharacters?: RegExp, bannedCharacters?: RegExp) => {
    if (bannedCharacters && bannedCharacters.test(input)) {
      return { level: 'Invalid', width: 0, color: 'red' };
    }
    if (forcedCharacters && !forcedCharacters.test(input)) {
      return { level: 'Missing Required Characters: !@#$%^&*', width: 20, color: 'purple' };
    }
    if (input.length < 8) return { level: 'Too Short', width: 20, color: 'red' };
    if (input.length >= 8 && input.match(/[A-Z]/) && input.match(/[0-9]/)) {
      return { level: 'Secure', width: 100, color: 'green' };
    }
    return { level: 'Average', width: 50, color: 'orange' };
  };
  

  return (
    <View style={styles.mainPage}> 
      
      <Carousel
        data={images} 
        autoScroll={false} 
        autoScrollInterval={3000} 
        showIndicators={true} 
        imageStyle={customImageStyle} 
      />
      
      
      <PasswordStrengthIndicator
        enableColorBar={true} 
        forcedCharacters={/[!@#$%^&*]/} 
        bannedCharacters={/[ ]/} 
        calculateStrength={customCalculateStrength}
        style={customStyles} 
      />

      
      <View style={styles.buttonView}> 
        <TouchableOpacity
          style={styles.button} 
          onPress={() => Alert.alert('Thank you for your registration!')} 
        >
          <Text style={styles.buttonText}>OK</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    padding: 20, // Add padding to the PasswordStrengthIndicator container
  },
});

const customImageStyle: ImageStyle = {
  width: 200, // Set a fixed width for images
  height: 200, // Set a fixed height for images
  resizeMode: 'cover', // Ensure the image covers the available space proportionally
  borderRadius: '50%', // Make images circular
  padding: 20, // Add padding around images
};

const styles = StyleSheet.create({
  mainPage: {
  },
  buttonView: {
    padding: 20, // Add padding around the button
    justifyContent: 'center', // Center the button vertically
    alignItems: 'center', // Center the button horizontally
    backgroundColor: '#f5f5f5', // Light gray background color
  },
  button: {
    backgroundColor: '#6200ea', // Purple background color for the button
    paddingVertical: 15, // Vertical padding inside the button
    paddingHorizontal: 30, // Horizontal padding inside the button
    borderRadius: 10, // Rounded corners for the button
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset (downward)
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 5, // Elevation for Android shadow
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 18, // Font size for the button label
    fontWeight: '600', // Semi-bold font weight
    textAlign: 'center', // Center the text horizontally
  },
  slide: {
    flex: 1, // Take up available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#fff', // White background color
  },
  image: {
    width: '100%', // Image width fills the container
    height: 300, // Fixed height for the images
    resizeMode: 'cover', // Ensure the image covers the available space proportionally
  },
});

export default App;
