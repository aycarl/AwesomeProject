import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import TimeSelect from './components/timer';
import Mood from './components/mood';
import Header from './components/header';
import CountDownTimer from './components/count-down';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <CountDownTimer />
      <Mood />
      <TimeSelect />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
});
