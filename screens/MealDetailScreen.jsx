import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
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
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    duration, complexity, affordability, imageUrl, ingredients, steps,
  } = selectedMeal;
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
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId) || {};
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => console.log('Marked as favorite')} />
      </HeaderButtons>
    ),
  };
};

MealDetailScreen.propTypes = {};

export default MealDetailScreen;
