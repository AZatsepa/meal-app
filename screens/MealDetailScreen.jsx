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

const MealDetailScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>The Meal Detail Screen</Text>
    <Button title="Go back to Categories!" onPress={() => navigation.popToTop()} />
  </View>
);

MealDetailScreen.propTypes = {};

export default MealDetailScreen;
