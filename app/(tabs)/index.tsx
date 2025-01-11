import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Carousel from './carousel';
import PasswordStrengthIndicator from './passwordStrength';

const App = () => {
  const images = [
    { id: 1, uri: require('../../assets/images/image1.png') },
    { id: 2, uri: require('../../assets/images/image2.png') },
    { id: 3, uri: require('../../assets/images/image3.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your profile picture</Text>
      <Carousel
        data={images}
        showIndicators={true}
        imageStyle={styles.carouselImage}
      />
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#ccc"
      />
      <PasswordStrengthIndicator
        enableColorBar={true}
        placeholderTextColor='#ccc'
        style={{
          container: styles.passwordContainer,
          input: styles.input,
          strengthBarContainer: styles.strengthBarContainer,
          strengthBar: styles.strengthBar,
          strengthText: styles.strengthText,
        }}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213555',
    alignContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  carouselImage: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    color: '#fff',
  },
  passwordContainer: {
    width: '100%',
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
    color: '#fff',
  },
});

export default App;