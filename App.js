import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <View>
      <Navbar title="Unsplash" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
