import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  return <MealsList meals={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => ({
  headerTitle: 'Your Favorites',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
});

FavoritesScreen.propTypes = {};

export default FavoritesScreen;
