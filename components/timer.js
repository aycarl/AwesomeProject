import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const TimeSelect = () => {
  return (
    <View style={styles.container}>
      <View><Button title="2 minutes" color="#4271B3" /></View>
      <View><Button title="5 minutes" color="#4271B3" /></View>
      <View><Button title="10 minutes" color="#4271B3" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#e1e177"
  },
})

export default TimeSelect;