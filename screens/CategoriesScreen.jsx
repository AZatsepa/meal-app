import React from 'react';
import {
  FlatList, StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

import CATEGORIES from '../data/dummy-data';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  greedItem: {
    alignItems: 'center',
    borderColor: Colors.black,
    borderWidth: 1,
    flex: 1,
    height: 150,
    justifyContent: 'center',
    margin: 15,
  },
});

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => (
    <TouchableOpacity
      style={styles.greedItem}
      onPress={() => navigation.navigate({
        routeName: 'CategoryMeals',
        params: {
          categoryId: itemData.item.id,
        },
      })}
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = () => ({
  headerTitle: 'Meal Categories',
});

CategoriesScreen.propTypes = {};

export default CategoriesScreen;
