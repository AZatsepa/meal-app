import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import DefaultText from '../components/DefaultText';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const CategoryMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const catId = navigation.getParam('categoryId');
  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  if (!displayedMeals || displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return (
    <MealsList meals={displayedMeals} navigation={navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId) || {};
  return {
    headerTitle: selectedCategory.title,
  };
};

CategoryMealsScreen.propTypes = {};

export default CategoryMealsScreen;
