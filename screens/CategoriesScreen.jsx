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

const CategoriesScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>The Categories Screen</Text>
    <Button title="Go to Meals!" onPress={() => navigation.navigate({ routeName: 'CategoryMeals' })} />
  </View>
);

CategoriesScreen.propTypes = {};

export default CategoriesScreen;
