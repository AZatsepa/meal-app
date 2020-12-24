import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const FavoritesScreen = () => (
  <View style={styles.screen}>
    <Text>The Favorites Screen</Text>
  </View>
);

FavoritesScreen.propTypes = {};

export default FavoritesScreen;
