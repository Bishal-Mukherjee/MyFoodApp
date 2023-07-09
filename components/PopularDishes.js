import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PopularDishes = ({ popularDishes }) => {
  const [selectedDishId, setSelectedDishId] = useState(3);

  return (
    <View style={{ padding: 10, marginTop: 5 }}>
      <Text style={{ fontSize: 25, fontWeight: 600, color: 'black' }}>
        Popular Dishes
      </Text>

      {popularDishes.length ? (
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollview}>
            {popularDishes?.map((dish, index) => (
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
                  ]}
                  key={index}>
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
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default PopularDishes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
    height: 75,
    width: 350,
    marginTop: 50,
    borderRadius: 10,
    elevation: 10,
  },
  scrollview: {
    backgroundColor: 'white',
    marginTop: 15,
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
