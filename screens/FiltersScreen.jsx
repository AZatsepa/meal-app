import React from 'react';
import { string } from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const FiltersScreen = () => (
  <View style={styles.screen}>
    <Text>The Filters screen</Text>
  </View>
);

FiltersScreen.propTypes = {};

export default FiltersScreen;
