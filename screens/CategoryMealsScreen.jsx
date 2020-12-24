import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const CategoryMealsScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>The Category Meals Screen</Text>
    <Button title="Go to Details!" onPress={() => navigation.navigate('MealDetail')} />
    <Button title="Go Back!" onPress={() => navigation.goBack()} />
  </View>
);

CategoryMealsScreen.propTypes = {};

export default CategoryMealsScreen;
