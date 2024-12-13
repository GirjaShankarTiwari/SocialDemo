import {View, Text} from 'react-native';
import React from 'react';

const YellowHOC = props => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#d3cf04',
        borderRadius: 5,
      }}>
      <props.cmp />
    </View>
  );
};

export default YellowHOC;
