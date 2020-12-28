import React from 'react';
import { func, string } from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  greedItem: {
    alignItems: 'flex-end',
    borderRadius: 10,
    elevation: 3,
    flex: 1,
    height: 150,
    justifyContent: 'flex-end',
    margin: 15,
    padding: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

const CategoryGridTile = ({
  onSelect, categoryId, title, color,
}) => (
  <TouchableOpacity
    style={{ ...styles.greedItem, ...{ backgroundColor: color } }}
    onPress={() => onSelect({
      routeName: 'CategoryMeals',
      params: {
        categoryId,
      },
    })}
  >
    <View>
      <Text
        style={styles.title}
        numberOfLines={2}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

CategoryGridTile.propTypes = {
  onSelect: func.isRequired,
  categoryId: string.isRequired,
  title: string.isRequired,
  color: string.isRequired,
};

export default CategoryGridTile;
