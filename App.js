import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NoteCard from './src/components/NoteCard';

const App = () => {
  return (
    <>
      <ScrollView style={styles.page}>
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
        <NoteCard title="One" />
        <NoteCard title="Two" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default App;
