import React from 'react';
import {
  arrayOf,
  shape,
  string,
  number,
} from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const styles = StyleSheet.create({
  mealsContainer: {
    width: '100%',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
});

const MealsList = ({ navigation, meals }) => (
  <View style={styles.screen}>
    <FlatList
      data={meals}
      renderItem={({
        item: {
          id,
          title,
          duration,
          complexity,
          affordability,
          imageUrl,
        },
      }) => (
        <MealItem
          title={title}
          onSelect={navigation.navigate}
          mealId={id}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          image={imageUrl}
        />
      )}
      style={styles.mealsContainer}
    />
  </View>
);

MealsList.propTypes = {
  meals: arrayOf(
    shape({
      title: string.isRequired,
      id: string.isRequired,
      duration: number.isRequired,
      complexity: string.isRequired,
      affordability: string.isRequired,
      imageUrl: string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MealsList;
