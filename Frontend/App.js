import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingPage from './screens/LoadingPage';
import AboutPage from  './screens/AboutPage';
import SignupPage from './screens/SignupPage'
import LoginPage from  './screens/LoginPage'
import HomePage from './screens/HomePage';
import LandOnePage from './screens/LandOnePage'
import LandDetailsPage from './screens/LandDetailsPage';
import CartPage from './screens/CartPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingPage}/>
        <Stack.Screen name="About" component={AboutPage}/>
        <Stack.Screen name="SignUp" component={SignupPage}/>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="LandOne" component={LandOnePage} />
        <Stack.Screen name="LandDetails" component={LandDetailsPage} />
        <Stack.Screen name="Cart" component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
