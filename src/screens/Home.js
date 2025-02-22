import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        console.log(JSON.stringify(data));
      } catch (err) {
        console.log('Error in data fetching: ', err);
      }
    };
    getUserData();
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
