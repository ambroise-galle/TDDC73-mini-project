import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Image, ImageStyle, ViewStyle, LayoutChangeEvent } from 'react-native';

// Define the structure of each image item in the carousel
// Each image item has an id and a URI for the image source
type ImageItem = {
  id: number;
  uri: any;
};

// Define the props for the Carousel component
type CarouselProps = {
  data: ImageItem[]; // Array of image items to display in the carousel
  autoScroll?: boolean; // Whether the carousel should scroll automatically
  autoScrollInterval?: number; // Interval for auto-scrolling (in milliseconds)
  showIndicators?: boolean; // Whether to show navigation indicators below the carousel
  imageStyle?: ImageStyle; // Custom styles for the images
  style?: ViewStyle; // Custom styles for the main container
};

const Carousel: React.FC<CarouselProps> = ({
  data = [], // Default to an empty array if no data is provided
  autoScroll = false, // Auto-scroll is disabled by default
  autoScrollInterval = 3000, // Default auto-scroll interval is 3000ms
  showIndicators = true, // Show indicators by default
  imageStyle, // Custom image styles
  style, // Custom container styles
}) => {
  const scrollViewRef = useRef<ScrollView>(null); // Ref to access the ScrollView component
  const [currentIndex, setCurrentIndex] = useState(0); // Track the currently visible image index
  const [itemWidth, setItemWidth] = useState(0); // Track the width of each carousel item

  // Effect to handle auto-scrolling behavior
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (autoScroll) {
      // Set up a timer to scroll to the next image at regular intervals
      timer = setInterval(() => {
        scrollToNext();
      }, autoScrollInterval);
    }
    // Clean up the timer when the component unmounts or dependencies change
    return () => clearInterval(timer);
  }, [autoScroll, autoScrollInterval, currentIndex]);

  // Function to scroll to the next image in the carousel
  const scrollToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % data.length; // Calculate the next index (wrap around if at the end)
    scrollViewRef.current?.scrollTo({
      x: nextIndex * itemWidth, // Scroll horizontally to the next item
      animated: true, // Animate the scroll transition
    });
    setCurrentIndex(nextIndex); // Update the current index state
  }, [currentIndex, data.length, itemWidth]);

  // Function to handle scroll events and update the current index
  const handleScroll = useCallback(
    (event: any) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x; // Get the horizontal scroll position
      const newIndex = Math.round(contentOffsetX / itemWidth); // Calculate the index based on item width
      setCurrentIndex(newIndex); // Update the current index state
    },
    [itemWidth]
  );

  // Function to handle layout changes and calculate item width
  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout; // Get the width of the container
    setItemWidth(width); // Update the item width state
  };

  return (
    <View style={[styles.container, style]} onLayout={handleLayout}>
      {/* Scrollable container for carousel items */}
      <ScrollView
        ref={scrollViewRef} // Attach the ref to the ScrollView
        horizontal // Enable horizontal scrolling
        pagingEnabled // Snap to the nearest item when scrolling stops
        showsHorizontalScrollIndicator={false} // Hide the default horizontal scroll indicator
        onScroll={handleScroll} // Handle scroll events to track the current index
        scrollEventThrottle={16} // Set the scroll event frequency (in ms)
      >
        {/* Render each image item */}
        {data.map((item, index) => (
          <View key={item.id} style={[styles.itemContainer, { width: itemWidth }]}> {/* Adjust width dynamically */}
            <Image source={item.uri} style={[styles.image, imageStyle]} /> {/* Display the image */}
          </View>
        ))}
      </ScrollView>
      {/* Navigation indicators */}
      {showIndicators && (
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator, // Default indicator style
                index === currentIndex ? styles.activeIndicator : null, // Highlight the active indicator
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

// Styles for the carousel component
const styles = StyleSheet.create({
  container: {
    position: 'relative', // Ensure proper positioning of child elements
  },
  itemContainer: {
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center', // Center the image horizontally
  },
  indicatorContainer: {
    flexDirection: 'row', // Arrange indicators in a row
    position: 'relative', // Position relative to the container
    bottom: 10, // Position slightly above the bottom of the container
    alignSelf: 'center', // Center the indicators horizontally
  },
  indicator: {
    height: 8, // Height of the indicator
    width: 8, // Width of the indicator
    borderRadius: 4, // Make indicators circular
    backgroundColor: '#ccc', // Default indicator color
    margin: 5, // Space between indicators
  },
  activeIndicator: {
    backgroundColor: '#000', // Color for the active indicator
  },
  image: {
    width: '100%', // Image width fills the container
    height: 300, // Fixed height for the images
    resizeMode: 'cover', // Ensure the image covers the available space proportionally
  },
});

export default Carousel;