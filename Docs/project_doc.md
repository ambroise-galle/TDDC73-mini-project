# Project Documentation

## Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [Carousel](#carousel)
  - [PasswordStrengthIndicator](#passwordstrengthindicator)
  - [App](#app)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Customization](#customization)

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

#### Props

- **`data`** (required): An array of image objects `{ id: number; uri: any }`.
- **`autoScroll`** (optional, default: `false`): Enables automatic scrolling.
- **`autoScrollInterval`** (optional, default: `3000`): Time interval (in ms) for auto-scrolling.
- **`showIndicators`** (optional, default: `true`): Displays navigation indicators.
- **`imageStyle`** (optional): Custom styles for images.
- **`style`** (optional): Custom styles for the carousel container.

#### Example Usage

```tsx
<Carousel
  data={images}
  autoScroll={true}
  autoScrollInterval={5000}
  showIndicators={true}
  imageStyle={{ width: 200, height: 200, borderRadius: 10 }}
/>
```

---

### PasswordStrengthIndicator

The `PasswordStrengthIndicator` evaluates the strength of a password based on length, presence of required characters, and absence of banned characters.

#### Props

- **`enableColorBar`** (optional, default: `true`): Displays a color bar to indicate strength.
- **`calculateStrength`** (optional): Custom logic for password evaluation.
- **`forcedCharacters`** (optional): Regex pattern for required characters.
- **`bannedCharacters`** (optional): Regex pattern for disallowed characters.
- **`style`** (optional): Custom styles for various subcomponents.

#### Example Usage

```tsx
<PasswordStrengthIndicator
  enableColorBar={true}
  forcedCharacters={/[!@#$%^&*]/}
  bannedCharacters={/[ ]/}
  style={customStyles}
/>
```

---

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

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npx react-native start
   ```

4. Run the app on a device or emulator:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios     # For iOS
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
│   │   ├── carousel.tsx            # Carousel Component
│   │   ├── password.tsx            # Password Strength Indicator Component
│   │   ├── index.tsx               # Main app file
├── assets                          # Folder containing image assets
│   ├── image1.png                  # First image carousel
│   ├── image2.png                  # Second image carousel
│   ├── image3.png                  # Thrid image carousel
└── ...                             # Additional configuration files
```

---

## Customization

### Styling

- Modify the `styles` object in each component file to update default styles.
- Use the `style` prop to pass custom styles for individual components.

### Password Strength Logic

- Override the `calculateStrength` prop in `PasswordStrengthIndicator` to implement custom logic.

#### Example

```tsx
const customStrengthCalculator = (input: string): StrengthResult => {
  // Custom logic here
};

<PasswordStrengthIndicator calculateStrength={customStrengthCalculator} />;
```

### Carousel Behavior

- Adjust the `autoScrollInterval` prop for desired timing.
- Enable or disable indicators with the `showIndicators` prop.
