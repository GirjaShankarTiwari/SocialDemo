import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../src/screens/LoginScreen';
import AdminScreen from '../src/screens/AdminScreen';
import UserScreen from '../src/screens/UserScreen';
import GuestScreen from '../src/screens/GuestScreen';
// Stack Navigator

const Stack = createNativeStackNavigator();

// Stack Navigators for each role
const AdminStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const GuestStack = createNativeStackNavigator();

const AdminStackNavigator = () => {
  <AdminStack.Navigator>
    <AdminStack.Screen name="adminScreen" component={AdminScreen} />
  </AdminStack.Navigator>;
};

const UserStackNavigator = () => {
  <UserStack.Navigator>
    <UserStack.Screen name="userScreen" component={UserScreen} />
  </UserStack.Navigator>;
};

const GuestStackNavigator = () => {
  <GuestStack.Navigator>
    <GuestStack.Screen name="guestScreen" component={GuestScreen} />
  </GuestStack.Navigator>;
};

const AppNavigation = () => {
  const [userRole, setUserRole] = useState(''); //// Initially no role
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userRole ? (
          <>
            {/* Conditionally render stack navigator based on userRole */}
            {userRole === 'admin' && <AdminStackNavigator />}
            {userRole === 'user' && <UserStackNavigator />}
            {userRole === 'guest' && <GuestStackNavigator />}
          </>
        ) : (
          // Login Screen if no role is selected
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
