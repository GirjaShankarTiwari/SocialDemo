import {View, Text} from 'react-native';
import React from 'react';

const RedHOC = props => {
  return (
    <View style={{backgroundColor: 'red', borderRadius: 5}}>
      <props.cmp />
    </View>
  );
};

export default RedHOC;
