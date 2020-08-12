import React from 'react';
import { View, StyleSheet } from 'react-native';

const Mood = () => {
  return(
    <View style={styles.container}>
      <View style={styles.sunset}></View>
      <View style={styles.sunrise}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
    backgroundColor: "#e1e1e1"
  },
  sunset: {
    width: 50,
    backgroundColor: "#4271B3"
  },
  sunrise: {
    width: 100,
    backgroundColor: "#395B50"
  }
})

export default Mood;