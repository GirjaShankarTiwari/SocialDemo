import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 16, marginTop: 10, fontWeight: 500}}>
        Counter Value : {count}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f8c0c0',
    height: 50,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default Counter;
