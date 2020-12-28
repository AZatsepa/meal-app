import React from 'react';
import {
  FlatList,
} from 'react-native';

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

CategoriesScreen.navigationOptions = () => ({
  headerTitle: 'Meal Categories',
});

CategoriesScreen.propTypes = {};

export default CategoriesScreen;
