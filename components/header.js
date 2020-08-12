import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Keep Calm & Meditate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 30,
    fontWeight: "400",
  }
})

export default Header;