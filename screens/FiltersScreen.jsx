import React, { useState, useEffect, useCallback } from 'react';
import { string, bool, func } from 'prop-types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
  View, Text, StyleSheet, Switch,
} from 'react-native';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { setFilters } from '../store/actions/meals';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    width: '80%',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

const FilterSwitch = ({ label, value, setValue }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Colors.primaryColor}
      value={value}
      onValueChange={(newValue) => setValue(newValue)}
    />
  </View>
);

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label="Gluten-free" value={isGlutenFree} setValue={setIsGlutenFree} />
      <FilterSwitch label="Lactose-free" value={isLactoseFree} setValue={setIsLactoseFree} />
      <FilterSwitch label="Vegan" value={isVegan} setValue={setIsVegan} />
      <FilterSwitch label="Vegetarian" value={isVegetarian} setValue={setIsVegetarian} />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Filter Meals',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Save" iconName="ios-save" onPress={navigation.getParam('save')} />
    </HeaderButtons>
  ),
});

FilterSwitch.propTypes = {
  label: string.isRequired,
  value: bool.isRequired,
  setValue: func.isRequired,
};
FiltersScreen.propTypes = {};

export default FiltersScreen;
