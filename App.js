import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/index';
import Button from './src/components/Buttons/Button';
export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
      {/* <Button/> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
