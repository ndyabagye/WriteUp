/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import NoteCard from '../components/NoteCard';

const userChatList = [
  {
    id: 1,
    title: 'Welcome to React Native',
    image: 'https://picsum.photos/200/300',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nemo reprehenderit consequuntur quisquam debitis nam fugit exercitationem laudantium animi voluptatum. Porro repudiandae eos minima at illo modi animi eligendi hic.',
  },
  {
    id: 2,
    title: 'Replicating MiUI notes',
    image: 'https://picsum.photos/200/300',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nemo reprehenderit consequuntur quisquam debitis nam fugit exercitationem laudantium animi voluptatum. Porro repudiandae eos minima at illo modi animi eligendi hic.',
  },
  {
    id: 3,
    title: 'Sometimes you should learn React Native',
    image: 'https://picsum.photos/200/300',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nemo reprehenderit consequuntur quisquam debitis nam fugit exercitationem laudantium animi voluptatum. Porro repudiandae eos minima at illo modi animi eligendi hic.',
  },
  {
    id: 4,
    title: 'Fasting and its effects on the body',
    image: 'https://picsum.photos/200/300',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nemo reprehenderit consequuntur quisquam debitis nam fugit exercitationem laudantium animi voluptatum. Porro repudiandae eos minima at illo modi animi eligendi hic.',
  },
];

const chatListItem = (item, index) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <NoteCard note={item} />
    </TouchableWithoutFeedback>
  );
};

const Notes = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={userChatList}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={
          <View style={{width: '100%', height: moderateScale(8)}} />
        }
        ListFooterComponent={<View style={{width: '100%', height: 28}} />}
        renderItem={(item, index) => chatListItem(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
});

export default Notes;
