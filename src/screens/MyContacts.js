import {
  View,
  Text,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';

const MyContacts = () => {
  useEffect(() => {
    readContacts();
  }, []);

  const readContacts = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'OK',
    })
      .then(res => {
        console.log('Permission: ', res);
        if (res === 'granted') {
          if (Contacts) {
            Contacts.getCount()
              .then(res => console.log(res))
              .catch(err => console.log('error>>' + err));
          } else {
            console.log('Contacts module is null or undefined');
          }
        }
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 16,
        }}>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 21,
    fontWeight: 500,
  },
});

export default MyContacts;
