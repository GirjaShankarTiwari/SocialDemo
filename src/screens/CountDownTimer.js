import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CountDownTimer = () => {
  const arr = [4, 6, 8, 10];
  const [currentCount, setCurrentCount] = useState(arr[0]);
  const [index, setIndex] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isCounting && index < arr.length) {
      setIsCounting(true);
    }

    if (isCounting && currentCount > 0) {
      timer = setInterval(() => {
        setCurrentCount(prevCount => prevCount - 1);
      }, 1500);
    } else if (currentCount === 0 && index < arr.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
      setCurrentCount(arr[index + 1]);
    }

    return () => clearInterval(timer);
  }, [isCounting, currentCount, index, arr]);

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>Count Down Timer</Text>
        <Text style={[styles.title, {fontSize: 16}]}>
          timers = [4, 6, 8, 10]
        </Text>
        <Text style={[styles.title, {fontSize: 16}]}>
          Index Value is : {index}
        </Text>
        <Text
          style={[
            styles.title,
            {
              borderWidth: 1,
              borderRadius: 50,
              width: 80,
              height: 80,
              alignSelf: 'center',
              textAlignVertical: 'center',
            },
          ]}>
          {currentCount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 30,
    textAlign: 'center',
  },
});

export default CountDownTimer;
