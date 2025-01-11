import React from 'react';
import { View, StyleSheet, ImageStyle, Alert, TouchableOpacity, Text } from 'react-native';
import Carousel from './carousel';
import PasswordStrengthIndicator from './password';

const App = () => {
  const images = [
    { id: 1, uri: require('../../assets/images/image1.png') },
    { id: 2, uri: require('../../assets/images/image3.png') },
    { id: 3, uri: require('../../assets/images/image2.png') },
  ];

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
      forcedCharacters={/[!@#$%^&*]/} // Require at least one special character
      bannedCharacters={/[ ]/} // Disallow spaces
      style={customStyles} // Pass custom styles
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Thank you for your registration!')}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const customImageStyle: ImageStyle = {
  width: 200,
  height: 200,
  resizeMode: 'cover',
  borderRadius: '50%',
  padding: 20,
};

const styles = StyleSheet.create({
  mainPage: {
    // backgroundColor: 'white',
  },
  buttonView: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#6200ea', // Purple background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});

export default App;