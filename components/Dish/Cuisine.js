import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'native-base';

const Cuisines = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Italian');

  const cuisines = [
    { name: 'Italian' },
    { name: 'Indian' },
    { name: 'French' },
    { name: 'Chinese' },
    { name: 'Japanese' },
  ];

  const handleCusineSelection = tempCuisine => {
    try {
      setSelectedCuisine(tempCuisine);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        {cuisines.map((cuisine, index) => (
          <View style={styles.box} key={index}>
            <Button
              style={[
                styles.cuisine,
                selectedCuisine === cuisine.name
                  ? {
                      borderColor: 'orange',
                      borderWidth: 2,
                    }
                  : {},
              ]}
              onPress={() => handleCusineSelection(cuisine.name)}>
              <Text
                style={
                  selectedCuisine === cuisine.name
                    ? {
                        fontWeight: 700,
                        color: 'orange',
                      }
                    : {
                        fontWeight: 500,
                        color: 'gray',
                      }
                }>
                {cuisine.name}
              </Text>
            </Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cuisines;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    width: 120,
  },
  topsection: {
    backgroundColor: 'black',
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timesection: {
    backgroundColor: 'white',
    height: 80,
    width: 350,
    marginTop: 55,
    borderRadius: 10,
    elevation: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    backgroundColor: 'white',
    marginTop: 50,
    overflow: 'hidden',
    padding: 5,
  },
  cuisine: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
});
