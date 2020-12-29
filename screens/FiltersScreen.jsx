import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const FiltersScreen = () => (
  <View style={styles.screen}>
    <Text>The Filters screen</Text>
  </View>
);

FiltersScreen.navigationOptions = (navData) => ({
  headerTitle: 'Filter Meals',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
});

FiltersScreen.propTypes = {};

export default FiltersScreen;
