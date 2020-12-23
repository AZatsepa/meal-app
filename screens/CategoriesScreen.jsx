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

const CategoriesScreen = () => (
  <View style={styles.screen}>
    <Text>The Categories Screen</Text>
  </View>
);

CategoriesScreen.propTypes = {};

export default CategoriesScreen;
