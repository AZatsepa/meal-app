import React from 'react';
import { useSelector } from 'react-redux';
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

const MealsList = ({ navigation, meals }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  return (
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
            isFav={favoriteMeals.some((meal) => meal.id === id)}
          />
        )}
        style={styles.mealsContainer}
      />
    </View>
  );
};

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
