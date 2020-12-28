import React from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

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

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
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
