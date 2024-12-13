import {View, Text} from 'react-native';
import React from 'react';

const GreenHOC = props => {
  return (
    <View style={{backgroundColor: 'green', borderRadius: 5, marginTop: 10}}>
      <props.cmp />
    </View>
  );
};

export default GreenHOC;
