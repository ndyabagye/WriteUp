import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the settings page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
  },
  text: {
    fontSize: 32,
    color: 'black',
  },
});

export default Settings;
