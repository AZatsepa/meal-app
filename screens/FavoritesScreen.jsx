import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealsList from '../components/MealsList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  if (!favoriteMeals || favoriteMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some.</DefaultText>
      </View>
    );
  }
  return <MealsList meals={favoriteMeals} navigation={navigation} />;
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
