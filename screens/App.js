import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home.js';
import CreateEmployee from './CreateEmployee.js';
import Profile from './Profile.js';

const Stack = createStackNavigator();
const options = {
  title: 'My Sweet Home',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: '#006aff'},
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{headerBackTitle: 'back'}}>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen
          name="Create"
          component={CreateEmployee}
          options={{...options, title: 'Create Employee'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{...options, title: 'Profile'}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
