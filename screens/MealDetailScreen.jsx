import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  image: {
    height: 200,
    width: '100%',
  },
  listItem: {
    borderColor: Colors.grey,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
});

const ListItem = ({ children }) => (
  <View style={styles.listItem}>
    <DefaultText>{children}</DefaultText>
  </View>
);

const MealDetailScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = navigation.getParam('mealId');
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const {
    duration, complexity, affordability, imageUrl, ingredients, steps,
  } = selectedMeal;

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>
          {duration}
          m
        </DefaultText>
        <DefaultText>{complexity.toUpperCase()}</DefaultText>
        <DefaultText>{affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => <ListItem key={ingredient}>{ingredient}</ListItem>)}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

MealDetailScreen.propTypes = {};

export default MealDetailScreen;
