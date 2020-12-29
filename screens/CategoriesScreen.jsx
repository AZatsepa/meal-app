import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => (
  <FlatList
    numColumns={2}
    data={CATEGORIES}
    renderItem={({ item: { title, id, color } }) => (
      <CategoryGridTile
        onSelect={navigation.navigate}
        title={title}
        categoryId={id}
        color={color}
      />
    )}
  />
);

CategoriesScreen.navigationOptions = (navData) => ({
  headerTitle: 'Meal Categories',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
});

CategoriesScreen.propTypes = {};

export default CategoriesScreen;
