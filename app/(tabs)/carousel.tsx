import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ProfilePictureCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Array of image sources
  const images = [
    require('../../assets/images/image1.png'),
    require('../../assets/images/image2.png'),
    require('../../assets/images/image3.png'),
    require('../../assets/images/image1.png'),
  ];

  // Function to render each image item
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity onPress={() => setSelectedImage(index)}>
      <Image
        source={item}
        style={[
          styles.image,
          selectedImage === index && styles.selectedImage, // Add border if selected
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Profile Picture</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />
      {selectedImage !== null && (
        <Text style={styles.selectedText}>Selected Picture: {selectedImage + 1}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carouselContainer: {
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImage: {
    borderColor: 'blue', // Highlight the selected image
  },
  selectedText: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default ProfilePictureCarousel;
