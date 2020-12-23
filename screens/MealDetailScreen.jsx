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

const MealDetailScreen = () => (
  <View style={styles.screen}>
    <Text>The Meal Detail Screen</Text>
  </View>
);

MealDetailScreen.propTypes = {};

export default MealDetailScreen;
