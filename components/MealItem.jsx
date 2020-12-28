import React from 'react';
import { string, func, number } from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  mealDetail: {
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  mealHeader: {
    height: '85%',
  },
  mealItem: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    height: 200,
    overflow: 'hidden',
    width: '100%',
  },
  mealRow: {
    flexDirection: 'row',
  },
  title: {
    backgroundColor: Colors.blackTransparent,
    color: Colors.white,
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: 'center',
  },
});

const MealItem = ({
  title, onSelect, mealId, duration, complexity, affordability, image,
}) => (
  <View style={styles.mealItem}>
    <TouchableOpacity
      onPress={() => onSelect({
        routeName: 'MealDetail',
        params: {
          mealId,
        },
      })}
    >
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: image }} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>
            {duration}
            m
          </Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

MealItem.propTypes = {
  onSelect: func.isRequired,
  title: string.isRequired,
  mealId: string.isRequired,
  duration: number.isRequired,
  complexity: string.isRequired,
  affordability: string.isRequired,
  image: string.isRequired,
};

export default MealItem;
