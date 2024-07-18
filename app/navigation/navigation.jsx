import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/Intro';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SearchNurse from '../screens/SearchNurse';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" options={{ headerShown: false }} >
          {(props) => <Intro {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ title: 'Login', headerBackTitle: 'Back' }} >
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ title: 'Home', headerBackTitle: 'Back' }} >
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ title: 'Register', headerBackTitle: 'Back' }} >
          {(props) => <Register {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SearchNurse" options={{ title: 'Search Nurse', headerBackTitle: 'Back' }} >
          {(props) => <SearchNurse {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
