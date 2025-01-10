import React from 'react';
import { View, StyleSheet, Text, ImageStyle } from 'react-native';
import Carousel from './carousel';

const App = () => {
  const images = [
    { id: 1, uri: require('../../assets/images/image1.png') },
    { id: 2, uri: require('../../assets/images/image2.png') },
    { id: 3, uri: require('../../assets/images/image3.png') },
  ];

  return (
    <View>
      <Carousel
        data={images}
        autoScroll={true}
        autoScrollInterval={3000}
        showIndicators={true}
        imageStyle={customImageStyle}
      />
    </View>
  );
};
const customImageStyle: ImageStyle = {
  width: 200,
  height: 200,
  resizeMode: 'cover',
};
const styles = StyleSheet.create({
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