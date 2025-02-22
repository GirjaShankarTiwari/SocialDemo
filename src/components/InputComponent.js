import {View, Text, TextInput} from 'react-native';
import React from 'react';

const InputComponent = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

export default InputComponent;
