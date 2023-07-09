/* eslint-disable no-extend-native */
/* eslint-disable consistent-this */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Divider, HStack, Spinner, VStack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getparticulardish } from '../services/dishes';

String.prototype.capitalize = function () {
  const words = this;
  const firstletter = words.substring(0, 1).toUpperCase();
  const restword = words.substring(1, words.length);
  const f = firstletter + restword;
  return f;
};

const equipmentsObj = {
  Refrigerator: <MaterialCommunityIcons name={'fridge-outline'} size={50} />,
  Microwave: <MaterialCommunityIcons name={'microwave'} size={50} />,
  Stove: <MaterialCommunityIcons name={'stove'} size={50} />,
};

const IngredientsList = ({ title, items }) => {
  return (
    <VStack>
      <HStack style={{ marginTop: 15 }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          {title.capitalize()}
        </Text>

        <View style={{ marginTop: 5 }}>
          <MaterialIcons
            name={'arrow-drop-down'}
            style={{ color: 'black' }}
            size={20}
          />
        </View>
      </HStack>

      <VStack>
        {items.map((item, index) => (
          <View>
            <HStack justifyContent={'space-between'}>
              <View>
                <Text style={{ color: 'black', fontFamily: 'Poppins-Regular' }}>
                  {item.name}
                </Text>
              </View>
              <View>
                <Text style={{ color: 'black', fontFamily: 'Poppins-Bold' }}>
                  {item.quantity}
                </Text>
              </View>
            </HStack>
          </View>
        ))}
      </VStack>
      <Divider style={{ marginVertical: 5 }} />
    </VStack>
  );
};

const Dish = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [dish, setDish] = useState({});

  const handleParticularDish = async () => {
    try {
      setShowLoader(true);
      const response = await getparticulardish();
      setDish(response);
      setShowLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    handleParticularDish();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {showLoader ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Spinner />
        </View>
      ) : (
        <View style={{ padding: 25 }}>
          {Object.keys(dish).length ? (
            <>
              <HStack alignItems={'center'}>
                <View>
                  <Text
                    style={{ fontSize: 25, fontWeight: 900, color: 'black' }}>
                    {dish.name}
                  </Text>
                </View>

                <View>
                  <HStack
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={{
                      height: 20,
                      width: 40,
                      backgroundColor: '#2dc653',
                      borderRadius: 5,
                      marginLeft: 10,
                      marginTop: 10,
                    }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>
                      {'4.2'}
                    </Text>

                    <FontAwesome
                      name={'star'}
                      size={10}
                      style={{ color: 'white', marginLeft: 3 }}
                    />
                  </HStack>
                </View>
              </HStack>

              <HStack alignItems={'center'} style={{ marginTop: 15 }}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={20}
                  color={'black'}
                />
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 5,
                    fontWeight: 700,
                    color: 'black',
                  }}>
                  {dish?.timeToPrepare}
                </Text>
              </HStack>

              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  {'Ingredients'}
                </Text>
              </View>

              <View>
                {dish?.ingredients.vegetables ? (
                  <IngredientsList
                    title={'vegetables'}
                    items={dish?.ingredients.vegetables}
                  />
                ) : null}
              </View>

              <View>
                {dish?.ingredients.spices ? (
                  <IngredientsList
                    title={'spices'}
                    items={dish.ingredients.spices}
                  />
                ) : null}
              </View>

              <View style={{ marginTop: 15 }}>
                {dish?.ingredients.appliances ? (
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      {'Appliances'}
                    </Text>
                    <HStack>
                      {dish.ingredients.appliances.map((appliance, index) => (
                        <View key={index}>
                          <VStack style={{ margin: 10 }} alignItems={'center'}>
                            {equipmentsObj[appliance.name]}
                            <Text style={{ textAlign: 'center' }}>
                              {appliance.name}
                            </Text>
                          </VStack>
                        </View>
                      ))}
                    </HStack>
                  </View>
                ) : null}
              </View>
            </>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default Dish;
