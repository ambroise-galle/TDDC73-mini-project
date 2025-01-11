import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Image, ImageStyle, ViewStyle, LayoutChangeEvent } from 'react-native';

//const { width } = Dimensions.get('window');

type ImageItem = {
  id: number;
  uri: any;
};

type CarouselProps = {
  data: ImageItem[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
  showIndicators?: boolean;
  imageStyle?: ImageStyle;
  style?: ViewStyle;
};

const Carousel: React.FC<CarouselProps> = ({
  data = [],
  autoScroll = false,
  autoScrollInterval = 3000,
  showIndicators = true,
  imageStyle,
  style,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (autoScroll) {
      timer = setInterval(() => {
        scrollToNext();
      }, autoScrollInterval);
    }
    return () => clearInterval(timer);
  }, [autoScroll, autoScrollInterval, currentIndex]);

  const scrollToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % data.length;
    scrollViewRef.current?.scrollTo({
      x: nextIndex * itemWidth,
      animated: true,
    });
    setCurrentIndex(nextIndex);
  }, [currentIndex, data.length, itemWidth]);

  const handleScroll = useCallback((event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / itemWidth);
    setCurrentIndex(newIndex);
  }, [itemWidth]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setItemWidth(width);
  };

  return (
    <View style={[styles.container, style]} onLayout={handleLayout}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View key={item.id} style={[styles.itemContainer, { width: itemWidth }]}>
            <Image source={item.uri} style={[styles.image, imageStyle]} />
          </View>
        ))}
      </ScrollView>
      {showIndicators && (
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentIndex ? styles.activeIndicator : null,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});

export default Carousel;