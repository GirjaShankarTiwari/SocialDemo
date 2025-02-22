import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {object, string, number, date, InferType} from 'yup';

let userSchema = object({
  name: string().required('Please enter name'),
  email: string().email('Please enter valid email'),
  phone: string().required('Please enter phone number'),
  password: string().required('Please enter password'),
  conPassword: string().required('Please enter conf-password'),
});

const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConfPassword] = useState('');

  const goToNextScreen = () => {
    navigation.navigate('Home');
  };

  const value = {
    name: name,
    email: email,
    phone: phone,
    password: password,
    conPassword: conPassword,
  };

  const createLoginSession = async () => {
    try {
      // await AsyncStorage.setName('name', name);
      // await AsyncStorage.setName('email', email);
      // await AsyncStorage.setName('phone', phone);
      // await AsyncStorage.setName('password', password);
      // await AsyncStorage.setName('conPassword', conPassword);
      await AsyncStorage.setItem('user', JSON.stringify(value));
      goToNextScreen();
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            password: '',
            conPassword: '',
          }}
          onSubmit={values => console.log(values)}
          validationSchema={userSchema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{flex: 1}}>
              <View style={{flex: 0.8}}>
                <Text style={{textAlign: 'center', margin: 20, fontSize: 32}}>
                  Login Page
                </Text>
                <View style={{height: '85%', margin: 16, gap: 10}}>
                  <Text>Name</Text>
                  <TextInput
                    placeholder="Enter name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={{borderWidth: 0.5, borderRadius: 4, marginTop: 5}}
                  />
                  {errors.name && (
                    <Text
                      style={{color: 'red', width: '90%', alignSelf: 'center'}}>
                      {errors.name}
                    </Text>
                  )}
                  <Text>Email</Text>
                  <TextInput
                    placeholder="Enter email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={{borderWidth: 0.5, borderRadius: 4, marginTop: 5}}
                  />
                  {errors.email && (
                    <Text
                      style={{color: 'red', width: '90%', alignSelf: 'center'}}>
                      {errors.email}
                    </Text>
                  )}
                  <Text>Phone</Text>
                  <TextInput
                    placeholder="Enter phone"
                    keyboardType="phone-pad"
                    maxLength={10}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    style={{borderWidth: 0.5, borderRadius: 4, marginTop: 5}}
                  />
                  {errors.phone && (
                    <Text
                      style={{color: 'red', width: '90%', alignSelf: 'center'}}>
                      {errors.phone}
                    </Text>
                  )}
                  <Text>Password</Text>
                  <TextInput
                    placeholder="Enter password"
                    maxLength={10}
                    keyboardType="decimal-pad"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={{borderWidth: 0.5, borderRadius: 4, marginTop: 5}}
                  />
                  {errors.password && (
                    <Text
                      style={{color: 'red', width: '90%', alignSelf: 'center'}}>
                      {errors.password}
                    </Text>
                  )}
                  <Text>Confirm-password</Text>
                  <TextInput
                    placeholder="Enter confirm-password"
                    maxLength={10}
                    keyboardType="decimal-pad"
                    onChangeText={handleChange('conPassword')}
                    onBlur={handleBlur('nconPasswordame')}
                    value={values.conPassword}
                    style={{borderWidth: 0.5, borderRadius: 4, marginTop: 2}}
                  />
                  {errors.conPassword && (
                    <Text
                      style={{color: 'red', width: '90%', alignSelf: 'center'}}>
                      {errors.conPassword}
                    </Text>
                  )}
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <TouchableOpacity
                  onPress={createLoginSession}
                  style={{
                    backgroundColor: 'green',
                    margin: 16,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 21, color: '#fff'}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Login;
