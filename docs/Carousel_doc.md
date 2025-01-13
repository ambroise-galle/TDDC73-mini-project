# Carousel Component Documentation

## Overview

The `Carousel` component is a versatile and customizable image carousel for React Native applications. It allows you to display a series of images with optional auto-scrolling and navigation indicators.

## Props

### `data: ImageItem[]`

- **Type**: Array of `ImageItem`
- **Required**: Yes
- **Description**: An array of image items to display in the carousel. Each `ImageItem` should have an `id` and a `uri` for the image source.

### `autoScroll: boolean`

- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Determines whether the carousel should scroll automatically.

### `autoScrollInterval: number`

- **Type**: Number
- **Required**: No
- **Default**: `3000`
- **Description**: The interval for auto-scrolling in milliseconds.

### `showIndicators: boolean`

- **Type**: Boolean
- **Required**: No
- **Default**: `true`
- **Description**: Determines whether to show navigation indicators below the carousel.

### `imageStyle: ImageStyle`

- **Type**: Object
- **Required**: No
- **Description**: Custom styles for the images.

### `style: ViewStyle`

- **Type**: Object
- **Required**: No
- **Description**: Custom styles for the main container.

## Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import Carousel from './path/to/Carousel';

const imageData = [
    { id: 1, uri: require('./path/to/image1.jpg') },
    { id: 2, uri: require('./path/to/image2.jpg') },
    { id: 3, uri: require('./path/to/image3.jpg') },
];

const App = () => {
    return (
        <View>
            <Carousel
                data={imageData}
                autoScroll={true}
                autoScrollInterval={5000}
                showIndicators={true}
                imageStyle={{ borderRadius: 10 }}
                style={{ marginTop: 20 }}
            />
        </View>
    );
};

export default App;
```

## Component Structure

### `ImageItem`

```ts
type ImageItem = {
    id: number;
    uri: any;
};
```

### `CarouselProps`

```ts
type CarouselProps = {
    data: ImageItem[];
    autoScroll?: boolean;
    autoScrollInterval?: number;
    showIndicators?: boolean;
    imageStyle?: ImageStyle;
    style?: ViewStyle;
};
```

## Internal State and Refs

- `scrollViewRef`: A reference to the `ScrollView` component.
- `currentIndex`: Tracks the currently visible image index.
- `itemWidth`: Tracks the width of each carousel item.

## Functions

### `scrollToNext`

Scrolls to the next image in the carousel.

### `handleScroll`

Handles scroll events and updates the current index.

### `handleLayout`

Handles layout changes and calculates item width.

## Styles

- `container`: Ensures proper positioning of child elements.
- `itemContainer`: Centers the image both vertically and horizontally.
- `indicatorContainer`: Arranges indicators in a row and positions them relative to the container.
- `indicator`: Default style for indicators.
- `activeIndicator`: Style for the active indicator.
- `image`: Styles for the images.

## Example

```tsx
<Carousel
    data={imageData}
    autoScroll={true}
    autoScrollInterval={3000}
    showIndicators={true}
    imageStyle={{ borderRadius: 10 }}
    style={{ marginTop: 20 }}
/>
```

This example demonstrates how to use the `Carousel` component with custom styles and auto-scrolling enabled.
