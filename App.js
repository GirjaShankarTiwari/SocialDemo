import {View, Text} from 'react-native';
import React from 'react';
import Counter from './components/Counter';
import RedHOC from './components/RedHOC';
import GreenHOC from './components/GreenHOC';
import YellowHOC from './components/YellowHOC';

const App = () => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text>Example of HighOrderComponent with Counter's</Text>

      <View
        style={{
          width: '100%',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
        }}>
        <RedHOC cmp={Counter} />
        <GreenHOC cmp={Counter} />
        <YellowHOC cmp={Counter} />
      </View>
    </View>
  );
};

export default App;
