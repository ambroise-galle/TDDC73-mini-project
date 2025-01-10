import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});
