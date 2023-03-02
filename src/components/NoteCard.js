import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NoteCard = ({title}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    color: 'black',
  },
});

export default NoteCard;
