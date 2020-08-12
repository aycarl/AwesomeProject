import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

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
      <Video 
        source={{uri: "./assets/video/beach.mp4"}}
        ref={
          (ref) => {
            this.player = ref
          }
        }
        onBuffer={this.onBuffer}
        onError={this.videoError}
        style={styles.backgroundVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
  backgroundVideo: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
