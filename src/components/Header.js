import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={ styles.headerContainer }>
      <Text style={ styles.header }>Jobs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
    backgroundColor: "#292972",
    height: 65,
    justifyContent: "center"
  },
  header: {
    fontWeight: "bold",
    color: "whitesmoke",
    fontSize: 24
  }
});

export default Header;
