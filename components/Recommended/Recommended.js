/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Menu, Stack, VStack, HStack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const equipmentsObj = {
  Refrigerator: <MaterialCommunityIcons name={'fridge-outline'} size={20} />,
  Microwave: <MaterialCommunityIcons name={'microwave'} size={20} />,
};

const DishCard = ({
  name,
  rating,
  description,
  equipments,
  image,
  handleDishSelection,
}) => {
  return (
    <View>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <VStack>
          <HStack style={{ marginTop: 10 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 600, color: 'black' }}>
                {name}
              </Text>
            </View>

            <View style={{ marginLeft: 15, marginTop: 5 }}>
              <HStack>
                <Fontisto
                  name={'radio-btn-active'}
                  size={10}
                  style={{ color: '#2dc653', marginTop: 5 }}
                />

                <HStack
                  alignItems={'center'}
                  justifyContent={'center'}
                  style={{
                    height: 20,
                    width: 40,
                    backgroundColor: '#2dc653',
                    borderRadius: 5,
                    marginLeft: 10,
                  }}>
                  <Text style={{ color: 'white', fontSize: 10 }}>{rating}</Text>

                  <FontAwesome
                    name={'star'}
                    size={10}
                    style={{ color: 'white', marginLeft: 3 }}
                  />
                </HStack>
              </HStack>
            </View>
          </HStack>

          <HStack alignItems={'center'}>
            {equipments.map((eq, index) => (
              <VStack
                style={{ margin: 5 }}
                justifyContent={'center'}
                alignItems={'center'}>
                {equipmentsObj[eq]}
                <Text style={{ fontSize: 10 }}>{eq}</Text>
              </VStack>
            ))}

            <VStack style={{ marginLeft: 15 }}>
              <Pressable onPress={() => handleDishSelection()}>
                <View>
                  <Text
                    style={{ fontWeight: 600, color: 'black', fontSize: 10 }}>
                    Ingredients
                  </Text>
                </View>

                <View>
                  <Text
                    style={{ fontWeight: 600, color: 'orange', fontSize: 10 }}>
                    View List {'>'}
                  </Text>
                </View>
              </Pressable>
            </VStack>
          </HStack>

          <View style={{ width: 250, padding: 1 }}>
            <Text style={{ fontSize: 10 }}>{description}</Text>
          </View>
        </VStack>

        <VStack>
          <Image
            source={{
              uri: image,
            }}
            style={{ height: 110, width: 120, borderRadius: 10 }}
          />

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Pressable style={styles.cuisine}>
              <Text style={{ color: 'orange', fontWeight: 500 }}>
                Add {'+'}
              </Text>
            </Pressable>
          </View>
        </VStack>
      </Stack>
    </View>
  );
};

const RecommendedDish = ({ navigation, recommendedDishes }) => {
  const handleDishSelection = () => {
    try {
      navigation.navigate('dish');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ padding: 10, marginTop: 10, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}>
          <HStack>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Bold',
                  color: 'black',
                }}>
                Recommended
              </Text>
            </View>

            <View style={{ marginTop: 5 }}>
              <MaterialIcons
                name={'arrow-drop-down'}
                style={{ color: 'black' }}
                size={20}
              />
            </View>
          </HStack>

          <VStack alignSelf="flex-start">
            <Menu
              w="160"
              shouldOverlapWithTrigger={false}
              placement={'bottom left'}
              trigger={triggerProps => {
                return (
                  <Pressable
                    style={styles.menubutton}
                    alignSelf="center"
                    variant="solid"
                    {...triggerProps}>
                    <Text style={{ color: 'white' }}>Menu</Text>
                  </Pressable>
                );
              }}>
              <Menu.Item>Recently Ordered</Menu.Item>
              <Menu.Item>Most Liked</Menu.Item>
            </Menu>
          </VStack>
        </Stack>

        <View style={{ marginTop: 5 }}>
          {recommendedDishes.map((dish, index) => (
            <View style={{ marginVertical: 10 }} key={index}>
              <DishCard handleDishSelection={handleDishSelection} {...dish} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecommendedDish;

const styles = StyleSheet.create({
  cuisine: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'orange',
    borderWidth: 1,
    marginTop: -15,
    width: 80,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menubutton: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
