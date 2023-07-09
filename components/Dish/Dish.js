/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';

const Dishes = ({ navigation, popularDishes }) => {
  const [selectedDishId, setSelectedDishId] = useState(3);

  return (
    <View>
      <View>
        {popularDishes ? (
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollview}>
              {popularDishes?.map((dish, index) => (
                <View key={index}>
                  <Pressable onPress={() => setSelectedDishId(dish.id)}>
                    <View
                      style={[
                        styles.box,
                        selectedDishId === dish.id
                          ? {
                              borderWidth: 2,
                            }
                          : {
                              borderWidth: 0,
                            },
                      ]}>
                      <ImageBackground
                        source={{ uri: dish.image }}
                        style={styles.dish}
                        width={200}
                        height={200}
                        borderRadius={50}>
                        <Text style={styles.dishname}>{dish.name}</Text>
                      </ImageBackground>
                    </View>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Dishes;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'orange',
    borderWidth: 1,
    padding: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  scrollview: {
    backgroundColor: 'white',
    marginTop: 20,
    overflow: 'hidden',
    padding: 5,
  },
  dish: {
    height: 90,
    width: 90,
    borderRadius: 50,
    opacity: 0.9,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  dishname: { color: 'white' },
});
