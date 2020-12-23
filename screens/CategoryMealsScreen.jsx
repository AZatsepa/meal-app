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

const CategoryMealsScreen = () => (
  <View style={styles.screen}>
    <Text>The Category Meals Screen</Text>
  </View>
);

CategoryMealsScreen.propTypes = {};

export default CategoryMealsScreen;
