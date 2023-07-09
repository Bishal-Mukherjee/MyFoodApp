import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Spinner } from 'native-base';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('parent');
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 160, height: 160, borderRadius: 5 }}
      />
      <Spinner style={{ marginTop: 10 }} />
    </View>
  );
};

export default Splash;
