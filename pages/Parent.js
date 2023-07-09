/* eslint-disable react-native/no-inline-styles */
import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider, Stack, Spinner } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getpopulardishes } from '../services/dishes';
import Cuisines from '../components/Dish/Cuisine';
import Dish from '../components/Dish/Dish';
import RecommendedDish from '../components/Recommended/Recommended';

const TimePanel = () => {
  return (
    <View style={styles.topsection}>
      <View style={styles.timesection}>
        <Stack direction={'row'} alignItems={'center'}>
          <MaterialCommunityIcons
            name="calendar-month"
            size={30}
            color={'black'}
          />
          <Text
            style={{ fontFamily: 'Poppins-Bold', fontSize: 13, marginLeft: 5 }}>
            21 May 2021
          </Text>
        </Stack>

        <View style={{ margin: 15 }}>
          <Divider orientation="vertical" />
        </View>

        <Stack direction={'row'} alignItems={'center'}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={30}
            color={'black'}
          />
          <Text
            style={{ fontFamily: 'Poppins-Bold', fontSize: 13, marginLeft: 5 }}>
            10:31 PM - 12:30 PM
          </Text>
        </Stack>
      </View>
    </View>
  );
};

const Parent = ({ navigation }) => {
  const [popularDishes, setPopularDishes] = useState([]);

  const [recommendedDishes, setRecommendedDishes] = useState([]);

  const [showLoader, setShowLoader] = useState(false);

  const handlePopularDishes = async () => {
    try {
      setShowLoader(true);
      const response = await getpopulardishes();
      setPopularDishes(response.popularDishes);
      setRecommendedDishes(response.dishes);
      setShowLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    handlePopularDishes();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TimePanel />
        <Cuisines />

        <View style={{ padding: 10, marginTop: 10 }}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
              color: 'black',
            }}>
            Popular Dishes
          </Text>

          {showLoader ? (
            <Spinner size={25} />
          ) : (
            <Dish navigation={navigation} popularDishes={popularDishes} />
          )}
        </View>
      </View>
      <RecommendedDish
        navigation={navigation}
        recommendedDishes={recommendedDishes}
      />
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
});
