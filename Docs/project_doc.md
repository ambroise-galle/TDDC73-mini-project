# Project Documentation

## Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [Carousel](#carousel)
  - [PasswordStrengthIndicator](#passwordstrengthindicator)
  - [App](#app)
- [Code Structure](#code-structure)

---

## Overview

This project is a React Native application that features two main components:

1. **Carousel**: A scrollable image carousel that supports auto-scrolling and indicators.
2. **PasswordStrengthIndicator**: A UI element to evaluate and display the strength of a password.

It also includes an interactive "OK" button that shows an alert message when pressed.

---

## Components

### Carousel

The `Carousel` component displays a series of images with optional auto-scrolling and visual indicators for navigation.

Click [here](./Carousel_doc.md) to see the Carousel doc.

### PasswordStrengthIndicator

The `PasswordStrengthIndicator` evaluates the strength of a password based on length, presence of required characters, and absence of banned characters.

Click [here](./PasswordStrengthIndicator_doc.md) to see the Password Strength Meter doc.

### App

The main application combines the `Carousel` and `PasswordStrengthIndicator` components. It also includes a button with an alert functionality.

#### Example Code

```tsx
<View style={styles.mainPage}>
  <Carousel
    data={images}
    autoScroll={false}
    showIndicators={true}
    imageStyle={customImageStyle}
  />
  <PasswordStrengthIndicator
    enableColorBar={true}
    forcedCharacters={/[!@#$%^&*]/}
    bannedCharacters={/[ ]/}
    style={customStyles}
  />
  <View style={styles.buttonView}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => Alert.alert("Thank you for your registration!")}
    >
      <Text style={styles.buttonText}>OK</Text>
    </TouchableOpacity>
  </View>
</View>
```

---

## Usage

- Add images to the `assets/images` folder.
- Update the `images` array in the `App` component with the correct paths.
- Customize styles as needed by editing the `styles` object or passing style props.

---

## Code Structure

```
root
├── app
│   ├── (tabs)
│   │   ├── carousel.tsx                    # Carousel Component
│   │   ├── password.tsx                    # Password Strength Indicator Component
│   │   ├── index.tsx                       # Main app file
├── assets
│   ├── images
│   │   ├── image1.png                      # First image carousel
│   │   ├── image2.png                      # Second image carousel
│   │   ├── image3.png                      # Thrid image carousel
├── Docs
│   ├── project_doc.md                      # Project documentation
│   ├── Carousel_doc.md                     # Carousel design pattern documentation
│   ├── PasswordStrengthIndicator_doc.md    # Password Strength Meter design pattern documentation
└── ...                                     # Additional configuration files
```
