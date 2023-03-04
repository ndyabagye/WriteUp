/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';

const NoteCard = ({note}) => {
  const [timesPressed, setTimesPressed] = useState(0);
  return (
    <Pressable
      onPress={() => setTimesPressed(current => current + 1)}
      style={({pressed}) => [
        {backgroundColor: pressed ? 'mintcream' : 'white'},
        styles.card,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: note.image}}
          />
        </View>
        <View style={{marginLeft: 12}}>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
              width: '95%',
            }}>
            <Text style={styles.header} ellipsizeMode="tail" numberOfLines={1}>
              {note.title}
            </Text>
            <Text>{timesPressed}</Text>
          </View>
          <View style={{marginTop: 4, borderWidth: 0, width: '85%'}}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={styles.noteText}>
              {note.body}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 90,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#E5E5E5',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  noteText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '400',
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
});

export default NoteCard;
