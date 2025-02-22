import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={{fontSize: 32}}>Splash</Text>
    </View>
  );
};

export default Splash;
